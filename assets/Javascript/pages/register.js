/* ========================================================
   HEY YOUTH! — Volunteer Registration Logic & Google Form Sync
   ======================================================== */

(function () {
    'use strict';

    // =========================================================================
    // 1. KONFIGURASI GOOGLE FORM
    // Anda cukup mengganti 'formActionUrl' dan ID 'entryMap' sesuai Google Form
    // yang Anda gunakan. Jika belum diisi, data akan tetap tersimpan di browser
    // (LocalStorage) dan Supabase secara aman.
    // =========================================================================
    window.GOOGLE_FORM_CONFIG = {
        // Contoh URL: https://docs.google.com/forms/d/e/1FAIpQLSc.../formResponse
        formActionUrl: localStorage.getItem('heyyouth_gf_action_url') || '',
        
        // Pemetaan nama input ke ID entry Google Form (contoh: entry.12345678)
        entryMap: {
            name: localStorage.getItem('heyyouth_gf_entry_name') || 'entry.1000001',
            email: localStorage.getItem('heyyouth_gf_entry_email') || 'entry.1000002',
            whatsapp: localStorage.getItem('heyyouth_gf_entry_wa') || 'entry.1000003',
            institution: localStorage.getItem('heyyouth_gf_entry_inst') || 'entry.1000004',
            division_1: localStorage.getItem('heyyouth_gf_entry_div1') || 'entry.1000005',
            reason_1: localStorage.getItem('heyyouth_gf_entry_reason1') || 'entry.1000006',
            division_2: localStorage.getItem('heyyouth_gf_entry_div2') || 'entry.1000007',
            reason_2: localStorage.getItem('heyyouth_gf_entry_reason2') || 'entry.1000008'
        }
    };

    // =========================================================================
    // DYNAMIC LANGUAGE SYNC (PLACEHOLDERS, OPTIONS & VALIDATION MESSAGES)
    // =========================================================================
    function getActiveLanguage() {
        if (document.body && document.body.classList.contains('lang-en')) return 'en';
        if (document.body && document.body.classList.contains('lang-id')) return 'id';
        var stored = localStorage.getItem('heyyouth_lang');
        if (stored) return stored;
        return document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'id';
    }

    function getMsg(idText, enText) {
        return getActiveLanguage() === 'en' ? enText : idText;
    }

    function updateDynamicLanguage(lang) {
        if (!lang) lang = getActiveLanguage();
        var isEn = (lang === 'en');

        // 1. Update Placeholders for inputs and textareas
        var fieldsWithPlaceholder = document.querySelectorAll('[data-placeholder-id], [data-placeholder-en]');
        fieldsWithPlaceholder.forEach(function (el) {
            var ph = isEn ? el.getAttribute('data-placeholder-en') : el.getAttribute('data-placeholder-id');
            if (ph) el.placeholder = ph;
        });

        // 2. Update Select disabled default options
        var selectOptions = document.querySelectorAll('select option[data-label-id], select option[data-label-en]');
        selectOptions.forEach(function (opt) {
            var label = isEn ? opt.getAttribute('data-label-en') : opt.getAttribute('data-label-id');
            if (label) opt.textContent = label;
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        initFormElements();
        initConfetti();
        initLanguageListeners();
    });

    function initLanguageListeners() {
        // Initial sync of placeholders & options
        updateDynamicLanguage();

        // Listen for custom event from Script.js
        window.addEventListener('heyyouth:languageChange', function (e) {
            updateDynamicLanguage(e.detail ? e.detail.lang : null);
        });

        // Listen to clicks on language buttons (.lang-btn)
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var lang = btn.getAttribute('data-lang');
                setTimeout(function () {
                    updateDynamicLanguage(lang);
                }, 40);
            });
        });

        // MutationObserver on document.body class changes (lang-id / lang-en)
        if (window.MutationObserver && document.body) {
            var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.attributeName === 'class') {
                        updateDynamicLanguage();
                    }
                });
            });
            observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        }
    }

    function initFormElements() {
        var form = document.getElementById('volunteer-registration-form');
        var reason1 = document.getElementById('reg-reason-1');
        var reason2 = document.getElementById('reg-reason-2');
        var charCount1 = document.getElementById('char-count-reason-1');
        var charCount2 = document.getElementById('char-count-reason-2');
        var divSelect1 = document.getElementById('reg-division-1');
        var divSelect2 = document.getElementById('reg-division-2');
        var successModal = document.getElementById('registration-success-modal');
        var btnCloseModal = document.getElementById('btn-close-modal-success');

        if (!form) return;

        // --- Live Character Counters ---
        if (reason1 && charCount1) {
            reason1.addEventListener('input', function () {
                charCount1.textContent = this.value.length + ' / 500';
                clearError('reg-reason-1');
            });
        }
        if (reason2 && charCount2) {
            reason2.addEventListener('input', function () {
                charCount2.textContent = this.value.length + ' / 500';
                clearError('reg-reason-2');
            });
        }

        // --- Prevent Duplicate Division Selection ---
        if (divSelect1 && divSelect2) {
            divSelect1.addEventListener('change', function () {
                clearError('reg-division-1');
                if (divSelect2.value && divSelect1.value === divSelect2.value) {
                    showError('reg-division-2', getMsg('Pilihan kedua tidak boleh sama dengan pilihan pertama.', '2nd choice cannot be the same as your 1st choice.'));
                    divSelect2.value = '';
                }
            });
            divSelect2.addEventListener('change', function () {
                clearError('reg-division-2');
                if (divSelect1.value && divSelect1.value === divSelect2.value) {
                    showError('reg-division-2', getMsg('Pilihan kedua tidak boleh sama dengan pilihan pertama.', '2nd choice cannot be the same as your 1st choice.'));
                    divSelect2.value = '';
                }
            });
        }

        // --- Clear Error on Typing ---
        ['reg-name', 'reg-email', 'reg-whatsapp', 'reg-institution', 'reg-agreement'].forEach(function (id) {
            var el = document.getElementById(id);
            if (el) {
                el.addEventListener('input', function () { clearError(id); });
                el.addEventListener('change', function () { clearError(id); });
            }
        });

        // --- Modal Close Button ---
        if (btnCloseModal && successModal) {
            btnCloseModal.addEventListener('click', function () {
                successModal.classList.add('hidden');
                window.location.href = '../';
            });
        }

        // --- Submit Handler ---
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            handleFormSubmit(form);
        });
    }

    function showError(fieldId, message) {
        var errEl = document.getElementById('err-' + fieldId);
        var inputEl = document.getElementById(fieldId);
        if (errEl) {
            errEl.textContent = message;
            errEl.classList.remove('hidden');
        }
        if (inputEl) {
            inputEl.classList.add('border-red-500', 'focus:ring-red-500');
            inputEl.classList.remove('border-gray-300', 'dark:border-slate-700');
        }
    }

    function clearError(fieldId) {
        var errEl = document.getElementById('err-' + fieldId);
        var inputEl = document.getElementById(fieldId);
        if (errEl) {
            errEl.textContent = '';
            errEl.classList.add('hidden');
        }
        if (inputEl) {
            inputEl.classList.remove('border-red-500', 'focus:ring-red-500');
            inputEl.classList.add('border-gray-300', 'dark:border-slate-700');
        }
    }

    function validateForm() {
        var isValid = true;

        var name = (document.getElementById('reg-name').value || '').trim();
        var email = (document.getElementById('reg-email').value || '').trim();
        var whatsapp = (document.getElementById('reg-whatsapp').value || '').trim();
        var institution = (document.getElementById('reg-institution').value || '').trim();
        var div1 = document.getElementById('reg-division-1').value;
        var reason1 = (document.getElementById('reg-reason-1').value || '').trim();
        var div2 = document.getElementById('reg-division-2').value;
        var reason2 = (document.getElementById('reg-reason-2').value || '').trim();
        var agreement = document.getElementById('reg-agreement').checked;

        // Validasi Nama
        if (!name || name.length < 3) {
            showError('reg-name', getMsg('Silakan masukkan nama lengkap yang valid (minimal 3 karakter).', 'Please enter a valid full name (minimum 3 characters).'));
            isValid = false;
        }

        // Validasi Email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            showError('reg-email', getMsg('Silakan masukkan alamat email yang valid.', 'Please enter a valid email address.'));
            isValid = false;
        }

        // Validasi WhatsApp
        var cleanWa = whatsapp.replace(/[^0-9]/g, '');
        if (!cleanWa || cleanWa.length < 9 || cleanWa.length > 15) {
            showError('reg-whatsapp', getMsg('Nomor WhatsApp tidak valid (minimal 9 digit angka).', 'Invalid WhatsApp number (minimum 9 digits).'));
            isValid = false;
        }

        // Validasi Institusi
        if (!institution || institution.length < 2) {
            showError('reg-institution', getMsg('Silakan isi universitas, sekolah, atau institusi asal Anda.', 'Please enter your university, school, or institution.'));
            isValid = false;
        }

        // Validasi Divisi 1
        if (!div1) {
            showError('reg-division-1', getMsg('Silakan pilih divisi prioritas utama.', 'Please select your 1st division choice.'));
            isValid = false;
        }

        // Validasi Alasan 1
        if (!reason1 || reason1.length < 15) {
            showError('reg-reason-1', getMsg('Berikan alasan yang jelas mengapa Anda memilih divisi ini (min. 15 karakter).', 'Please provide a clear reason why you chose this division (min. 15 characters).'));
            isValid = false;
        }

        // Validasi Divisi 2
        if (!div2) {
            showError('reg-division-2', getMsg('Silakan pilih divisi alternatif kedua.', 'Please select your 2nd division choice.'));
            isValid = false;
        } else if (div1 && div1 === div2) {
            showError('reg-division-2', getMsg('Divisi pilihan kedua tidak boleh sama dengan pilihan pertama.', '2nd choice cannot be the same as 1st choice.'));
            isValid = false;
        }

        // Validasi Alasan 2
        if (!reason2 || reason2.length < 15) {
            showError('reg-reason-2', getMsg('Berikan alasan kesiapan Anda di divisi alternatif (min. 15 karakter).', 'Please provide your motivation for the alternative division (min. 15 characters).'));
            isValid = false;
        }

        // Validasi Checkbox
        if (!agreement) {
            showError('reg-agreement', getMsg('Anda harus menyetujui pernyataan komitmen untuk melanjutkan.', 'You must agree to the volunteer commitment statement.'));
            isValid = false;
        }

        return isValid;
    }

    function handleFormSubmit(form) {
        if (!validateForm()) {
            var firstErr = document.querySelector('.border-red-500');
            if (firstErr) {
                firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        var btn = document.getElementById('btn-submit-registration');
        var btnLabel = document.getElementById('btn-submit-label');
        var spinner = document.getElementById('btn-submit-spinner');

        // Loading state
        if (btn) btn.disabled = true;
        if (btnLabel) btnLabel.classList.add('hidden');
        if (spinner) spinner.classList.remove('hidden');

        var payload = {
            id: 'HY-REL-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000),
            name: (document.getElementById('reg-name').value || '').trim(),
            email: (document.getElementById('reg-email').value || '').trim(),
            whatsapp: (document.getElementById('reg-whatsapp').value || '').trim(),
            institution: (document.getElementById('reg-institution').value || '').trim(),
            division_1: document.getElementById('reg-division-1').value,
            reason_1: (document.getElementById('reg-reason-1').value || '').trim(),
            division_2: document.getElementById('reg-division-2').value,
            reason_2: (document.getElementById('reg-reason-2').value || '').trim(),
            status: 'pending',
            submittedAt: new Date().toISOString()
        };

        // 1. Submit ke Google Form jika konfigurasi tersedia
        submitToGoogleForm(payload);

        // 2. Simpan cadangan ke LocalStorage browser
        saveToLocalStorage(payload);

        // 3. Simpan ke database Supabase (jika Supabase terhubung)
        syncToSupabase(payload);

        // Beri jeda 800ms agar efek submit terasa natural
        setTimeout(function () {
            if (btn) btn.disabled = false;
            if (btnLabel) btnLabel.classList.remove('hidden');
            if (spinner) spinner.classList.add('hidden');

            form.reset();
            document.getElementById('char-count-reason-1').textContent = '0 / 500';
            document.getElementById('char-count-reason-2').textContent = '0 / 500';

            showSuccessModal(payload);
        }, 900);
    }

    // =========================================================================
    // SUBMIT KE GOOGLE FORM SECARA BACKGROUND (HIDDEN IFRAME & FETCH)
    // =========================================================================
    function submitToGoogleForm(payload) {
        var config = window.GOOGLE_FORM_CONFIG;
        if (!config || !config.formActionUrl) {
            console.info('[Hey Youth] Google Form Action URL belum dikonfigurasi. Data disimpan di LocalStorage & Supabase.');
            return;
        }

        try {
            var proxyForm = document.getElementById('google-form-proxy');
            if (!proxyForm) return;

            proxyForm.innerHTML = '';
            proxyForm.action = config.formActionUrl;

            var map = config.entryMap || {};
            var entries = [
                { key: map.name, value: payload.name },
                { key: map.email, value: payload.email },
                { key: map.whatsapp, value: payload.whatsapp },
                { key: map.institution, value: payload.institution },
                { key: map.division_1, value: payload.division_1 },
                { key: map.reason_1, value: payload.reason_1 },
                { key: map.division_2, value: payload.division_2 },
                { key: map.reason_2, value: payload.reason_2 }
            ];

            entries.forEach(function (item) {
                if (item.key && item.value) {
                    var input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = item.key;
                    input.value = item.value;
                    proxyForm.appendChild(input);
                }
            });

            // Submit langsung ke hidden iframe target
            proxyForm.submit();
            console.log('[Hey Youth] Berhasil submit data ke Google Form:', config.formActionUrl);
        } catch (err) {
            console.warn('[Hey Youth] Gagal submit ke Google Form proxy:', err);
        }
    }

    // =========================================================================
    // SIMPAN DATA KE LOCALSTORAGE (OFFLINE BACKUP)
    // =========================================================================
    function saveToLocalStorage(payload) {
        try {
            var existing = JSON.parse(localStorage.getItem('heyyouth_volunteer_registrations') || '[]');
            existing.unshift(payload);
            localStorage.setItem('heyyouth_volunteer_registrations', JSON.stringify(existing));
        } catch (e) {
            console.warn('[Hey Youth] Gagal menyimpan ke localStorage:', e);
        }
    }

    // =========================================================================
    // SINKRONISASI KE SUPABASE DATABASE (TABEL volunteers)
    // =========================================================================
    function syncToSupabase(payload) {
        if (!window.supabaseClient) return;

        var row = {
            full_name: payload.name,
            email: payload.email,
            whatsapp_number: payload.whatsapp,
            city: payload.institution,
            chapter_choice: payload.division_1,
            division_choice: payload.division_1 + ' (Cadangan: ' + payload.division_2 + ')',
            reason: 'Pilihan 1: ' + payload.reason_1 + '\n\nPilihan 2: ' + payload.reason_2,
            cv_file_url: 'Terdaftar via Formulir Web (Ref: ' + payload.id + ')',
            status: 'pending'
        };

        window.supabaseClient
            .from('volunteers')
            .insert([row])
            .then(function (res) {
                if (res.error) {
                    console.info('[Hey Youth] Info insert Supabase volunteers:', res.error.message);
                } else {
                    console.log('[Hey Youth] Data relawan berhasil disinkronkan ke Supabase.');
                }
            })
            .catch(function (e) {
                console.info('[Hey Youth] Info Supabase connection:', e);
            });
    }

    // =========================================================================
    // TAMPILKAN MODAL SUKSES & CELEBRATION
    // =========================================================================
    function showSuccessModal(payload) {
        var modal = document.getElementById('registration-success-modal');
        if (!modal) return;

        var codeEl = document.getElementById('modal-reg-code');
        var nameEl = document.getElementById('modal-reg-name');
        var div1El = document.getElementById('modal-reg-div1');
        var div2El = document.getElementById('modal-reg-div2');
        var waBtn = document.getElementById('btn-modal-wa-confirm');

        if (codeEl) codeEl.textContent = payload.id;
        if (nameEl) nameEl.textContent = payload.name;
        if (div1El) div1El.textContent = payload.division_1;
        if (div2El) div2El.textContent = payload.division_2;

        if (waBtn) {
            var msg = encodeURIComponent(
                'Halo Admin Hey Youth! Saya sudah mendaftar sebagai relawan melalui website.\n\n' +
                '• No. Registrasi: ' + payload.id + '\n' +
                '• Nama: ' + payload.name + '\n' +
                '• Pilihan Divisi: ' + payload.division_1 + '\n' +
                '• Institusi: ' + payload.institution + '\n\n' +
                'Mohon informasi untuk tahapan selanjutnya. Terima kasih!'
            );
            waBtn.href = 'https://wa.me/6281234567890?text=' + msg;
        }

        modal.classList.remove('hidden');

        // Mainkan animasi confetti meriah
        fireConfetti();
    }

    // =========================================================================
    // ANIMASI PARTIKEL CONFETTI
    // =========================================================================
    var confettiParticles = [];
    var animationFrameId = null;

    function initConfetti() {
        var canvas = document.getElementById('confetti-canvas');
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        window.addEventListener('resize', function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    function fireConfetti() {
        var canvas = document.getElementById('confetti-canvas');
        if (!canvas) return;
        var ctx = canvas.getContext('2d');
        confettiParticles = [];

        var colors = ['#1D4ED8', '#F59E0B', '#10B981', '#EC4899', '#8B5CF6', '#3B82F6'];

        for (var i = 0; i < 90; i++) {
            confettiParticles.push({
                x: canvas.width / 2,
                y: canvas.height / 2,
                w: Math.random() * 8 + 4,
                h: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                vx: (Math.random() - 0.5) * 16,
                vy: (Math.random() - 0.7) * 18,
                rotation: Math.random() * 360,
                vr: (Math.random() - 0.5) * 10,
                opacity: 1
            });
        }

        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        renderConfetti(ctx, canvas);
    }

    function renderConfetti(ctx, canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var activeParticles = 0;

        for (var i = 0; i < confettiParticles.length; i++) {
            var p = confettiParticles[i];
            if (p.opacity <= 0.01) continue;
            activeParticles++;

            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.35; // gravitasi
            p.vx *= 0.98; // hambatan udara
            p.rotation += p.vr;
            p.opacity -= 0.012;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = Math.max(0, p.opacity);
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        }

        if (activeParticles > 0) {
            animationFrameId = requestAnimationFrame(function () {
                renderConfetti(ctx, canvas);
            });
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

})();
