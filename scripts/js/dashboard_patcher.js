const fs = require('fs');

const headPath = 'CMS/Dashboard_head.html';
const currentPath = 'CMS/Dashboard.html';
let content = fs.readFileSync(headPath, 'utf8');

// --- 1. LOGIC FIXES ---

// Fix editEvent() date parsing
const editEventRegex = /else if \(section === 'event'\) \{[\s\S]*?var startDateVal = item \? \(item\.startDate \|\| ''\) : '';\s*var endDateVal = item \? \(item\.endDate \|\| ''\) : '';/;
const newEditEventCode = `else if (section === 'event') {
                    html += formField('Nama Event (ID)', 'f-title-id', item ? item.title_id : '', 'text', 'Webinar Persiapan Karir');
                    html += formField('Nama Event (EN)', 'f-title-en', item ? item.title_en : '', 'text', 'Career Prep Webinar');
                    var parsedDates = { start: '', end: '' };
                    if (item && item.date) {
                        var _d = item.date;
                        var _mList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                        function _mNum(m) { var i = _mList.indexOf(m); return i !== -1 ? String(i + 1).padStart(2, '0') : '01'; }
                        function _dNum(d) { return d.replace(/st|nd|rd|th/g, '').padStart(2, '0'); }
                        
                        var m2 = _d.match(/^([a-zA-Z]+) (\\d+(?:st|nd|rd|th)), (\\d{4}) - ([a-zA-Z]+) (\\d+(?:st|nd|rd|th)), (\\d{4})$/);
                        var m3 = _d.match(/^([a-zA-Z]+) (\\d+(?:st|nd|rd|th)) - ([a-zA-Z]+) (\\d+(?:st|nd|rd|th)), (\\d{4})$/);
                        var m4 = _d.match(/^([a-zA-Z]+) (\\d+(?:st|nd|rd|th)) - (\\d+(?:st|nd|rd|th)), (\\d{4})$/);
                        var m1 = _d.match(/^([a-zA-Z]+) (\\d+(?:st|nd|rd|th)), (\\d{4})$/);
                        
                        if (m2) { parsedDates.start = m2[3]+'-'+_mNum(m2[1])+'-'+_dNum(m2[2]); parsedDates.end = m2[6]+'-'+_mNum(m2[4])+'-'+_dNum(m2[5]); }
                        else if (m3) { parsedDates.start = m3[5]+'-'+_mNum(m3[1])+'-'+_dNum(m3[2]); parsedDates.end = m3[5]+'-'+_mNum(m3[3])+'-'+_dNum(m3[4]); }
                        else if (m4) { parsedDates.start = m4[4]+'-'+_mNum(m4[1])+'-'+_dNum(m4[2]); parsedDates.end = m4[4]+'-'+_mNum(m4[1])+'-'+_dNum(m4[3]); }
                        else if (m1) { parsedDates.start = m1[3]+'-'+_mNum(m1[1])+'-'+_dNum(m1[2]); parsedDates.end = ''; }
                    }

                    var startDateVal = item ? (item.startDate || parsedDates.start) : '';
                    var endDateVal = item ? (item.endDate || parsedDates.end) : '';`;
content = content.replace(editEventRegex, newEditEventCode);

// Fix issueCertificate
const issueCertRegex = /addActivityLog\('TAMBAH', 'Sertifikat', 'Menerbitkan sertifikat otomatis untuk: "' \+ name \+ '" \(' \+ eventName \+ '\)'\);\s*\n/;
content = content.replace(issueCertRegex, (match) => match + `
                    var updatedRegList = regList.filter(function(r) { return r.id !== regId; });
                    localStorage.setItem('event_registrations', JSON.stringify(updatedRegList));
                    renderRegistrationsList();
`);

const issueCertModalRegex = /localStorage\.setItem\(listKey, JSON\.stringify\(list\)\);\s*\n\s*showToast\('Sertifikat berhasil diterbitkan\.', 'success'\);/;
content = content.replace(issueCertModalRegex, `localStorage.setItem(listKey, JSON.stringify(list));
                        
                        var currentRegList = JSON.parse(localStorage.getItem('event_registrations') || '[]');
                        currentRegList = currentRegList.filter(function(r) { return r.id !== regId; });
                        localStorage.setItem('event_registrations', JSON.stringify(currentRegList));
                        renderRegistrationsList();
                        
                        showToast('Sertifikat berhasil diterbitkan.', 'success');`);

// Fix Deduplication
const loadRegsRegex = /var listKey = 'mock_fb_list_registrations';\s*\n\s*var list = localStorage\.getItem\(listKey\) \? JSON\.parse\(localStorage\.getItem\(listKey\)\) : \[\];/;
content = content.replace(loadRegsRegex, `var listKey = 'mock_fb_list_registrations';
                    var list = localStorage.getItem(listKey) ? JSON.parse(localStorage.getItem(listKey)) : [];

                    var certListKey = 'mock_fb_list_certificates';
                    var certList = localStorage.getItem(certListKey) ? JSON.parse(localStorage.getItem(certListKey)) : [];
                    var issuedSet = new Set();
                    certList.forEach(function(c) {
                        if (c && c.data && c.data.email && c.data.eventName) {
                            issuedSet.add(c.data.email.trim().toLowerCase() + '|' + c.data.eventName.trim().toLowerCase());
                        }
                    });

                    var uniqueList = [];
                    var seenKeys = new Set();
                    var changed = false;
                    for (var i = 0; i < list.length; i++) {
                        var c = list[i];
                        if (c && c.data) {
                            var eventTitle = c.data.eventTitle || 'Acara #' + c.data.eventId;
                            var issueKey = (c.data.email || '').trim().toLowerCase() + '|' + eventTitle.trim().toLowerCase();
                            
                            if (issuedSet.has(issueKey)) {
                                changed = true; // Delete because certificate issued
                                continue;
                            }

                            var key = (c.data.email || '').trim().toLowerCase() + '|' + (c.data.eventId || '');
                            if (!seenKeys.has(key)) {
                                seenKeys.add(key);
                                uniqueList.push(c);
                            } else {
                                changed = true; // Found a duplicate
                            }
                        }
                    }
                    if (changed) {
                        list = uniqueList;
                        localStorage.setItem(listKey, JSON.stringify(list));
                    }`);

const loadCertsRegex = /var list = JSON\.parse\(localStorage\.getItem\(listKey\) \|\| '\[\]'\);\s*\n\s*var countCertEl = document\.getElementById\('count-certificates'\);/;
content = content.replace(loadCertsRegex, `var list = JSON.parse(localStorage.getItem(listKey) || '[]');
                    
                    var uniqueList = [];
                    var seenKeys = new Set();
                    var changed = false;
                    for (var i = 0; i < list.length; i++) {
                        var c = list[i];
                        if (c && c.data) {
                            var key = c.data.email + '|' + c.data.eventName + '|' + c.data.role;
                            if (!seenKeys.has(key)) {
                                seenKeys.add(key);
                                uniqueList.push(c);
                            } else {
                                changed = true; // Found a duplicate
                            }
                        }
                    }
                    if (changed) {
                        list = uniqueList;
                        localStorage.setItem(listKey, JSON.stringify(list));
                    }

                    var countCertEl = document.getElementById('count-certificates');`);

content = content.replace("localStorage.setItem('teacher_class_registrations', '[]');", "localStorage.setItem('teacher_registrations', '[]');");

const logoutRegex = /window\.logout = function \(\) \{[\s\S]*?\}\);/;
const logoutMatch = content.match(logoutRegex);
if(logoutMatch) {
    const origCode = logoutMatch[0];
    const newLogout = `window.logout = function () {
                try {
                    addActivityLog('LOGOUT', 'Sistem', 'Admin keluar dari sesi');
                } catch(e) {}
                
                localStorage.removeItem('hey_youth_admin_token');
                
                function forceClearSessionAndRedirect() {
                    try {
                        for (var i = localStorage.length - 1; i >= 0; i--) {
                            var key = localStorage.key(i);
                            if (key && key.startsWith('sb-') && key.endsWith('-auth-token')) {
                                localStorage.removeItem(key);
                            }
                        }
                    } catch(e) {}
                    window.location.href = 'Login.html';
                }

                try {
                    if (supabase && supabase.auth && typeof supabase.auth.signOut === 'function') {
                        var p = supabase.auth.signOut();
                        if (p && typeof p.then === 'function') {
                            p.then(function () {
                                window.location.href = 'Login.html';
                            }).catch(function (error) {
                                forceClearSessionAndRedirect();
                            });
                        } else {
                            forceClearSessionAndRedirect();
                        }
                    } else {
                        forceClearSessionAndRedirect();
                    }
                } catch (error) {
                    forceClearSessionAndRedirect();
                }
            };
            // This regex replaced the original window.logout = function() { ... });, so we must add back the remaining code if any!
            // Wait, there is no code after }); for window.logout.`;
    
    // We just replace the original code cleanly
    content = content.replace(logoutRegex, newLogout);
    
    // Check if there's a trailing }; left from the regex mistake earlier:
    // Actually since we matched up to }); there is a trailing `};` in the original HTML!
    // The original HTML had: window.logout = function() { ... });\n            };
    // Let's replace `newLogout + "\n            };"` with just `newLogout` if it exists.
    content = content.replace(newLogout + '\n            };', newLogout);
}

