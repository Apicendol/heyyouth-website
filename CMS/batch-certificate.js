(function () {
    'use strict';

    let parsedParticipants = [];
    let isProcessing = false;
    let availableTemplates = [];

    // Helper: Escape HTML
    function esc(s) {
        if (!s) return '';
        const d = document.createElement('div');
        d.textContent = String(s);
        return d.innerHTML;
    }

    // Helper: Rounded Rectangle for Canvas
    function roundRect(ctx, x, y, w, h, r) {
        if (w < 2 * r) r = w / 2;
        if (h < 2 * r) r = h / 2;
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + h, r);
        ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.closePath();
    }

    function ensureModalInDOM() {
        if (document.getElementById('modal-batch-certificates')) return;

        const modalDiv = document.createElement('div');
        modalDiv.id = 'modal-batch-certificates';
        modalDiv.className = 'fixed inset-0 z-[105] hidden flex items-center justify-center p-3 sm:p-4';
        modalDiv.innerHTML = `
        <div class="modal-overlay absolute inset-0 bg-slate-900/60 backdrop-blur-xs" onclick="closeBatchCertificateModal()"></div>
        <div class="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto z-10 border border-gray-100 dark:border-slate-800 flex flex-col font-sans">
            
            <!-- Modal Header -->
            <div class="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between rounded-t-3xl z-10">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center text-lg font-bold shadow-sm">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h3 class="font-extrabold text-heading text-base sm:text-lg">Batch Certificate Generator</h3>
                            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">ZIP Exporter</span>
                        </div>
                        <p class="text-xs text-gray-500 dark:text-gray-400">Import berkas Excel/CSV untuk render massal PDF sertifikat ke dalam 1 arsip ZIP.</p>
                    </div>
                </div>
                <button onclick="closeBatchCertificateModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-500 hover:text-heading transition-colors flex items-center justify-center cursor-pointer">
                    <i class="fas fa-times text-xs"></i>
                </button>
            </div>

            <!-- Modal Body -->
            <div class="p-6 space-y-5 text-xs sm:text-sm">
                <!-- Configuration Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-heading mb-1.5">
                            Pilih Template Layout Sertifikat
                        </label>
                        <select id="batch-template-select" class="w-full px-3 py-2.5 border border-gray-200 dark:border-slate-700 rounded-xl text-xs bg-white dark:bg-slate-800 text-heading focus:outline-none focus:ring-2 focus:ring-primary/20">
                            <option value="__DEFAULT__">Template Bawaan Hey Youth (Default)</option>
                        </select>
                        <p class="text-[11px] text-gray-400 mt-1">Dapat dikustomisasi dari menu Desainer Layout.</p>
                    </div>

                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-heading mb-1.5">
                            Nama Acara / Event Default
                        </label>
                        <input type="text" id="batch-default-event" value="HeyYouth Digital Summit 2026"
                            class="w-full px-3 py-2.5 border border-gray-200 dark:border-slate-700 rounded-xl text-xs bg-white dark:bg-slate-800 text-heading focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="Contoh: HeyYouth Digital Summit 2026">
                        <p class="text-[11px] text-gray-400 mt-1">Digunakan jika kolom event di file spreadsheet kosong.</p>
                    </div>
                </div>

                <!-- Export Format & Sync Options -->
                <div class="p-4 bg-gray-50 dark:bg-slate-800/60 rounded-2xl border border-gray-100 dark:border-slate-800">
                    <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                        <div>
                            <span class="block text-xs font-bold text-heading mb-1.5">Format Berkas di dalam ZIP:</span>
                            <div class="flex items-center gap-4 text-xs">
                                <label class="inline-flex items-center gap-1.5 cursor-pointer font-medium text-heading">
                                    <input type="radio" name="batch-export-format" value="pdf" checked class="text-primary accent-primary">
                                    <span>Dokumen PDF (.pdf) <strong class="text-emerald-600 dark:text-emerald-400 text-[10px] bg-emerald-100 dark:bg-emerald-950 px-1.5 py-0.5 rounded font-bold">Rekomendasi</strong></span>
                                </label>
                                <label class="inline-flex items-center gap-1.5 cursor-pointer font-medium text-heading">
                                    <input type="radio" name="batch-export-format" value="png" class="text-primary accent-primary">
                                    <span>Gambar High-Res (.png)</span>
                                </label>
                            </div>
                        </div>

                        <div class="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1.5 rounded-xl border border-emerald-100 dark:border-emerald-900/50">
                            <i class="fas fa-database text-xs"></i>
                            <span class="text-[11px]">Otomatis tersinkron ke Database Supabase</span>
                        </div>
                    </div>
                </div>

                <!-- Download Format Template Helper -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-gradient-to-r from-emerald-50/70 to-blue-50/70 dark:from-emerald-950/30 dark:to-blue-950/30 rounded-2xl border border-emerald-100 dark:border-slate-800 gap-3">
                    <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm font-bold flex-shrink-0">
                            <i class="fas fa-file-excel"></i>
                        </div>
                        <div>
                            <p class="text-xs font-bold text-heading">Unduh Template Siap Pakai (Format Rapi)</p>
                            <p class="text-[11px] text-gray-500 dark:text-gray-400">
                                Kolom: <strong>Nama, Email, Peran, Acara, Tanggal, No. Sertifikat, No. HP</strong>
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 flex-shrink-0">
                        <button type="button" onclick="downloadCertificateTemplateExcel()"
                            class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer">
                            <i class="fas fa-file-excel text-[11px]"></i> Template Excel (.xlsx)
                        </button>
                        <button type="button" onclick="downloadCertificateTemplateCSV()"
                            class="px-2.5 py-1.5 bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-700 rounded-xl text-xs font-medium transition-all shadow-xs flex items-center gap-1 cursor-pointer">
                            <i class="fas fa-file-csv text-[11px] text-blue-500"></i> CSV
                        </button>
                    </div>
                </div>

                <!-- Drag & Drop File Zone -->
                <div>
                    <input type="file" id="batch-file-input" accept=".xlsx, .xls, .csv" class="hidden">
                    <div id="batch-dropzone-box"
                        class="p-7 border-2 border-dashed border-gray-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary rounded-2xl text-center cursor-pointer transition-all bg-gray-50/50 dark:bg-slate-800/30 group">
                        <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-2 text-xl group-hover:scale-110 transition-transform">
                            <i class="fas fa-cloud-arrow-up"></i>
                        </div>
                        <h4 class="font-bold text-heading text-xs sm:text-sm mb-1">
                            Pilih berkas Excel (.xlsx / .xls) atau CSV (.csv)
                        </h4>
                        <p class="text-[11px] text-gray-500 dark:text-gray-400">
                            Klik di sini untuk menjelajah berkas di perangkat Anda atau seret berkas langsung ke dalam kotak ini.
                        </p>
                    </div>
                </div>

                <!-- Preview Table Container -->
                <div id="batch-preview-container" class="hidden space-y-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <i class="fas fa-table text-primary"></i>
                            <span class="font-bold text-xs text-heading">Pratinjau Data:</span>
                            <span id="batch-selected-filename" class="text-xs font-mono text-gray-500 truncate max-w-[200px]">file.xlsx</span>
                        </div>
                        <span id="batch-detected-count" class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                            0 data valid
                        </span>
                    </div>

                    <div class="border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden max-h-48 overflow-y-auto">
                        <table class="w-full text-left">
                            <thead class="bg-gray-50 dark:bg-slate-800/80 text-[10px] uppercase font-bold text-gray-500 sticky top-0">
                                <tr>
                                    <th class="py-2 px-3">#</th>
                                    <th class="py-2 px-3">Nama</th>
                                    <th class="py-2 px-3">Email</th>
                                    <th class="py-2 px-3">Peran</th>
                                    <th class="py-2 px-3">No. Sertifikat</th>
                                    <th class="py-2 px-3">Acara</th>
                                </tr>
                            </thead>
                            <tbody id="batch-preview-tbody" class="divide-y divide-gray-100 dark:divide-slate-800"></tbody>
                        </table>
                    </div>
                </div>

                <!-- Real-time Progress Bar -->
                <div id="batch-progress-container" class="hidden p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/60 space-y-2">
                    <div class="flex justify-between items-center text-xs font-bold">
                        <span id="batch-progress-status" class="text-amber-900 dark:text-amber-200 truncate max-w-[80%]">
                            Mempersiapkan render...
                        </span>
                        <span id="batch-progress-percent" class="text-amber-700 dark:text-amber-300 font-mono">0%</span>
                    </div>
                    <div class="w-full h-3 bg-amber-200/60 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                        <div id="batch-progress-bar" class="h-full w-0 bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500 rounded-full transition-all duration-150"></div>
                    </div>
                    <p class="text-[10px] text-amber-700/80 dark:text-amber-300/80 text-center">
                        Proses berjalan di memori browser secara aman tanpa membebani server. Harap jangan menutup tab ini.
                    </p>
                </div>
            </div>

            <!-- Modal Footer -->
            <div class="sticky bottom-0 bg-gray-50 dark:bg-slate-850 px-6 py-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-end gap-3 rounded-b-3xl">
                <button type="button" onclick="closeBatchCertificateModal()"
                    class="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                    Batal
                </button>
                <button type="button" id="batch-start-btn" disabled onclick="startBatchCertificateProcess()"
                    class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-xs font-bold transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer">
                    <i class="fas fa-file-zipper"></i> Mulai Render & Unduh ZIP
                </button>
            </div>
        </div>`;

        document.body.appendChild(modalDiv);
        bindDropzoneEvents();
    }

    // =========================================================================
    // 1. OPEN / CLOSE BATCH MODAL
    // =========================================================================
    window.openBatchCertificateModal = async function (presetEventName) {
        ensureModalInDOM();
        const modal = document.getElementById('modal-batch-certificates');
        if (!modal) return;

        modal.classList.remove('hidden');
        resetBatchState();

        // Load available templates into select
        const templateSelect = document.getElementById('batch-template-select');
        if (templateSelect) {
            templateSelect.innerHTML = '<option value="">-- Memuat Template Desain... --</option>';
            try {
                availableTemplates = [];
                const client = window.supabase || (typeof supabase !== 'undefined' ? supabase : null);
                if (client) {
                    const { data, error } = await client
                        .from('certificate_settings')
                        .select('event_name, template_image, layout_json, updated_at')
                        .order('updated_at', { ascending: false });

                    if (!error && Array.isArray(data)) {
                        availableTemplates = data;
                    }
                }

                templateSelect.innerHTML = '';
                // Default option
                const defaultOpt = document.createElement('option');
                defaultOpt.value = '__DEFAULT__';
                defaultOpt.textContent = 'Template Bawaan Hey Youth (Default Template)';
                templateSelect.appendChild(defaultOpt);

                availableTemplates.forEach(t => {
                    if (t.event_name && t.event_name !== '-- DEFAULT LAYOUT --') {
                        const opt = document.createElement('option');
                        opt.value = t.event_name;
                        opt.textContent = `Event: ${t.event_name}`;
                        if (presetEventName && t.event_name.toLowerCase() === presetEventName.toLowerCase()) {
                            opt.selected = true;
                        }
                        templateSelect.appendChild(opt);
                    }
                });

                if (presetEventName) {
                    document.getElementById('batch-default-event').value = presetEventName;
                }
            } catch (err) {
                console.warn("Gagal memuat template dari Supabase, menggunakan default:", err);
                templateSelect.innerHTML = '<option value="__DEFAULT__">Template Bawaan Hey Youth (Default)</option>';
            }
        }
    };

    window.closeBatchCertificateModal = function () {
        if (isProcessing) {
            if (!confirm("Proses pembuatan sertifikat sedang berjalan. Yakin ingin membatalkan?")) {
                return;
            }
            isProcessing = false;
        }
        const modal = document.getElementById('modal-batch-certificates');
        if (modal) modal.classList.add('hidden');
        resetBatchState();
    };

    function resetBatchState() {
        parsedParticipants = [];
        isProcessing = false;

        const fileInput = document.getElementById('batch-file-input');
        if (fileInput) fileInput.value = '';

        const dropzone = document.getElementById('batch-dropzone-box');
        if (dropzone) dropzone.classList.remove('border-emerald-500', 'bg-emerald-50/20');

        const previewContainer = document.getElementById('batch-preview-container');
        if (previewContainer) previewContainer.classList.add('hidden');

        const progressContainer = document.getElementById('batch-progress-container');
        if (progressContainer) progressContainer.classList.add('hidden');

        const startBtn = document.getElementById('batch-start-btn');
        if (startBtn) {
            startBtn.disabled = true;
            startBtn.innerHTML = '<i class="fas fa-file-zipper mr-1.5"></i> Mulai Render & Unduh ZIP';
        }

        const statsBadge = document.getElementById('batch-detected-count');
        if (statsBadge) statsBadge.textContent = '0 data';
    }

    // =========================================================================
    // 2. DOWNLOAD TEMPLATE EXCEL & CSV CONTOH
    // =========================================================================
    window.downloadCertificateTemplateExcel = function () {
        if (typeof XLSX === 'undefined') {
            window.downloadCertificateTemplateCSV();
            return;
        }

        const headers = [
            "Nama Lengkap",
            "Email",
            "Peran / Role",
            "Nama Acara / Event",
            "Tanggal Terbit",
            "Nomor Sertifikat",
            "No. Telepon / WhatsApp"
        ];

        const sampleRows = [
            ["Budi Santoso", "budi.santoso@email.com", "Participant", "HeyYouth Digital Summit 2026", "18 Juli 2026", "HY-DS26-0001", "08123456789"],
            ["Siti Rahmawati", "siti.rahma@email.com", "Volunteer Teacher", "Kelas Kolong Jakarta", "20 Agustus 2026", "HY-VOL26-0002", "08571234567"],
            ["Ahmad Pratama", "ahmad.p@email.com", "Speaker", "Webinar AI for Youth", "15 September 2026", "HY-SPK26-0003", "08198765432"],
            ["Nadya Aulia", "nadya@email.com", "Committee", "HeyYouth Annual Festival 2026", "10 Oktober 2026", "HY-COM26-0004", "08213456789"],
            ["Rian Hendrawan", "rian.h@email.com", "Mentor", "Teacher Class Batch 4", "25 November 2026", "HY-MNT26-0005", "08134567890"]
        ];

        const wsData = [headers, ...sampleRows];
        const ws = XLSX.utils.aoa_to_sheet(wsData);

        // Lebar kolom rapi agar tidak terpotong saat dibuka di Excel
        ws['!cols'] = [
            { wch: 24 }, // Nama Lengkap
            { wch: 28 }, // Email
            { wch: 20 }, // Peran / Role
            { wch: 32 }, // Nama Acara / Event
            { wch: 20 }, // Tanggal Terbit
            { wch: 22 }, // Nomor Sertifikat
            { wch: 24 }  // No. Telepon / WhatsApp
        ];

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Daftar Penerima");

        XLSX.writeFile(wb, "Template_Penerima_Sertifikat_HeyYouth.xlsx");
    };

    window.downloadCertificateTemplateCSV = function () {
        // Gunakan directive sep=,\r\n dan UTF-8 BOM agar Excel di OS Windows/Indonesia otomatis memecah kolom
        const csvContent =
            `sep=,\r\n` +
            `"Nama Lengkap","Email","Peran / Role","Nama Acara / Event","Tanggal Terbit","Nomor Sertifikat","No. Telepon / WhatsApp"\r\n` +
            `"Budi Santoso","budi.santoso@email.com","Participant","HeyYouth Digital Summit 2026","18 Juli 2026","HY-DS26-0001","08123456789"\r\n` +
            `"Siti Rahmawati","siti.rahma@email.com","Volunteer Teacher","Kelas Kolong Jakarta","20 Agustus 2026","HY-VOL26-0002","08571234567"\r\n` +
            `"Ahmad Pratama","ahmad.p@email.com","Speaker","Webinar AI for Youth","15 September 2026","HY-SPK26-0003","08198765432"\r\n` +
            `"Nadya Aulia","nadya@email.com","Committee","HeyYouth Annual Festival 2026","10 Oktober 2026","HY-COM26-0004","08213456789"\r\n` +
            `"Rian Hendrawan","rian.h@email.com","Mentor","Teacher Class Batch 4","25 November 2026","HY-MNT26-0005","08134567890"\r\n`;

        const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
        if (window.saveAs) {
            window.saveAs(blob, 'Template_Penerima_Sertifikat_HeyYouth.csv');
        } else {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'Template_Penerima_Sertifikat_HeyYouth.csv';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    // =========================================================================
    // 3. PARSE FILE EXCEL / CSV
    // =========================================================================
    window.handleBatchFileSelect = function (e) {
        const file = (e.target && e.target.files) ? e.target.files[0] : (e.dataTransfer ? e.dataTransfer.files[0] : null);
        if (!file) return;

        if (typeof XLSX === 'undefined') {
            alert("Modul pembaca Excel/CSV (SheetJS) belum selesai dimuat. Harap periksa koneksi internet Anda.");
            return;
        }

        const reader = new FileReader();
        reader.onload = function (event) {
            try {
                let data = new Uint8Array(event.target.result);

                // Jika file bertipe CSV, periksa jika ada baris "sep=," di baris pertama dan bersihkan sebelum dibaca
                if (file.name.toLowerCase().endsWith('.csv')) {
                    try {
                        let text = new TextDecoder('utf-8').decode(data);
                        if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
                        if (/^sep=\s*[,;\t]/i.test(text)) {
                            text = text.replace(/^sep=[^\r\n]*[\r\n]+/, '');
                            data = new TextEncoder().encode(text);
                        }
                    } catch (e) {}
                }

                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const rawJson = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

                if (!Array.isArray(rawJson) || rawJson.length === 0) {
                    alert("Berkas Excel/CSV kosong atau tidak memiliki baris data!");
                    return;
                }

                // Normalize columns
                const defaultEvent = document.getElementById('batch-default-event').value.trim() || 'Hey Youth Event 2026';
                const todayFormatted = new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());

                parsedParticipants = rawJson.map((originalRow, idx) => {
                    let row = originalRow;

                    // Fallback cerdas: Jika user mengunggah file di mana seluruh baris masih menumpuk di Kolom A dengan tanda koma
                    const keys = Object.keys(row);
                    if (keys.length === 1 && keys[0].includes(',')) {
                        const hKeys = keys[0].split(',').map(k => k.replace(/^["'\s]+|["'\s]+$/g, ''));
                        const rawVals = String(row[keys[0]]).split(',').map(v => v.replace(/^["'\s]+|["'\s]+$/g, ''));
                        row = {};
                        hKeys.forEach((hk, hi) => {
                            row[hk] = rawVals[hi] || '';
                        });
                    }

                    // Search for matching keys case-insensitively
                    const findVal = (patterns, def = '') => {
                        for (const k of Object.keys(row)) {
                            const lk = k.toLowerCase().replace(/[^a-z0-9]/g, '');
                            for (const p of patterns) {
                                if (lk === p || lk.includes(p)) {
                                    if (row[k] !== undefined && String(row[k]).trim() !== '') {
                                        return String(row[k]).trim();
                                    }
                                }
                            }
                        }
                        return def;
                    };

                    const name = findVal(['nama', 'name', 'namapeserta', 'namalengkap', 'recipient']);
                    const email = findVal(['email', 'surel', 'mail']);
                    const role = findVal(['role', 'peran', 'jabatan', 'kategori'], 'Participant');
                    const eventName = findVal(['event', 'eventname', 'acara', 'kegiatan'], defaultEvent);
                    const issueDate = findVal(['date', 'issuedate', 'tanggal', 'tgl', 'tanggalterbit'], todayFormatted);
                    const phone = findVal(['phone', 'nohp', 'nomorhp', 'wa', 'whatsapp', 'telepon'], '');

                    let certNo = findVal(['certificatenumber', 'certno', 'nosertifikat', 'nomorsertifikat', 'nomor', 'no']);
                    if (!certNo) {
                        // Generate automatic unique format: HY-EVENTCODE-0001
                        const eventSlug = eventName.replace(/[^A-Za-z0-9]/g, '').slice(0, 4).toUpperCase() || 'EVT';
                        certNo = `HY-${eventSlug}26-${String(idx + 1).padStart(4, '0')}`;
                    }

                    return {
                        name: name,
                        email: email,
                        role: role,
                        eventName: eventName,
                        issueDate: issueDate,
                        certificateNumber: certNo,
                        phone: phone
                    };
                }).filter(p => p.name.length > 0);

                if (parsedParticipants.length === 0) {
                    alert("Tidak ditemukan kolom nama yang valid (misal: 'name', 'nama', 'nama lengkap'). Silakan gunakan format template CSV.");
                    return;
                }

                // Render Preview UI
                renderBatchPreview(file.name);

            } catch (err) {
                console.error("Gagal membaca file Excel:", err);
                alert("Gagal membaca file: " + err.message);
            }
        };

        reader.readAsArrayBuffer(file);
    };

    function renderBatchPreview(fileName) {
        const previewContainer = document.getElementById('batch-preview-container');
        const countBadge = document.getElementById('batch-detected-count');
        const fileNameEl = document.getElementById('batch-selected-filename');
        const tbody = document.getElementById('batch-preview-tbody');
        const startBtn = document.getElementById('batch-start-btn');

        if (countBadge) countBadge.textContent = `${parsedParticipants.length} data valid`;
        if (fileNameEl) fileNameEl.textContent = fileName;

        if (tbody) {
            tbody.innerHTML = '';
            // Show first 5 records as preview
            const previewRows = parsedParticipants.slice(0, 5);
            previewRows.forEach((p, i) => {
                const tr = document.createElement('tr');
                tr.className = 'border-b border-gray-100 dark:border-slate-800 text-xs';
                tr.innerHTML = `
                    <td class="py-2 px-3 font-semibold text-heading">${i + 1}</td>
                    <td class="py-2 px-3 font-bold text-primary dark:text-blue-400">${esc(p.name)}</td>
                    <td class="py-2 px-3 text-gray-600 dark:text-gray-300">${esc(p.email || '-')}</td>
                    <td class="py-2 px-3"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">${esc(p.role)}</span></td>
                    <td class="py-2 px-3 font-mono text-[11px] text-gray-500">${esc(p.certificateNumber)}</td>
                    <td class="py-2 px-3 text-gray-500 truncate max-w-[140px]">${esc(p.eventName)}</td>
                `;
                tbody.appendChild(tr);
            });

            if (parsedParticipants.length > 5) {
                const trMore = document.createElement('tr');
                trMore.innerHTML = `
                    <td colspan="6" class="py-2.5 px-3 text-center text-xs text-gray-500 bg-gray-50/50 dark:bg-slate-800/50 italic">
                        ... dan ${parsedParticipants.length - 5} penerima lainnya siap di-render.
                    </td>
                `;
                tbody.appendChild(trMore);
            }
        }

        if (previewContainer) previewContainer.classList.remove('hidden');
        if (startBtn) {
            startBtn.disabled = false;
            startBtn.innerHTML = `<i class="fas fa-file-zipper mr-1.5"></i> Mulai Render ${parsedParticipants.length} Sertifikat ke ZIP`;
        }
    }

    // =========================================================================
    // 4. RENDER INDIVIDUAL CANVAS FOR A RECIPIENT
    // =========================================================================
    async function renderCertificateCanvas(record, templateData) {
        const cw = templateData.width || 1123;
        const ch = templateData.height || 794;

        const offCanvas = document.createElement('canvas');
        offCanvas.width = cw;
        offCanvas.height = ch;
        const ctx = offCanvas.getContext('2d');

        // Fill background white
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, cw, ch);

        // 1. Draw Background Image
        if (templateData.bgImage) {
            ctx.drawImage(templateData.bgImage, 0, 0, cw, ch);
        }

        // 2. Draw Elements
        const elements = templateData.elements || [];
        for (const el of elements) {
            if (el.visible === false) continue;

            // Resolve Dynamic Text Replacements
            let textVal = el.text || '';
            if (el.role === 'recipient') textVal = record.name;
            else if (el.role === 'event') textVal = record.eventName;
            else if (el.role === 'desc_full') textVal = el.text || '';
            else if (el.role === 'date') textVal = record.issueDate;
            else if (el.role === 'number') textVal = record.certificateNumber;

            // Bracket & Curly Braces Replacements
            textVal = textVal
                .replace(/\[\s*Nama Penerima\s*\]/gi, record.name)
                .replace(/\{\{\s*name\s*\}\}/gi, record.name)
                .replace(/\[\s*Nama Acara\s*\]/gi, record.eventName)
                .replace(/\{\{\s*event\s*\}\}/gi, record.eventName)
                .replace(/\[\s*Peran\s*\]/gi, record.role)
                .replace(/\{\{\s*role\s*\}\}/gi, record.role)
                .replace(/\[\s*Nomor Sertifikat\s*\]/gi, record.certificateNumber)
                .replace(/\{\{\s*number\s*\}\}/gi, record.certificateNumber)
                .replace(/\[\s*Tanggal\s*\]/gi, record.issueDate)
                .replace(/\{\{\s*date\s*\}\}/gi, record.issueDate);

            if (el.type === 'text') {
                ctx.save();
                ctx.globalAlpha = el.opacity !== undefined ? el.opacity : 1;
                ctx.translate(el.x + el.width / 2, el.y + el.height / 2);
                ctx.rotate((el.rotation || 0) * Math.PI / 180);
                ctx.translate(-(el.x + el.width / 2), -(el.y + el.height / 2));

                let fontStyle = '';
                if (el.italic) fontStyle += 'italic ';
                if (el.bold) fontStyle += 'bold ';
                fontStyle += (el.fontSize || 24) + 'px ' + (el.fontFamily || 'Inter, sans-serif');

                ctx.font = fontStyle;
                ctx.fillStyle = el.color || '#000000';
                ctx.textAlign = el.textAlign || 'left';
                ctx.textBaseline = 'top';

                if (el.bgColor && el.bgColor !== 'transparent') {
                    ctx.fillStyle = el.bgColor;
                    ctx.fillRect(el.x, el.y, el.width, el.height);
                    ctx.fillStyle = el.color || '#000000';
                }

                const txt = el.uppercase ? textVal.toUpperCase() : textVal;
                const lines = txt.split('\n');
                let yp = el.y + 4;
                const lh = (el.lineHeight || 1.3) * (el.fontSize || 24);
                const ls = parseFloat(el.letterSpacing) || 0;

                lines.forEach(line => {
                    if (ls === 0) {
                        let xp = el.x;
                        if (el.textAlign === 'center') xp = el.x + el.width / 2;
                        else if (el.textAlign === 'right') xp = el.x + el.width;
                        ctx.fillText(line, xp, yp, el.width);
                    } else {
                        const mw = ctx.measureText(line).width + ls * Math.max(0, line.length - 1);
                        let xp = el.x;
                        if (el.textAlign === 'center') xp = el.x + el.width / 2 - mw / 2;
                        else if (el.textAlign === 'right') xp = el.x + el.width - mw;

                        ctx.textAlign = 'left';
                        for (const char of line) {
                            ctx.fillText(char, xp, yp);
                            xp += ctx.measureText(char).width + ls;
                        }
                    }
                    yp += lh;
                });

                if (el.underline) {
                    ctx.strokeStyle = el.color || '#000000';
                    ctx.lineWidth = Math.max(1, (el.fontSize || 24) / 16);
                    ctx.beginPath();
                    ctx.moveTo(el.x + 8, yp);
                    ctx.lineTo(el.x + el.width - 8, yp);
                    ctx.stroke();
                }
                ctx.restore();

            } else if (el.type === 'shape') {
                ctx.save();
                ctx.globalAlpha = el.opacity !== undefined ? el.opacity : 1;
                ctx.translate(el.x + el.width / 2, el.y + el.height / 2);
                ctx.rotate((el.rotation || 0) * Math.PI / 180);
                ctx.translate(-(el.x + el.width / 2), -(el.y + el.height / 2));
                ctx.fillStyle = el.color || '#000000';

                const s = el.shapeType || 'rectangle';
                if (s === 'circle') {
                    ctx.beginPath();
                    ctx.ellipse(el.x + el.width / 2, el.y + el.height / 2, el.width / 2, el.height / 2, 0, 0, Math.PI * 2);
                    ctx.fill();
                    if (el.borderWidth > 0) {
                        ctx.strokeStyle = el.borderColor || '#000000';
                        ctx.lineWidth = el.borderWidth;
                        ctx.stroke();
                    }
                } else {
                    if (el.borderRadius > 0) {
                        roundRect(ctx, el.x, el.y, el.width, el.height, el.borderRadius);
                        ctx.fill();
                        if (el.borderWidth > 0) {
                            ctx.strokeStyle = el.borderColor || '#000000';
                            ctx.lineWidth = el.borderWidth;
                            ctx.stroke();
                        }
                    } else {
                        ctx.fillRect(el.x, el.y, el.width, el.height);
                        if (el.borderWidth > 0) {
                            ctx.strokeStyle = el.borderColor || '#000000';
                            ctx.lineWidth = el.borderWidth;
                            ctx.strokeRect(el.x, el.y, el.width, el.height);
                        }
                    }
                }
                ctx.restore();

            } else if (el.type === 'image' && el._cachedImg) {
                ctx.save();
                ctx.globalAlpha = el.opacity !== undefined ? el.opacity : 1;
                ctx.translate(el.x + el.width / 2, el.y + el.height / 2);
                ctx.rotate((el.rotation || 0) * Math.PI / 180);
                ctx.translate(-(el.x + el.width / 2), -(el.y + el.height / 2));

                if (el.borderRadius > 0) {
                    roundRect(ctx, el.x, el.y, el.width, el.height, el.borderRadius);
                    ctx.clip();
                }
                if (el.borderWidth > 0) {
                    ctx.strokeStyle = el.borderColor || '#000000';
                    ctx.lineWidth = el.borderWidth;
                    roundRect(ctx, el.x, el.y, el.width, el.height, el.borderRadius || 0);
                    ctx.stroke();
                }
                ctx.drawImage(el._cachedImg, el.x, el.y, el.width, el.height);
                ctx.restore();
            }
        }

        return offCanvas;
    }

    // =========================================================================
    // 5. START BATCH PROCESS & EXPORT ZIP
    // =========================================================================
    window.startBatchCertificateProcess = async function () {
        if (isProcessing) return;
        if (!parsedParticipants || parsedParticipants.length === 0) {
            alert("Belum ada data penerima. Silakan pilih berkas Excel/CSV terlebih dahulu.");
            return;
        }

        if (typeof JSZip === 'undefined' || typeof window.jspdf === 'undefined') {
            alert("Modul JSZip atau jsPDF belum termuat. Periksa koneksi internet Anda.");
            return;
        }

        const templateSelect = document.getElementById('batch-template-select');
        const selectedTemplateKey = templateSelect ? templateSelect.value : '__DEFAULT__';
        const exportFormat = document.querySelector('input[name="batch-export-format"]:checked')?.value || 'pdf';
        const syncToSupabase = true; // Otomatis tersinkronisasi ke Supabase

        isProcessing = true;

        // UI Progress State
        const progressContainer = document.getElementById('batch-progress-container');
        const progressBar = document.getElementById('batch-progress-bar');
        const progressPercent = document.getElementById('batch-progress-percent');
        const progressStatus = document.getElementById('batch-progress-status');
        const startBtn = document.getElementById('batch-start-btn');

        if (progressContainer) progressContainer.classList.remove('hidden');
        if (startBtn) {
            startBtn.disabled = true;
            startBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1.5"></i> Sedang Memproses...';
        }

        try {
            // A. Prepare Template Layout & Background
            let templateData = {
                width: 1123,
                height: 794,
                bgImage: null,
                elements: []
            };

            let matchedSetting = null;
            if (selectedTemplateKey !== '__DEFAULT__') {
                matchedSetting = availableTemplates.find(t => t.event_name === selectedTemplateKey);
            }

            // Default fallback elements if no custom layout is defined
            if (!matchedSetting || !matchedSetting.layout_json) {
                // Default layout
                templateData.bgSrc = '../assets/img/Certificate-Template.webp';
                templateData.elements = [
                    {
                        type: 'text', role: 'recipient',
                        text: '[Nama Penerima]',
                        x: 100, y: 350, width: 923, height: 60,
                        fontSize: 42, fontFamily: 'Playfair Display, Georgia, serif',
                        color: '#1e3a8a', bold: true, textAlign: 'center'
                    },
                    {
                        type: 'text', role: 'desc_full',
                        text: 'atas partisipasi aktif dan kontribusi luar biasa dalam program kegiatan',
                        x: 150, y: 425, width: 823, height: 30,
                        fontSize: 16, fontFamily: 'Inter, sans-serif',
                        color: '#475569', textAlign: 'center'
                    },
                    {
                        type: 'text', role: 'event',
                        text: '[Nama Acara]',
                        x: 100, y: 465, width: 923, height: 40,
                        fontSize: 24, fontFamily: 'Inter, sans-serif',
                        color: '#d97706', bold: true, textAlign: 'center'
                    },
                    {
                        type: 'text', role: 'date',
                        text: 'Diterbitkan: [Tanggal]',
                        x: 100, y: 535, width: 923, height: 30,
                        fontSize: 13, fontFamily: 'Inter, sans-serif',
                        color: '#64748b', textAlign: 'center'
                    },
                    {
                        type: 'text', role: 'number',
                        text: 'No: [Nomor Sertifikat]',
                        x: 100, y: 575, width: 923, height: 25,
                        fontSize: 12, fontFamily: 'Courier New, monospace',
                        color: '#94a3b8', bold: true, textAlign: 'center'
                    }
                ];
            } else {
                templateData.bgSrc = matchedSetting.template_image || '../assets/img/Certificate-Template.webp';
                templateData.elements = Array.isArray(matchedSetting.layout_json)
                    ? matchedSetting.layout_json
                    : (matchedSetting.layout_json.elements || []);
                if (matchedSetting.layout_json.width) templateData.width = matchedSetting.layout_json.width;
                if (matchedSetting.layout_json.height) templateData.height = matchedSetting.layout_json.height;
            }

            // Pre-load background image
            await new Promise((resolve) => {
                const img = new Image();
                img.crossOrigin = 'anonymous';
                img.onload = () => {
                    templateData.bgImage = img;
                    resolve();
                };
                img.onerror = () => {
                    console.warn("Gagal memuat background template, menggunakan background putih.");
                    resolve();
                };
                img.src = templateData.bgSrc;
            });

            // Pre-cache image elements if any
            for (const el of templateData.elements) {
                if (el.type === 'image' && el.src) {
                    await new Promise(r => {
                        const im = new Image();
                        im.crossOrigin = 'anonymous';
                        im.onload = () => { el._cachedImg = im; r(); };
                        im.onerror = () => { r(); };
                        im.src = el.src;
                    });
                }
            }

            // B. Initialize JSZip
            const zip = new JSZip();
            const total = parsedParticipants.length;
            const certsToInsert = [];
            const { jsPDF } = window.jspdf;

            // C. Chunked Rendering Loop
            for (let i = 0; i < total; i++) {
                if (!isProcessing) break; // User cancelled

                const p = parsedParticipants[i];
                const currentPercent = Math.round(((i + 1) / total) * 100);

                if (progressBar) progressBar.style.width = currentPercent + '%';
                if (progressPercent) progressPercent.textContent = currentPercent + '%';
                if (progressStatus) progressStatus.textContent = `(${i + 1}/${total}) Merender: ${p.name}...`;

                // Render Canvas
                const canvas = await renderCertificateCanvas(p, templateData);

                // Sanitize file name
                const cleanName = p.name.replace(/[^a-zA-Z0-9\s_-]/g, '').trim().replace(/\s+/g, '_');
                const cleanCertNo = p.certificateNumber.replace(/[^a-zA-Z0-9_-]/g, '_');

                if (exportFormat === 'pdf') {
                    // Generate PDF from Canvas
                    const imgData = canvas.toDataURL('image/jpeg', 0.94);
                    const pdf = new jsPDF({
                        orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
                        unit: 'px',
                        format: [canvas.width, canvas.height]
                    });
                    pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
                    const pdfBlob = pdf.output('blob');
                    zip.file(`Sertifikat_${cleanCertNo}_${cleanName}.pdf`, pdfBlob);
                } else {
                    // Generate PNG Blob
                    const pngBlob = await new Promise(r => canvas.toBlob(r, 'image/png'));
                    zip.file(`Sertifikat_${cleanCertNo}_${cleanName}.png`, pngBlob);
                }

                // Collect for database sync
                if (syncToSupabase) {
                    certsToInsert.push({
                        certificate_number: p.certificateNumber,
                        name: p.name,
                        email: p.email || `${cleanName.toLowerCase()}@peserta.heyyouth.org`,
                        phone: p.phone || '',
                        event_name: p.eventName,
                        issue_date: p.issueDate,
                        role: p.role,
                        description: `in recognition of your active participation as **${p.role}** in **${p.eventName}**.`
                    });
                }

                // Memory-safe yield to keep browser thread responsive
                await new Promise(r => setTimeout(r, 15));
            }

            if (!isProcessing) {
                alert("Proses dibatalkan.");
                resetBatchState();
                return;
            }

            // D. Sync to Supabase if checked
            if (syncToSupabase && certsToInsert.length > 0) {
                if (progressStatus) progressStatus.textContent = `Menyimpan ${certsToInsert.length} data ke Supabase...`;
                const client = window.supabase || (typeof supabase !== 'undefined' ? supabase : null);
                if (client) {
                    try {
                        const { error } = await client
                            .from('certificates')
                            .upsert(certsToInsert, { onConflict: 'certificate_number' });

                        if (error) {
                            console.error("Supabase bulk insert warning:", error);
                        }
                    } catch (dbErr) {
                        console.warn("Gagal sinkron database Supabase:", dbErr);
                    }
                }

                // Update LocalStorage cache for immediate UI refresh
                try {
                    const listKey = 'mock_fb_list_certificates';
                    const existingList = localStorage.getItem(listKey) ? JSON.parse(localStorage.getItem(listKey)) : [];
                    certsToInsert.forEach(c => {
                        const idx = existingList.findIndex(e => e.data && e.data.certificateNumber === c.certificate_number);
                        const itemObj = {
                            id: 'cert_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
                            data: {
                                certificateNumber: c.certificate_number,
                                name: c.name,
                                email: c.email,
                                phone: c.phone,
                                eventName: c.event_name,
                                issueDate: c.issue_date,
                                role: c.role,
                                description: c.description
                            }
                        };
                        if (idx >= 0) existingList[idx] = itemObj;
                        else existingList.unshift(itemObj);
                    });
                    localStorage.setItem(listKey, JSON.stringify(existingList));

                    if (typeof window.loadAndRenderCertificates === 'function') {
                        window.loadAndRenderCertificates();
                    }
                } catch (lsErr) { }
            }

            // E. Generate and Download ZIP
            if (progressStatus) progressStatus.textContent = "Mengompres berkas sertifikat ke dalam file ZIP...";
            const zipBlob = await zip.generateAsync({
                type: 'blob',
                compression: 'DEFLATE',
                compressionOptions: { level: 6 }
            });

            const dateStamp = new Date().toISOString().slice(0, 10);
            const zipFileName = `HeyYouth_Sertifikat_Batch_${dateStamp}.zip`;

            if (window.saveAs) {
                window.saveAs(zipBlob, zipFileName);
            } else {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(zipBlob);
                link.download = zipFileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }

            // F. Admin Activity Log
            try {
                const logs = JSON.parse(localStorage.getItem('hey_youth_admin_logs') || '[]');
                logs.unshift({
                    timestamp: new Date().toISOString(),
                    action: 'TAMBAH',
                    category: 'Sertifikat',
                    detail: `Batch generate berhasil mengunduh ${total} sertifikat dalam file ZIP (${zipFileName})`,
                    adminEmail: localStorage.getItem('hey_youth_last_login_email') || 'Admin'
                });
                if (logs.length > 200) logs.slice(0, 200);
                localStorage.setItem('hey_youth_admin_logs', JSON.stringify(logs));
            } catch (e) { }

            if (typeof window.showToast === 'function') {
                window.showToast(`Sukses! ${total} sertifikat berhasil di-render dan diunduh dalam ZIP.`, 'success');
            } else {
                alert(`Sukses! ${total} sertifikat berhasil di-render dan diunduh dalam ZIP.`);
            }

            // Finish & Close Modal
            closeBatchCertificateModal();

        } catch (error) {
            console.error("Batch processing error:", error);
            alert("Terjadi kesalahan saat memproses batch: " + error.message);
            isProcessing = false;
            if (startBtn) {
                startBtn.disabled = false;
                startBtn.innerHTML = `<i class="fas fa-file-zipper mr-1.5"></i> Coba Lagi`;
            }
        }
    };

    // Drag and Drop Zone Event Listeners Init
    document.addEventListener('DOMContentLoaded', () => {
        const dropzone = document.getElementById('batch-dropzone-box');
        const fileInput = document.getElementById('batch-file-input');

        if (dropzone && fileInput) {
            dropzone.addEventListener('click', () => fileInput.click());
            fileInput.addEventListener('change', window.handleBatchFileSelect);

            ['dragenter', 'dragover'].forEach(eventName => {
                dropzone.addEventListener(eventName, (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dropzone.classList.add('border-emerald-500', 'bg-emerald-50/20');
                });
            });

            ['dragleave', 'drop'].forEach(eventName => {
                dropzone.addEventListener(eventName, (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dropzone.classList.remove('border-emerald-500', 'bg-emerald-50/20');
                });
            });

            dropzone.addEventListener('drop', (e) => {
                const dt = e.dataTransfer;
                const files = dt.files;
                if (files && files.length > 0) {
                    window.handleBatchFileSelect({ dataTransfer: { files: files } });
                }
            });
        }
    });

})();
