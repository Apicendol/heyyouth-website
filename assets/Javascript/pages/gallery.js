(function () {
            'use strict';

            var CMS_KEY = 'hey_youth_cms';
            var DEFAULT_DATA = {
                activityCards: [
                    {
                        id: 301,
                        category: 'Education',
                        date: '10 November 2025',
                        title: 'Dream Big, Learn Bigger: Inspiring the Next Generation at Yos Sudarso',
                        description: 'Kami mengunjungi sekolah di Yos Sudarso untuk berbagi inspirasi dan materi pendidikan interaktif kepada ratusan siswa, membantu mereka bermimpi lebih besar.',
                        image: 'assets/img/Donation.webp',
                        link: '#',
                        fullStory: '<p>Pada hari yang cerah, tim Hey Youth berkunjung ke SD Yos Sudarso. Antusiasme siswa-siswi sangat luar biasa ketika kami memperkenalkan program mentoring kami.</p><p>Kegiatan ini diawali dengan sesi ice breaking yang diikuti oleh seluruh siswa kelas 5 dan 6. Dilanjutkan dengan materi tentang "Membangun Mimpi Sejak Dini".</p><br><p>Kami berharap kunjungan ini dapat menjadi inspirasi bagi mereka untuk terus belajar dan giat meraih cita-cita.</p>'
                    },
                    {
                        id: 302,
                        category: 'Community',
                        date: '14 April 2025',
                        title: 'Instilling Education, Igniting Dreams: Hey Youth\'s Visit to TBM Kolong',
                        description: 'Kunjungan spesial ke TBM Kolong untuk mendukung literasi di lingkungan sekitar, mendonasikan buku, dan mengadakan sesi membaca bersama anak-anak.',
                        image: 'assets/img/Front Card.webp',
                        link: '#',
                        fullStory: '<p>TBM Kolong adalah salah satu tempat baca yang sangat bersemangat di daerah kami. Kami mendonasikan 100 eksemplar buku cerita dan ensiklopedia anak.</p><p>Selain donasi buku, relawan kami juga membacakan cerita rakyat Nusantara kepada anak-anak dengan penuh ekspresi.</p>'
                    }
                ],
                podcasts: [
                    {
                        id: 401,
                        episode: 'Episode 2',
                        title: 'Suicide Is Not The Answer: Here\'s Why',
                        link: '#'
                    },
                    {
                        id: 402,
                        episode: 'Episode 1',
                        title: 'The Power of Self-Affirmation: Transforming Our Lives',
                        link: '#'
                    }
                ]
            };

            function _esc(s) {
                if (!s) return '';
                var d = document.createElement('div');
                d.textContent = s;
                return d.innerHTML;
            }

            function _escA(s) {
                if (!s) return '';
                return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            }

            function _bilEsc(idVal, enVal, fallback) {
                var idText = idVal || fallback || '';
                var enText = enVal || fallback || '';
                var div = document.createElement('div');
                div.textContent = idText; var safeId = div.innerHTML;
                div.textContent = enText; var safeEn = div.innerHTML;
                return '<span class="lang-id">' + safeId + '</span><span class="lang-en">' + safeEn + '</span>';
            }

            function renderActivityCards(items) {
                var container = document.getElementById('activity-container');
                if (!container) return;

                if (!items || items.length === 0) {
                    var searchNote = activitySearchQuery ? ' dengan kata kunci "<strong>' + _esc(activitySearchQuery) + '</strong>"' : '';
                    var catNote = (activeCategory !== 'all') ? ' pada kategori ' + activeCategory : '';
                    container.innerHTML = '<div class="col-span-full py-16 px-4 text-center bg-surface/50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-gray-300 dark:border-slate-700 my-4">' +
                        '<div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-50 dark:bg-slate-800 text-primary dark:text-blue-400 flex items-center justify-center text-2xl shadow-sm">' +
                            '<i class="fas fa-search-minus"></i>' +
                        '</div>' +
                        '<h3 class="text-xl font-bold text-heading mb-2">' +
                            '<span class="lang-id">Tidak Ada Kegiatan Ditemukan</span>' +
                            '<span class="lang-en">No Activities Found</span>' +
                        '</h3>' +
                        '<p class="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6 leading-relaxed">' +
                            '<span class="lang-id">Tidak ditemukan kegiatan' + searchNote + catNote + '. Silakan coba kata kunci lain atau reset filter.</span>' +
                            '<span class="lang-en">No activities matching your search or filter. Try a different query or reset filters.</span>' +
                        '</p>' +
                        '<button onclick="window.resetActivityFilters && window.resetActivityFilters()" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-primary text-white hover:bg-primaryDark transition-all shadow-md hover:shadow-lg">' +
                            '<i class="fas fa-rotate-left"></i>' +
                            '<span class="lang-id">Reset Filter & Pencarian</span>' +
                            '<span class="lang-en">Reset Filter & Search</span>' +
                        '</button>' +
                    '</div>';
                    return;
                }

                container.innerHTML = items.map(function (item) {
                    var imgSrc = item.image || '';
                    var displaySrc = imgSrc ? window._resolveImgPath(imgSrc) : '';
                    var fallback = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop';
                    var detailLink = 'activity-detail.html?id=' + item.id;

                    var categoryHtml = _bilEsc(item.category_id, item.category_en, item.category);
                    var titleHtml = _bilEsc(item.title_id, item.title_en, item.title);
                    var descHtml = _bilEsc(item.description_id, item.description_en, item.description);

                    var displayDate = item.date || '';
                    // Convert Make.com Unix timestamps to readable dates
                    var strDate = String(displayDate).trim();
                    if (/^\d{10}$/.test(strDate)) {
                        var dateObj = new Date(parseInt(strDate) * 1000);
                        var months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
                        displayDate = dateObj.getDate() + ' ' + months[dateObj.getMonth()] + ' ' + dateObj.getFullYear();
                    } else if (/^\d{13}$/.test(strDate)) {
                        var dateObj = new Date(parseInt(strDate));
                        var months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
                        displayDate = dateObj.getDate() + ' ' + months[dateObj.getMonth()] + ' ' + dateObj.getFullYear();
                    }

                    return '<div class="gallery-item flex flex-col group h-full" data-category="' + _esc(item.category_en || item.category || '').toLowerCase() + '">' +
                        '<div class="border-t-2 border-black dark:border-slate-600 pt-2 mb-4 flex justify-between items-start">' +
                            '<span class="text-xs font-bold uppercase tracking-widest text-black dark:text-slate-200">' + categoryHtml + '</span>' +
                            '<span class="text-xs font-bold uppercase tracking-widest text-gray-500">' + _esc(displayDate).toUpperCase() + '</span>' +
                        '</div>' +
                        '<div class="relative overflow-hidden w-full mb-4 bg-gray-100 dark:bg-slate-800 h-64 lg:h-72 flex-shrink-0 rounded-2xl">' +
                            '<img src="' + _escA(displaySrc) + '" alt="' + _escA(item.title) + '" referrerpolicy="no-referrer" class="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" onerror="this.src=\'' + fallback + '\'">' +
                        '</div>' +
                        '<div class="flex flex-col flex-grow">' +
                            '<h3 class="text-xl lg:text-2xl font-extrabold text-heading mb-3 leading-tight tracking-tight hover:text-primary transition-colors font-sans line-clamp-3">' + titleHtml + '</h3>' +
                            '<p class="text-body text-sm mb-6 font-medium leading-relaxed line-clamp-3">' + descHtml + '</p>' +
                            '<a href="' + detailLink + '" target="_blank" class="inline-block text-heading font-extrabold uppercase text-xs tracking-widest hover:text-primary hover:underline mt-auto"><span class="lang-id">Baca Selengkapnya</span><span class="lang-en">Read Full Story</span></a>' +
                        '</div>' +
                        '</div>';
                }).join('');
            }

            function renderPodcasts(items) {
                var container = document.getElementById('podcast-container');
                if (!container) return;

                if (!items || items.length === 0) {
                    var searchNote = podcastSearchQuery ? ' dengan kata kunci "<strong>' + _esc(podcastSearchQuery) + '</strong>"' : '';
                    container.innerHTML = '<div class="col-span-full py-16 px-4 text-center bg-gray-50 dark:bg-slate-800/50 rounded-3xl border border-dashed border-gray-300 dark:border-slate-700 my-4">' +
                        '<div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-green-50 dark:bg-slate-800 text-green-600 dark:text-green-400 flex items-center justify-center text-2xl shadow-sm">' +
                            '<i class="fas fa-headphones-simple"></i>' +
                        '</div>' +
                        '<h3 class="text-xl font-bold text-heading mb-2">' +
                            '<span class="lang-id">Tidak Ada Podcast Ditemukan</span>' +
                            '<span class="lang-en">No Podcasts Found</span>' +
                        '</h3>' +
                        '<p class="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6 leading-relaxed">' +
                            '<span class="lang-id">Tidak ditemukan episode' + searchNote + '. Silakan coba kata kunci lain.</span>' +
                            '<span class="lang-en">No podcast episodes matching your search. Try a different query.</span>' +
                        '</p>' +
                        '<button onclick="window.resetPodcastSearch && window.resetPodcastSearch()" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-accent text-white hover:bg-yellow-600 transition-all shadow-md hover:shadow-lg">' +
                            '<i class="fas fa-rotate-left"></i>' +
                            '<span class="lang-id">Reset Pencarian Podcast</span>' +
                            '<span class="lang-en">Reset Podcast Search</span>' +
                        '</button>' +
                    '</div>';
                    return;
                }

                container.innerHTML = items.map(function (item) {
                    var targetLink = item.spotifyLink || 'https://open.spotify.com/search/Hey%20Youth';
                    var imgSrc = item.thumbnail ? window._resolveImgPath(item.thumbnail) : 'https://via.placeholder.com/150?text=No+Image';
                    var fallbackImg = 'https://ui-avatars.com/api/?name=Podcast&background=1D4ED8&color=fff&size=128';

                    var episodeHtml = _bilEsc(item.episode_id, item.episode_en, item.episode);
                    var titleHtml = _bilEsc(item.title_id, item.title_en, item.title);

                    var spotifyId = '';
                    var match = targetLink.match(/spotify\.com\/episode\/([a-zA-Z0-9]+)/);
                    if (match && match[1]) {
                        spotifyId = match[1];
                    }

                    var playBtnHtml = '';
                    if (spotifyId) {
                        playBtnHtml = '<iframe src="https://open.spotify.com/embed/episode/' + spotifyId + '?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" class="rounded-xl border-none"></iframe>';
                    } else {
                        playBtnHtml = '<a href="' + _escA(targetLink) + '" target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center text-sm font-bold text-white bg-green-500 hover:bg-green-600 px-4 py-3 rounded-full transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"><i class="fab fa-spotify mr-2"></i> <span class="lang-id">Dengarkan di Spotify</span><span class="lang-en">Listen on Spotify</span></a>';
                    }

                    return '<div class="flex flex-col bg-surface border border-gray-100 dark:border-slate-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">' +
                        '<div class="flex justify-center mb-6 relative group">' +
                        '<div class="w-28 h-28 rounded-xl flex-shrink-0 flex items-center justify-center shadow-lg overflow-hidden bg-gray-200">' +
                        '<img src="' + _escA(imgSrc) + '" alt="' + _escA(item.title) + '" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onerror="this.src=\'' + fallbackImg + '\'">' +
                        '</div>' +
                        '</div>' +
                        '<div class="text-center flex-grow mb-6">' +
                        '<span class="text-xs font-bold text-accent uppercase tracking-wide">' + episodeHtml + '</span>' +
                        '<h3 class="text-lg font-bold text-heading mt-1 mb-3 leading-snug line-clamp-2">' + titleHtml + '</h3>' +
                        '</div>' +
                        '<div class="mt-auto">' +
                        playBtnHtml +
                        '</div>' +
                        '</div>';
                }).join('');
            }

            var allActivities = [];
            var allPodcasts = [];
            var activeCategory = 'all';
            var activitySearchQuery = '';
            var podcastSearchQuery = '';

            /* ---- URL State Management ---- */
            function readUrlState() {
                var params = new URLSearchParams(window.location.search);
                var cat = params.get('category') || params.get('cat') || 'all';
                var q = params.get('q') || params.get('search') || '';
                var pq = params.get('podcast') || params.get('pq') || '';
                return {
                    category: cat.toLowerCase(),
                    search: q.trim(),
                    podcast: pq.trim()
                };
            }

            function syncUrlParams() {
                var params = new URLSearchParams(window.location.search);

                if (activeCategory && activeCategory !== 'all') {
                    params.set('category', activeCategory);
                    params.delete('cat');
                } else {
                    params.delete('category');
                    params.delete('cat');
                }

                if (activitySearchQuery && activitySearchQuery.trim()) {
                    params.set('q', activitySearchQuery.trim());
                    params.delete('search');
                } else {
                    params.delete('q');
                    params.delete('search');
                }

                if (podcastSearchQuery && podcastSearchQuery.trim()) {
                    params.set('podcast', podcastSearchQuery.trim());
                    params.delete('pq');
                } else {
                    params.delete('podcast');
                    params.delete('pq');
                }

                var qs = params.toString();
                var newUrl = window.location.pathname + (qs ? '?' + qs : '') + window.location.hash;
                if (newUrl !== (window.location.pathname + window.location.search + window.location.hash)) {
                    window.history.replaceState({ category: activeCategory, q: activitySearchQuery, podcast: podcastSearchQuery }, '', newUrl);
                }
            }

            function syncInputsFromState() {
                var searchInput = document.getElementById('activity-search');
                if (searchInput && searchInput.value !== activitySearchQuery) {
                    searchInput.value = activitySearchQuery;
                }

                var podcastInput = document.getElementById('podcast-search');
                if (podcastInput && podcastInput.value !== podcastSearchQuery) {
                    podcastInput.value = podcastSearchQuery;
                }

                var filterButtons = document.querySelectorAll('#activity-filters .filter-btn');
                filterButtons.forEach(function(btn) {
                    var btnCat = (btn.getAttribute('data-category') || '').toLowerCase();
                    if (btnCat === activeCategory) {
                        btn.classList.add('active', 'bg-primary', 'text-white', 'shadow-md', 'shadow-blue-500/20');
                        btn.classList.remove('bg-gray-100', 'text-gray-700', 'dark:bg-slate-800', 'dark:text-slate-200');
                    } else {
                        btn.classList.remove('active', 'bg-primary', 'text-white', 'shadow-md', 'shadow-blue-500/20');
                        btn.classList.add('bg-gray-100', 'text-gray-700', 'dark:bg-slate-800', 'dark:text-slate-200');
                    }
                });
            }

            function updateActivityBadges(showing, total) {
                var badge = document.getElementById('activity-count-badge');
                if (badge) {
                    if (total === 0) {
                        badge.innerHTML = '<span class="lang-id">Memuat kegiatan...</span><span class="lang-en">Loading activities...</span>';
                    } else if (showing === total && !activitySearchQuery && activeCategory === 'all') {
                        badge.innerHTML = '<span class="inline-block w-2 h-2 rounded-full bg-green-500 mr-1.5"></span>' +
                            '<span class="lang-id">Total <strong>' + total + '</strong> kegiatan</span>' +
                            '<span class="lang-en">Total <strong>' + total + '</strong> activities</span>';
                    } else {
                        badge.innerHTML = '<span class="inline-block w-2 h-2 rounded-full bg-blue-500 mr-1.5"></span>' +
                            '<span class="lang-id">Menampilkan <strong>' + showing + '</strong> dari <strong>' + total + '</strong> kegiatan</span>' +
                            '<span class="lang-en">Showing <strong>' + showing + '</strong> of <strong>' + total + '</strong> activities</span>';
                    }
                }

                var clearBtn = document.getElementById('activity-search-clear');
                if (clearBtn) {
                    if (activitySearchQuery) {
                        clearBtn.classList.remove('hidden');
                        clearBtn.style.display = 'flex';
                    } else {
                        clearBtn.classList.add('hidden');
                        clearBtn.style.display = 'none';
                    }
                }

                var indicator = document.getElementById('active-filter-indicators');
                var tagEl = document.getElementById('active-filter-tag');
                if (indicator && tagEl) {
                    var hasFilter = (activeCategory !== 'all');
                    var hasSearch = Boolean(activitySearchQuery);

                    if (hasFilter || hasSearch) {
                        var parts = [];
                        if (hasFilter) {
                            var catName = activeCategory === 'education' ? 'Pendidikan' : (activeCategory === 'community' ? 'Komunitas' : activeCategory);
                            parts.push('Kategori: ' + catName);
                        }
                        if (hasSearch) {
                            parts.push('Cari: "' + activitySearchQuery + '"');
                        }
                        tagEl.textContent = parts.join(' • ');
                        indicator.classList.remove('hidden');
                        indicator.classList.add('flex');
                    } else {
                        indicator.classList.add('hidden');
                        indicator.classList.remove('flex');
                    }
                }
            }

            function updatePodcastBadges(showing, total) {
                var badge = document.getElementById('podcast-count-badge');
                if (badge) {
                    if (total === 0) {
                        badge.innerHTML = '<span class="lang-id">Memuat podcast...</span><span class="lang-en">Loading podcasts...</span>';
                    } else if (showing === total && !podcastSearchQuery) {
                        badge.innerHTML = '<span class="inline-block w-2 h-2 rounded-full bg-green-500 mr-1.5"></span>' +
                            '<span class="lang-id">Total <strong>' + total + '</strong> episode</span>' +
                            '<span class="lang-en">Total <strong>' + total + '</strong> episodes</span>';
                    } else {
                        badge.innerHTML = '<span class="inline-block w-2 h-2 rounded-full bg-accent mr-1.5"></span>' +
                            '<span class="lang-id">Menampilkan <strong>' + showing + '</strong> dari <strong>' + total + '</strong> episode</span>' +
                            '<span class="lang-en">Showing <strong>' + showing + '</strong> of <strong>' + total + '</strong> episodes</span>';
                    }
                }

                var clearBtn = document.getElementById('podcast-search-clear');
                if (clearBtn) {
                    if (podcastSearchQuery) {
                        clearBtn.classList.remove('hidden');
                        clearBtn.style.display = 'flex';
                    } else {
                        clearBtn.classList.add('hidden');
                        clearBtn.style.display = 'none';
                    }
                }
            }

            function filterAndRenderActivities() {
                var filtered = allActivities.filter(function(item) {
                    var matchesCategory = true;
                    if (activeCategory !== 'all') {
                        var cat = (item.category || '').toLowerCase();
                        var catId = (item.category_id || '').toLowerCase();
                        var catEn = (item.category_en || '').toLowerCase();
                        if (activeCategory === 'education') {
                            matchesCategory = cat.includes('education') || cat.includes('pendidikan') || catId.includes('pendidikan') || catEn.includes('education');
                        } else if (activeCategory === 'community') {
                            matchesCategory = cat.includes('community') || cat.includes('komunitas') || catId.includes('komunitas') || catEn.includes('community');
                        } else {
                            matchesCategory = cat.includes(activeCategory) || catId.includes(activeCategory) || catEn.includes(activeCategory);
                        }
                    }
                    
                    var matchesSearch = true;
                    if (activitySearchQuery) {
                        var q = activitySearchQuery.toLowerCase();
                        var title = (item.title || '').toLowerCase();
                        var titleId = (item.title_id || '').toLowerCase();
                        var titleEn = (item.title_en || '').toLowerCase();
                        var desc = (item.description || '').toLowerCase();
                        var descId = (item.description_id || '').toLowerCase();
                        var descEn = (item.description_en || '').toLowerCase();
                        var dateStr = (item.date || '').toLowerCase();
                        var cat = (item.category || '').toLowerCase();
                        var catId = (item.category_id || '').toLowerCase();
                        var catEn = (item.category_en || '').toLowerCase();
                        
                        matchesSearch = title.includes(q) || titleId.includes(q) || titleEn.includes(q) ||
                                        desc.includes(q) || descId.includes(q) || descEn.includes(q) ||
                                        dateStr.includes(q) || cat.includes(q) || catId.includes(q) || catEn.includes(q);
                    }
                    
                    return matchesCategory && matchesSearch;
                });

                renderActivityCards(filtered);
                updateActivityBadges(filtered.length, allActivities.length);
            }

            function filterAndRenderPodcasts() {
                var filtered = allPodcasts.filter(function(item) {
                    var matchesSearch = true;
                    if (podcastSearchQuery) {
                        var q = podcastSearchQuery.toLowerCase();
                        var title = (item.title || '').toLowerCase();
                        var titleId = (item.title_id || '').toLowerCase();
                        var titleEn = (item.title_en || '').toLowerCase();
                        var episode = (item.episode || '').toLowerCase();
                        
                        matchesSearch = title.includes(q) || titleId.includes(q) || titleEn.includes(q) ||
                                        episode.includes(q);
                    }
                    return matchesSearch;
                });

                renderPodcasts(filtered);
                updatePodcastBadges(filtered.length, allPodcasts.length);
            }

            /* ---- Global Reset Helpers ---- */
            window.resetActivityFilters = function() {
                activeCategory = 'all';
                activitySearchQuery = '';
                syncInputsFromState();
                syncUrlParams();
                filterAndRenderActivities();
            };

            window.resetPodcastSearch = function() {
                podcastSearchQuery = '';
                syncInputsFromState();
                syncUrlParams();
                filterAndRenderPodcasts();
            };

            /* ---- Debounce Handlers ---- */
            var actTimer = null;
            function debounceActivitySearch(val) {
                clearTimeout(actTimer);
                actTimer = setTimeout(function() {
                    activitySearchQuery = val;
                    syncUrlParams();
                    filterAndRenderActivities();
                }, 200);
            }

            var podTimer = null;
            function debouncePodcastSearch(val) {
                clearTimeout(podTimer);
                podTimer = setTimeout(function() {
                    podcastSearchQuery = val;
                    syncUrlParams();
                    filterAndRenderPodcasts();
                }, 200);
            }

            async function initGallery() {
                // Initialize State from URL
                var initialUrlState = readUrlState();
                activeCategory = initialUrlState.category || 'all';
                activitySearchQuery = initialUrlState.search || '';
                podcastSearchQuery = initialUrlState.podcast || '';

                syncInputsFromState();

                var data = await window.getFirebaseData(DEFAULT_DATA);
                allActivities = data.activityCards || DEFAULT_DATA.activityCards;
                allPodcasts = data.podcasts || DEFAULT_DATA.podcasts;
                
                filterAndRenderActivities();
                filterAndRenderPodcasts();

                // Setup Filter Buttons
                var filterButtons = document.querySelectorAll('#activity-filters .filter-btn');
                filterButtons.forEach(function(btn) {
                    btn.addEventListener('click', function(e) {
                        activeCategory = e.currentTarget.getAttribute('data-category') || 'all';
                        syncInputsFromState();
                        syncUrlParams();
                        filterAndRenderActivities();
                    });
                });

                // Setup Activity Search
                var searchInput = document.getElementById('activity-search');
                if (searchInput) {
                    searchInput.addEventListener('input', function(e) {
                        debounceActivitySearch(e.target.value.trim());
                    });
                }

                var clearBtn = document.getElementById('activity-search-clear');
                if (clearBtn) {
                    clearBtn.addEventListener('click', function() {
                        if (searchInput) {
                            searchInput.value = '';
                            searchInput.focus();
                        }
                        activitySearchQuery = '';
                        syncUrlParams();
                        filterAndRenderActivities();
                    });
                }

                // Setup Reset Filters Button
                var btnReset = document.getElementById('btn-reset-filters');
                if (btnReset) {
                    btnReset.addEventListener('click', function() {
                        window.resetActivityFilters();
                    });
                }

                // Setup Podcast Search
                var podcastSearchInput = document.getElementById('podcast-search');
                if (podcastSearchInput) {
                    podcastSearchInput.addEventListener('input', function(e) {
                        debouncePodcastSearch(e.target.value.trim());
                    });
                }

                var podcastClearBtn = document.getElementById('podcast-search-clear');
                if (podcastClearBtn) {
                    podcastClearBtn.addEventListener('click', function() {
                        if (podcastSearchInput) {
                            podcastSearchInput.value = '';
                            podcastSearchInput.focus();
                        }
                        podcastSearchQuery = '';
                        syncUrlParams();
                        filterAndRenderPodcasts();
                    });
                }

                // Browser Navigation Popstate (Back/Forward)
                window.addEventListener('popstate', function() {
                    var state = readUrlState();
                    activeCategory = state.category;
                    activitySearchQuery = state.search;
                    podcastSearchQuery = state.podcast;
                    syncInputsFromState();
                    filterAndRenderActivities();
                    filterAndRenderPodcasts();
                });
            }

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initGallery);
            } else {
                initGallery();
            }
        })();