// --- 2. INJECT CONTROLS ---

const tables = [
    { id: 'list-locations', filterText: 'Semua Lokasi', filterCol: undefined },
    { id: 'list-events', filterText: 'Semua Event', filterCol: 2 },
    { id: 'list-registrations', filterText: 'Semua Event', filterCol: 4 },
    { id: 'list-mentoring-categories', filterText: 'Semua Kategori', filterCol: undefined },
    { id: 'list-teacher-classes', filterText: 'Semua Kategori', filterCol: 1 },
    { id: 'list-teacher-registrations', filterText: 'Semua Kelas', filterCol: 4 },
    { id: 'list-certificate-designs', filterText: 'Semua Desain', filterCol: undefined },
    { id: 'list-certificates', filterText: 'Semua Event', filterCol: 3 },
    { id: 'list-activity-log', filterText: 'Semua Kategori', filterCol: 2 }
];

function generateInlineControls(id, filterText, hasFilter) {
    let filterHtml = '';
    if (hasFilter) {
        filterHtml = `
            <div class="flex items-center gap-2 w-full sm:w-auto">
                <i class="fas fa-filter text-gray-400 text-[11px]"></i>
                <select id="filter-${id}" class="w-full sm:w-auto px-3 py-1.5 border border-gray-200 rounded-lg text-xs bg-white text-gray-600 focus:outline-none focus:border-primary transition-colors cursor-pointer shadow-sm">
                    <option value="all">${filterText}</option>
                </select>
            </div>`;
    }
    
    return `
    <!-- SEARCH & FILTER UNTUK ${id} -->
    <div class="px-4 py-3 border-b border-gray-200 bg-gray-50/50 flex flex-col sm:flex-row items-center gap-3">
        <div class="relative w-full sm:w-72">
            <i class="fas fa-search absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 text-[11px] pointer-events-none"></i>
            <input type="text" id="search-${id}" placeholder="Cari data..." class="w-full pl-9 pr-3 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-sm">
        </div>
        ${filterHtml}
    </div>
    <!-- END SEARCH & FILTER -->
    `;
}

// Ensure safe injection
tables.forEach(t => {
    const tbodyIdx = content.indexOf(`id="${t.id}"`);
    if (tbodyIdx === -1) return;
    
    // Find the `<table` directly before the tbody
    const tableStartIdx = content.lastIndexOf('<table', tbodyIdx);
    if (tableStartIdx === -1) return;
    
    // Find the `<div` directly before the `<table` (this is the overflow-x-auto wrapper)
    const overflowIdx = content.lastIndexOf('<div', tableStartIdx);
    
    if (overflowIdx !== -1) {
        const htmlToInsert = generateInlineControls(t.id, t.filterText, t.filterCol !== undefined);
        content = content.substring(0, overflowIdx) + htmlToInsert + content.substring(overflowIdx);
    }
});

const initTableJs = `
            // === INIT TABLE CONTROLS ===
            window.initTableControls = function(searchId, tbodyId, filterId, filterColIndex) {
                var searchInput = document.getElementById(searchId);
                var filterSelect = document.getElementById(filterId);
                var tbody = document.getElementById(tbodyId);
                if (!searchInput || !tbody) return;

                function updateFilterOptions(dataRows) {
                    if (!filterSelect || filterColIndex === undefined) return;
                    
                    var firstOption = filterSelect.options[0];
                    filterSelect.innerHTML = '';
                    filterSelect.appendChild(firstOption);
                    
                    var uniqueValues = new Set();
                    dataRows.forEach(function(row) {
                        if (row.children[filterColIndex]) {
                            var val = row.children[filterColIndex].textContent.trim();
                            if (val) uniqueValues.add(val);
                        }
                    });
                    
                    Array.from(uniqueValues).sort().forEach(function(val) {
                        var opt = document.createElement('option');
                        opt.value = val.toLowerCase();
                        opt.textContent = val;
                        filterSelect.appendChild(opt);
                    });
                }

                var isFirstRun = true;

                function applyControls() {
                    var query = searchInput.value.toLowerCase().trim();
                    var filterValue = filterSelect ? filterSelect.value : 'all';
                    
                    var rows = Array.from(tbody.querySelectorAll('tr'));
                    var dataRows = [];
                    var emptyRows = [];
                    rows.forEach(function(row) {
                        if (row.children.length === 1 && (row.textContent.includes('Belum ada') || row.textContent.includes('Memuat') || row.textContent.includes('Gagal'))) {
                            emptyRows.push(row);
                        } else {
                            dataRows.push(row);
                        }
                    });

                    if (dataRows.length === 0) return;

                    if (isFirstRun && filterSelect && filterColIndex !== undefined) {
                        updateFilterOptions(dataRows);
                        isFirstRun = false;
                    }

                    dataRows.forEach(function(row) {
                        var text = row.textContent.toLowerCase();
                        var rowFilterVal = (filterColIndex !== undefined && row.children[filterColIndex]) ? row.children[filterColIndex].textContent.trim().toLowerCase() : '';
                        
                        var matchesSearch = text.includes(query);
                        var matchesFilter = filterValue === 'all' || rowFilterVal === filterValue;
                        
                        if (matchesSearch && matchesFilter) {
                            row.style.display = '';
                        } else {
                            row.style.display = 'none';
                        }
                    });
                }

                searchInput.addEventListener('input', applyControls);
                if (filterSelect) filterSelect.addEventListener('change', applyControls);

                var observer = new MutationObserver(function(mutations) {
                    var needsApply = false;
                    mutations.forEach(function(m) {
                        if (m.addedNodes.length > 0) needsApply = true;
                    });
                    if (needsApply) {
                        observer.disconnect(); 
                        isFirstRun = true;
                        applyControls();
                        observer.observe(tbody, { childList: true });
                    }
                });
                observer.observe(tbody, { childList: true });
            };

            document.addEventListener('DOMContentLoaded', function() {
                initTableControls('search-list-locations', 'list-locations', 'filter-list-locations', undefined);
                initTableControls('search-list-events', 'list-events', 'filter-list-events', 2);
                initTableControls('search-list-registrations', 'list-registrations', 'filter-list-registrations', 4);
                initTableControls('search-list-mentoring-categories', 'list-mentoring-categories', 'filter-list-mentoring-categories', undefined);
                initTableControls('search-list-teacher-classes', 'list-teacher-classes', 'filter-list-teacher-classes', 1);
                initTableControls('search-list-teacher-registrations', 'list-teacher-registrations', 'filter-list-teacher-registrations', 4);
                initTableControls('search-list-certificate-designs', 'list-certificate-designs', 'filter-list-certificate-designs', undefined);
                initTableControls('search-list-certificates', 'list-certificates', 'filter-list-certificates', 3);
                initTableControls('search-list-activity-log', 'list-activity-log', 'filter-list-activity-log', 2);
            });
            // === END INIT TABLE CONTROLS ===
`;

const endScriptIdx = content.lastIndexOf('</script>');
content = content.substring(0, endScriptIdx) + initTableJs + content.substring(endScriptIdx);

fs.writeFileSync(currentPath, content, 'utf8');
console.log('Success!');
