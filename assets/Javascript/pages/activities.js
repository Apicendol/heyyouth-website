(function () {
      'use strict';

      /* =========================================
         ========================================= */
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
            fullStory: '<p>Pada hari yang cerah, tim Hey Youth berkunjung ke SD Yos Sudarso. Antusiasme siswa-siswi sangat luar biasa ketika kami memperkenalkan program mentoring kami.</p><p>Kegiatan ini diawali dengan sesi ice breaking yang diikuti oleh seluruh siswa kelas 5 and 6. Dilanjutkan dengan materi tentang "Membangun Mimpi Sejak Dini".</p><br><p>Kami berharap kunjungan ini dapat menjadi inspirasi bagi mereka untuk terus belajar dan giat meraih cita-cita.</p>'
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
        ],
        events: [
          {
            id: 601,
            title_id: 'Webinar Persiapan Karir Global',
            title_en: 'Global Career Preparation Webinar',
            date: '25 Juli 2026',
            time: '15:00 WIB',
            location: 'Zoom Meeting',
            description_id: 'Webinar gratis untuk membantu mahasiswa mempersiapkan karir di tingkat global.',
            description_en: 'Free webinar to help students prepare for global careers.',
            speaker: 'Yuni Triandini',
            speakerRole: 'Founder of Hey Youth',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop',
            link: 'https://zoom.us/j/123456789',
            status: 'upcoming'
          }
        ]
      };

      function getData() {
        try {
          var raw = localStorage.getItem(CMS_KEY);
          if (raw) {
            var parsed = JSON.parse(raw);
            if (parsed.activityCards && parsed.podcasts) {
              parsed.activityCards.forEach(function (card) {
                if (card.image === 'img/activity1.jpg') card.image = 'assets/img/Donation.webp';
                if (card.image === 'img/activity2.jpg') card.image = 'assets/img/Front Card.webp';
              });
              if (!parsed.events) {
                parsed.events = DEFAULT_DATA.events;
              }
              return parsed;
            }
          }
        } catch (e) { console.error('Error reading CMS data', e); }
        return JSON.parse(JSON.stringify(DEFAULT_DATA));
      }

      /* =========================================
         ========================================= */
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

      /* =========================================
         ========================================= */
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
          container.innerHTML = '<div class="py-12 px-4 text-center bg-surface/50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-gray-300 dark:border-slate-700 my-2">' +
            '<div class="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-50 dark:bg-slate-800 text-primary dark:text-blue-400 flex items-center justify-center text-xl shadow-sm">' +
              '<i class="fas fa-search-minus"></i>' +
            '</div>' +
            '<h3 class="text-base font-bold text-heading mb-1">' +
              '<span class="lang-id">Tidak Ada Kegiatan Ditemukan</span>' +
              '<span class="lang-en">No Activities Found</span>' +
            '</h3>' +
            '<p class="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto mb-4 leading-relaxed">' +
              '<span class="lang-id">Tidak ditemukan kegiatan' + searchNote + catNote + '.</span>' +
              '<span class="lang-en">No activities matching your query or filter.</span>' +
            '</p>' +
            '<button onclick="window.resetActivitiesPageFilters && window.resetActivitiesPageFilters()" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-primary text-white hover:bg-primaryDark transition-all shadow-sm">' +
              '<i class="fas fa-rotate-left text-[10px]"></i>' +
              '<span class="lang-id">Reset Filter</span>' +
              '<span class="lang-en">Reset Filter</span>' +
            '</button>' +
          '</div>';
          return;
        }

        container.innerHTML = items.map(function (item, index) {

          var cat = item.category || '';
          var badgeClass = cat.toLowerCase() === 'education' || cat.toLowerCase() === 'pendidikan' ? 'bg-primary/90 backdrop-blur' : 'bg-accent/90 backdrop-blur';

          var imgSrc = item.image ? window._resolveImgPath(item.image) : '';
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
              var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
              displayDate = dateObj.getDate() + ' ' + months[dateObj.getMonth()] + ' ' + dateObj.getFullYear();
          } else if (/^\d{13}$/.test(strDate)) {
              var dateObj = new Date(parseInt(strDate));
              var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
              displayDate = dateObj.getDate() + ' ' + months[dateObj.getMonth()] + ' ' + dateObj.getFullYear();
          }

          var isFirst = (index === 0);
          var cardBorder = isFirst
            ? 'border:2px solid #3b82f6;box-shadow:0 4px 24px rgba(59,130,246,0.13);'
            : 'border:1.5px solid #e5e7eb;';
          var cardBg = isFirst
            ? 'background:linear-gradient(135deg,#eff6ff 0%,#ffffff 60%);'
            : 'background:#ffffff;';

          return '<article class="dark:bg-slate-900 rounded-2xl transition-all duration-300 group flex flex-col overflow-hidden" style="' + cardBg + cardBorder + '">' +
            /* ---- top row: image + date/title ---- */
            '<div class="flex flex-row" style="height:200px;">' +
            '<div class="relative flex-shrink-0 overflow-hidden" style="width:400px;height:200px;">' +
            '<img src="' + _escA(imgSrc) + '" alt="' + _escA(item.title) + '" referrerpolicy="no-referrer" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" style="width:100%;height:100%;object-fit:cover;" onerror="this.src=\'' + fallback + '\'">' +
            '<div class="absolute top-2 left-2"><span class="' + badgeClass + ' text-white font-bold px-1.5 py-0.5 rounded-full shadow-sm" style="font-size:8px;">' + categoryHtml + '</span></div>' +
            (isFirst ? '<div class="absolute top-2 right-2"><span style="background:#f59e0b;color:#fff;font-size:8px;font-weight:700;padding:2px 6px;border-radius:999px;">&#9733; Featured</span></div>' : '') +
            '</div>' +
            '<div class="flex flex-col justify-center flex-grow min-w-0 px-4 py-3 overflow-hidden">' +
            '<div class="flex items-center text-gray-400 mb-1.5" style="font-size:10px;"><i class="far fa-calendar-alt mr-1"></i><span>' + _esc(displayDate) + '</span></div>' +
            '<h3 class="' + (isFirst ? 'text-base' : 'text-sm') + ' font-bold text-heading leading-snug line-clamp-3 group-hover:text-primary transition-colors">' + titleHtml + '</h3>' +
            '</div>' +
            '</div>' +
            /* ---- bottom: description + read more + share ---- */
            '<div class="flex flex-col justify-between px-5 py-4 border-t flex-grow" style="height:152px;' + (isFirst ? 'background:linear-gradient(135deg,#eff6ff,#fff);border-color:#bfdbfe;' : 'background:#fafafa;border-color:#f3f4f6;') + '">' +
            '<p class="text-body leading-relaxed line-clamp-3 flex-grow" style="font-size:12px;">' + descHtml + '</p>' +
            '<div class="flex items-center justify-between mt-3">' +
            '<a href="' + detailLink + '" target="_blank" class="inline-flex items-center font-bold hover:text-accent transition-colors ' + (isFirst ? 'text-blue-600' : 'text-primary') + '" style="font-size:12px;"><span class="lang-id">Baca Selengkapnya</span><span class="lang-en">Read Full Story</span><i class="fas fa-arrow-right ml-1.5" style="font-size:10px;"></i></a>' +
            '<div class="flex items-center gap-2">' +
            '<span class="text-[10px] text-gray-400 font-semibold lang-id">Bagikan:</span><span class="text-[10px] text-gray-400 font-semibold lang-en">Share:</span>' +
            '<a href="https://api.whatsapp.com/send?text=' + encodeURIComponent(item.title_id || item.title || '') + '%20' + encodeURIComponent(window.location.origin + '/' + detailLink) + '" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-green-500 transition-colors" title="Share WhatsApp"><i class="fab fa-whatsapp text-xs"></i></a>' +
            '<a href="https://twitter.com/intent/tweet?text=' + encodeURIComponent(item.title_id || item.title || '') + '&url=' + encodeURIComponent(window.location.origin + '/' + detailLink) + '" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-slate-800 transition-colors" title="Share Twitter/X"><i class="fa-brands fa-x-twitter text-xs"></i></a>' +
            '<a href="https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(window.location.origin + '/' + detailLink) + '" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-700 transition-colors" title="Share LinkedIn"><i class="fab fa-linkedin-in text-xs"></i></a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</article>';
        }).join('');










      }

      /* =========================================
 ========================================= */
      function renderPodcasts(items) {
        var container = document.getElementById('podcast-container');
        if (!container) return;

        if (items.length === 0) {
          var searchNote = podcastSearchQuery ? ' dengan kata kunci "<strong>' + _esc(podcastSearchQuery) + '</strong>"' : '';
          container.innerHTML = '<div class="py-12 px-4 text-center bg-gray-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-gray-300 dark:border-slate-700 my-2">' +
            '<div class="w-12 h-12 mx-auto mb-3 rounded-xl bg-green-50 dark:bg-slate-800 text-green-600 dark:text-green-400 flex items-center justify-center text-xl shadow-sm">' +
              '<i class="fas fa-headphones-simple"></i>' +
            '</div>' +
            '<h3 class="text-base font-bold text-heading mb-1">' +
              '<span class="lang-id">Tidak Ada Podcast Ditemukan</span>' +
              '<span class="lang-en">No Podcasts Found</span>' +
            '</h3>' +
            '<p class="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto mb-4 leading-relaxed">' +
              '<span class="lang-id">Tidak ditemukan episode' + searchNote + '.</span>' +
              '<span class="lang-en">No episodes matching your query.</span>' +
            '</p>' +
            '<button onclick="window.resetActivitiesPodcastSearch && window.resetActivitiesPodcastSearch()" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-accent text-white hover:bg-yellow-600 transition-all shadow-sm">' +
              '<i class="fas fa-rotate-left text-[10px]"></i>' +
              '<span class="lang-id">Reset Pencarian</span>' +
              '<span class="lang-en">Reset Search</span>' +
            '</button>' +
          '</div>';
          return;
        }

        container.innerHTML = items.map(function (item, index) {
          var targetLink = item.spotifyLink || 'https://open.spotify.com/search/Hey%20Youth';
          if (!targetLink || targetLink === '#') targetLink = 'https://open.spotify.com/search/Hey%20Youth';

          var imgSrc = item.thumbnail ? window._resolveImgPath(item.thumbnail) : 'https://via.placeholder.com/150?text=No+Image';
          var fallbackImg = 'https://ui-avatars.com/api/?name=Podcast&background=1D4ED8&color=fff&size=128';

          var episodeHtml = _bilEsc(item.episode_id, item.episode_en, item.episode);
          var titleHtml = _bilEsc(item.title_id, item.title_en, item.title);

          var spotifyId = '';
          var match = targetLink.match(/spotify\.com\/episode\/([a-zA-Z0-9]+)/);
          if (match && match[1]) {
            spotifyId = match[1];
          }

          /* ---- Spotify compact player below the card ---- */
          var playerHtml = '';
          if (spotifyId) {
            playerHtml = '<iframe src="https://open.spotify.com/embed/episode/' + spotifyId + '?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" style="display:block;border:none;"></iframe>';
          } else {
            playerHtml = '<div style="display:flex;align-items:center;justify-content:center;gap:10px;padding:12px 16px;background:#f9fafb;border-top:1px solid #f3f4f6;">' +
              '<i class="fab fa-spotify" style="color:#1db954;font-size:20px;"></i>' +
              '<a href="' + _escA(targetLink) + '" target="_blank" rel="noopener noreferrer" style="font-size:13px;font-weight:700;color:#16a34a;text-decoration:none;"><span class="lang-id">Dengarkan di Spotify</span><span class="lang-en">Listen on Spotify</span></a>' +
              '</div>';
          }
          var isFirst = (index === 0);
          var cardBorder = isFirst
            ? 'border:2px solid #3b82f6;box-shadow:0 4px 24px rgba(59,130,246,0.13);'
            : 'border:1.5px solid #e5e7eb;';
          var cardBg = isFirst
            ? 'background:linear-gradient(135deg,#eff6ff 0%,#ffffff 60%);'
            : 'background:#ffffff;';

          return '<div class="dark:bg-slate-900 border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden flex flex-col" style="' + cardBg + cardBorder + '">' +
            /* ---- top row: thumbnail + episode/title ---- */
            '<div class="flex flex-row" style="height:200px;">' +
            '<div class="relative flex-shrink-0 overflow-hidden" style="width:400px;height:200px;">' +
            '<img src="' + _escA(imgSrc) + '" alt="' + _escA(item.title) + '" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" style="width:100%;height:100%;object-fit:cover;" onerror="this.src=\'' + fallbackImg + '\'">' +
            (isFirst ? '<div class="absolute top-2 left-2"><span style="background:#f59e0b;color:#fff;font-size:8px;font-weight:700;padding:2px 6px;border-radius:999px;">&#9733; Featured</span></div>' : '') +
            '</div>' +
            '<div class="flex flex-col justify-center flex-grow min-w-0 px-4 py-4">' +
            '<span class="font-bold text-accent uppercase tracking-wider mb-1.5" style="font-size:10px;">' + episodeHtml + '</span>' +
            '<h3 class="text-sm font-bold text-heading leading-snug line-clamp-4">' + titleHtml + '</h3>' +
            '</div>' +
            '</div>' +
            /* ---- Spotify player below ---- */
            playerHtml +
            '</div>';
        }).join('');






      }

      /* =========================================
         ========================================= */
      var allActivities = [];
      var allPodcasts = [];
      var activeCategory = 'all';
      var activitySearchQuery = '';
      var podcastSearchQuery = '';

      /* ---- URL State Management for Activities Page ---- */
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
        filterButtons.forEach(function (btn) {
          var btnCat = (btn.getAttribute('data-category') || '').toLowerCase();
          if (btnCat === activeCategory) {
            btn.classList.add('active', 'bg-primary', 'text-white');
            btn.classList.remove('bg-gray-100', 'text-gray-700', 'dark:bg-slate-800', 'dark:text-slate-200');
          } else {
            btn.classList.remove('active', 'bg-primary', 'text-white');
            btn.classList.add('bg-gray-100', 'text-gray-700', 'dark:bg-slate-800', 'dark:text-slate-200');
          }
        });
      }

      function updateActivitiesBadges(showing, total) {
        var badge = document.getElementById('activity-count-badge');
        if (badge) {
          if (total === 0) {
            badge.textContent = '';
          } else if (activeCategory === 'all' && !activitySearchQuery) {
            badge.innerHTML = '<span class="lang-id">3 terbaru dari ' + total + '</span><span class="lang-en">3 latest of ' + total + '</span>';
          } else {
            badge.innerHTML = '<span class="lang-id">Hasil: <strong>' + showing + '</strong> dari ' + total + '</span><span class="lang-en">Showing: <strong>' + showing + '</strong> of ' + total + '</span>';
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

        var resetBtn = document.getElementById('btn-reset-act-filters');
        if (resetBtn) {
          if (activeCategory !== 'all' || activitySearchQuery) {
            resetBtn.classList.remove('hidden');
          } else {
            resetBtn.classList.add('hidden');
          }
        }

        var viewAllLink = document.getElementById('link-view-all-activities');
        if (viewAllLink) {
          var targetParams = new URLSearchParams();
          if (activeCategory && activeCategory !== 'all') targetParams.set('category', activeCategory);
          if (activitySearchQuery) targetParams.set('q', activitySearchQuery);
          var qs = targetParams.toString();
          viewAllLink.href = 'gallery.html' + (qs ? '?' + qs : '') + '#activities';
        }
      }

      function updatePodcastsBadges(showing, total) {
        var badge = document.getElementById('podcast-count-badge');
        if (badge) {
          if (total === 0) {
            badge.textContent = '';
          } else if (!podcastSearchQuery) {
            badge.innerHTML = '<span class="lang-id">3 terbaru dari ' + total + '</span><span class="lang-en">3 latest of ' + total + '</span>';
          } else {
            badge.innerHTML = '<span class="lang-id">Hasil: <strong>' + showing + '</strong> dari ' + total + '</span><span class="lang-en">Showing: <strong>' + showing + '</strong> of ' + total + '</span>';
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

        var viewAllPodcasts = document.getElementById('link-view-all-podcasts');
        if (viewAllPodcasts) {
          var targetParams = new URLSearchParams();
          if (podcastSearchQuery) targetParams.set('podcast', podcastSearchQuery);
          var qs = targetParams.toString();
          viewAllPodcasts.href = 'gallery.html' + (qs ? '?' + qs : '') + '#podcasts';
        }
      }

      function filterAndRenderActivities() {
        var filtered = allActivities.slice().reverse();

        if (activeCategory !== 'all') {
          filtered = filtered.filter(function (item) {
            var cat = (item.category || '').toLowerCase();
            var catId = (item.category_id || '').toLowerCase();
            var catEn = (item.category_en || '').toLowerCase();
            if (activeCategory === 'education') {
              return cat.includes('education') || cat.includes('pendidikan') || catId.includes('pendidikan') || catEn.includes('education');
            } else if (activeCategory === 'community') {
              return cat.includes('community') || cat.includes('komunitas') || catId.includes('komunitas') || catEn.includes('community');
            } else {
              return cat.includes(activeCategory) || catId.includes(activeCategory) || catEn.includes(activeCategory);
            }
          });
        }

        if (activitySearchQuery) {
          var q = activitySearchQuery.toLowerCase();
          filtered = filtered.filter(function (item) {
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
            return title.includes(q) || titleId.includes(q) || titleEn.includes(q) ||
              desc.includes(q) || descId.includes(q) || descEn.includes(q) ||
              dateStr.includes(q) || cat.includes(q) || catId.includes(q) || catEn.includes(q);
          });
        } else if (activeCategory === 'all') {
          var totalCount = filtered.length;
          renderActivityCards(filtered.slice(0, 3));
          updateActivitiesBadges(Math.min(3, totalCount), totalCount);
          return;
        }

        renderActivityCards(filtered);
        updateActivitiesBadges(filtered.length, allActivities.length);
      }

      function filterAndRenderPodcasts() {
        var filtered = allPodcasts.slice().reverse();

        if (podcastSearchQuery) {
          var q = podcastSearchQuery.toLowerCase();
          filtered = filtered.filter(function (item) {
            var title = (item.title || '').toLowerCase();
            var titleId = (item.title_id || '').toLowerCase();
            var titleEn = (item.title_en || '').toLowerCase();
            var episode = (item.episode || '').toLowerCase();
            return title.includes(q) || titleId.includes(q) || titleEn.includes(q) ||
              episode.includes(q);
          });
          renderPodcasts(filtered);
          updatePodcastsBadges(filtered.length, allPodcasts.length);
        } else {
          var totalCount = filtered.length;
          renderPodcasts(filtered.slice(0, 3));
          updatePodcastsBadges(Math.min(3, totalCount), totalCount);
        }
      }

      /* ---- Global Reset Helpers for Activities Page ---- */
      window.resetActivitiesPageFilters = function () {
        activeCategory = 'all';
        activitySearchQuery = '';
        syncInputsFromState();
        syncUrlParams();
        filterAndRenderActivities();
      };

      window.resetActivitiesPodcastSearch = function () {
        podcastSearchQuery = '';
        syncInputsFromState();
        syncUrlParams();
        filterAndRenderPodcasts();
      };

      var actTimer = null;
      function debounceActivitySearch(val) {
        clearTimeout(actTimer);
        actTimer = setTimeout(function () {
          activitySearchQuery = val;
          syncUrlParams();
          filterAndRenderActivities();
        }, 200);
      }

      var podTimer = null;
      function debouncePodcastSearch(val) {
        clearTimeout(podTimer);
        podTimer = setTimeout(function () {
          podcastSearchQuery = val;
          syncUrlParams();
          filterAndRenderPodcasts();
        }, 200);
      }



      function getEventDateTime(dateStr, timeStr) {
        if (!dateStr) return new Date(0);
        var str = (dateStr + ' ' + (timeStr || '')).toLowerCase();
        str = str.replace(/(wib|wita|wit|utc|gmt\+7|gmt\+8|gmt\+9)/gi, '').trim();

        var monthsId = ['januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember'];
        var monthsEn = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        var monthsAbbrId = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'agu', 'sep', 'okt', 'nov', 'des'];
        var monthsAbbrEn = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

        for (var i = 0; i < 12; i++) {
          str = str.replace(new RegExp(monthsId[i], 'g'), monthsEn[i]);
          str = str.replace(new RegExp(monthsAbbrId[i], 'g'), monthsAbbrEn[i]);
        }

        var parsedMs = Date.parse(str);
        if (!isNaN(parsedMs)) {
          return new Date(parsedMs);
        }

        var match = str.match(/(\d{1,2})\s+([a-z]+)\s+(\d{4})(?:\s+(\d{1,2})[:.](\d{2}))?/);
        if (match) {
          var day = parseInt(match[1]);
          var monthName = match[2];
          var year = parseInt(match[3]);
          var hours = match[4] ? parseInt(match[4]) : 0;
          var minutes = match[5] ? parseInt(match[5]) : 0;

          var monthIndex = monthsEn.indexOf(monthName);
          if (monthIndex === -1) {
            monthIndex = monthsAbbrEn.indexOf(monthName);
          }
          if (monthIndex !== -1) {
            return new Date(year, monthIndex, day, hours, minutes);
          }
        }
        
        var isoMatch = str.match(/(\d{4})-(\d{2})-(\d{2})/);
        if (isoMatch) {
          var y = parseInt(isoMatch[1]);
          var m = parseInt(isoMatch[2]) - 1;
          var d = parseInt(isoMatch[3]);
          var tMatch = str.match(/(\d{1,2})[:.](\d{2})/);
          var h = tMatch ? parseInt(tMatch[1]) : 0;
          var min = tMatch ? parseInt(tMatch[2]) : 0;
          return new Date(y, m, d, h, min);
        }

        return new Date(str);
      }

      function getEventStatus(dateStr, timeStr) {
        var eventDate = getEventDateTime(dateStr, timeStr);
        var now = new Date();
        return eventDate < now ? 'completed' : 'upcoming';
      }

          // Fungsi global untuk download file .ics (Apple Calendar / Outlook) dengan detail lengkap
      window.downloadICS = function(title, location, descEncoded, startDateStr, endDateStr) {
        var description = decodeURIComponent(descEncoded || '');
        
        var icsData = [
          'BEGIN:VCALENDAR',
          'VERSION:2.0',
          'PRODID:-//Hey Youth//Event Calendar//ID',
          'BEGIN:VEVENT',
          'SUMMARY:' + title,
          'DESCRIPTION:' + description.replace(/\r?\n/g, '\\n'),
          'LOCATION:' + location,
          (startDateStr ? 'DTSTART:' + startDateStr : ''),
          (endDateStr ? 'DTEND:' + endDateStr : ''),
          'END:VEVENT',
          'END:VCALENDAR'
        ].filter(Boolean).join('\r\n');

        var blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8;' });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.ics');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

        // Fungsi toggle untuk membuka/menutup dropdown Add to Calendar saat diklik
      window.toggleCalendarMenu = function(event, btn) {
        event.stopPropagation();
        var currentMenu = btn.nextElementSibling;
        
        // Tutup dropdown lain yang sedang terbuka
        document.querySelectorAll('.calendar-dropdown-menu').forEach(function(menu) {
          if (menu !== currentMenu) menu.classList.add('hidden');
        });

        // Buka / tutup menu yang diklik
        if (currentMenu) {
          currentMenu.classList.toggle('hidden');
        }
      };

      // Otomatis tutup dropdown jika pengguna mengklik area di luar tombol
      document.addEventListener('click', function() {
        document.querySelectorAll('.calendar-dropdown-menu').forEach(function(menu) {
          menu.classList.add('hidden');
        });
      });

      /* =========================================
         ========================================= */
      function renderUpcomingEvents(events) {
        var container = document.getElementById('events-container');
        if (!container) return;

        var list = events || [];
        var upcoming = list.filter(function (e) { return getEventStatus(e.date, e.time) === 'upcoming'; });

        // Helper untuk mengubah JS Date ke format ISO UTC Calendar (YYYYMMDDTHHMMSSZ)
        function formatCalDate(d) {
          if (!d || isNaN(d.getTime())) return '';
          var pad = function(n) { return n < 10 ? '0' + n : n; };
          return d.getUTCFullYear() +
            pad(d.getUTCMonth() + 1) +
            pad(d.getUTCDate()) + 'T' +
            pad(d.getUTCHours()) +
            pad(d.getUTCMinutes()) +
            pad(d.getUTCSeconds()) + 'Z';
        }

        if (upcoming.length === 0) {
          container.innerHTML = '<div class="text-center py-10 text-gray-400">' +
            '<i class="far fa-calendar-times text-4xl mb-3 block text-gray-300"></i>' +
            '<span class="lang-id text-sm">Belum ada event terdekat saat ini.</span>' +
            '<span class="lang-en text-sm">No upcoming events at the moment.</span>' +
            '</div>';
        } else {
          container.innerHTML = upcoming.map(function (item) {
            var imgSrc = item.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=300&auto=format&fit=crop';
            var escTitleId = _escA(item.title_id || item.title || '').replace(/'/g, "\\'");
            var escTitleEn = _escA(item.title_en || item.title || '').replace(/'/g, "\\'");
            var escTitleClean = _escA(item.title_id || item.title || 'Hey Youth Event').replace(/'/g, "\\'");
            var escLocClean = _escA(item.location || 'Zoom Meeting').replace(/'/g, "\\'");

            var startDt = getEventDateTime(item.date, item.time);
            var endDt = new Date(startDt.getTime() + (2 * 60 * 60 * 1000));
            var startIso = formatCalDate(startDt);
            var endIso = formatCalDate(endDt);

            var rawDesc = (item.description_id || item.description_en || item.description || 'Pengingat Event dari Hey Youth!');
            if (item.speaker) {
              rawDesc += '\n\nPembicara: ' + item.speaker + (item.speakerRole ? ' (' + item.speakerRole + ')' : '');
            }
            if (item.link) {
              rawDesc += '\n\nLink Akses/Zoom: ' + item.link;
            }

            var titleForCal = encodeURIComponent(item.title_id || item.title || 'Hey Youth Event');
            var locForCal = encodeURIComponent(item.location || 'Zoom Meeting');
            var detailsForCal = encodeURIComponent(rawDesc);
            var dateParam = (startIso && endIso) ? '&dates=' + startIso + '/' + endIso : '';

            var gCalUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE' +
              '&text=' + titleForCal +
              '&details=' + detailsForCal +
              '&location=' + locForCal +
              dateParam;

            var outlookUrl = 'https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent' +
              '&subject=' + titleForCal +
              '&body=' + detailsForCal +
              '&location=' + locForCal +
              (startIso ? '&startdt=' + startDt.toISOString() + '&enddt=' + endDt.toISOString() : '');

            var calendarBtnHtml = '<div class="relative inline-block text-left z-20">' +
              '<button type="button" onclick="toggleCalendarMenu(event, this)" class="inline-flex items-center px-3 py-2 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-200 text-xs font-bold rounded-xl transition-all gap-1.5 cursor-pointer">' +
              '<i class="far fa-calendar-plus text-primary"></i>' +
              '<span>Add to Calendar</span>' +
              '<i class="fas fa-chevron-down text-[10px] ml-1"></i>' +
              '</button>' +
              '<div class="calendar-dropdown-menu absolute right-0 bottom-full mb-2 w-52 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-xl hidden z-50 overflow-hidden py-1.5 divide-y divide-gray-100 dark:divide-slate-800">' +
              '<a href="' + gCalUrl + '" target="_blank" class="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors">' +
              '<img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" class="w-4 h-4 flex-shrink-0 object-contain" alt="Google Calendar">' +
              '<span>Google Calendar</span>' +
              '</a>' +
              '<a href="' + outlookUrl + '" target="_blank" class="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors">' +
              '<i class="fab fa-microsoft text-blue-500 text-sm w-4 flex-shrink-0 text-center"></i>' +
              '<span>Outlook Calendar</span>' +
              '</a>' +
              '<button type="button" onclick="downloadICS(\'' + escTitleClean + '\', \'' + escLocClean + '\', \'' + detailsForCal + '\', \'' + startIso + '\', \'' + endIso + '\')" class="w-full flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors text-left cursor-pointer">' +
              '<i class="fab fa-apple text-gray-900 dark:text-white text-sm w-4 flex-shrink-0 text-center"></i>' +
              '<span>Apple / Outlook (.ICS)</span>' +
              '</button>' +
              '</div>' +
              '</div>';

            var linkHtml = '<button onclick="openRegistrationModal(' + item.id + ', \'' + escTitleId + '\', \'' + escTitleEn + '\')" class="inline-flex items-center px-4 py-2 bg-primary hover:bg-primaryDark text-white text-xs font-bold rounded-xl transition-all shadow-md gap-1.5 self-start">' +
              '<span class="lang-id">Daftar Sekarang</span><span class="lang-en">Register Now</span>' +
              '<i class="fas fa-edit text-[10px]"></i>' +
              '</button>';

            return '<div class="bg-surface dark:bg-slate-900 p-5 rounded-2xl border border-gray-150 dark:border-slate-800 shadow-sm flex gap-4 hover:shadow-md transition-all duration-300">' +
              '<img src="' + _escA(imgSrc) + '" class="w-20 h-20 rounded-2xl object-cover flex-shrink-0 border border-gray-100" alt="Event Cover" onerror="this.src=\'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=300&auto=format&fit=crop\'">' +
              '<div class="flex-grow flex flex-col justify-between min-w-0">' +
              '<div>' +
              '<h4 class="font-bold text-heading text-base leading-snug line-clamp-1 mb-1">' +
              '<span class="lang-id">' + _esc(item.title_id || item.title) + '</span>' +
              '<span class="lang-en">' + _esc(item.title_en || item.title) + '</span>' +
              '</h4>' +
              '<div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">' +
              '<span class="flex items-center"><i class="far fa-calendar-alt text-primary" style="margin-right: 8px;"></i>' + _esc(item.date) + '</span>' +
              '<span class="flex items-center" style="margin-left: 12px;"><i class="far fa-clock text-primary" style="margin-right: 8px;"></i>' + _esc(item.time) + '</span>' +
              '</div>' +
              '<div class="text-xs text-gray-500 mt-1 flex items-center"><i class="fas fa-map-marker-alt text-primary" style="margin-right: 8px;"></i>' + _esc(item.location) + '</div>' +
              (item.speaker ?
                '<div class="text-xs text-heading mt-3 flex items-center font-medium bg-gray-50 dark:bg-slate-800/50 p-2 rounded-xl border border-gray-100 dark:border-slate-800/80" style="gap: 12px;">' +
                (item.speakerImage ?
                  '<img src="' + _escA(item.speakerImage) + '" class="w-8 h-8 rounded-full object-cover border border-purple-200" alt="Speaker Photo">' :
                  '<div class="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-950/50 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-xs"><i class="fas fa-user-tie"></i></div>'
                ) +
                '<div class="min-w-0 flex-grow">' +
                '<div class="text-[9px] text-gray-400 uppercase tracking-wider font-bold" style="margin-bottom: 2px;">Pembicara / Speaker</div>' +
                '<div class="truncate text-xs"><strong>' + _esc(item.speaker) + '</strong>' + (item.speakerRole ? ' <span class="text-gray-500 text-[10px]">— ' + _esc(item.speakerRole) + '</span>' : '') + '</div>' +
                '</div>' +
                '</div>' : ''
              ) +
              '</div>' +
              '<div class="mt-4 flex items-center justify-between gap-2 flex-wrap">' +
              '<span class="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-blue-50 text-primary dark:bg-blue-950 dark:text-blue-300 uppercase tracking-wider">Upcoming</span>' +
              '<div class="flex items-center gap-2 flex-wrap">' +
              calendarBtnHtml +
              linkHtml +
              '</div>' +
              '</div>' +
              '</div>' +
              '</div>';
          }).join('');
        }
      }

      /* =========================================
         ========================================= */
      window.openRegistrationModal = function (id, titleId, titleEn) {
        var modal = document.getElementById('event-register-modal');
        var content = document.getElementById('event-register-modal-content');
        var titleEl = document.getElementById('reg-event-title-el');
        var idInput = document.getElementById('reg-event-id');
        var form = document.getElementById('event-registration-form');
        var alertEl = document.getElementById('reg-alert');

        if (!modal || !content) return;

        idInput.value = id;

        var isEn = document.documentElement.lang === 'en' || document.body.classList.contains('lang-en');
        titleEl.textContent = isEn ? titleEn : titleId;

        form.reset();
        if (alertEl) alertEl.classList.add('hidden');

        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
        
        // Force reflow to register display change before running transition
        void content.offsetHeight;
        
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
      };

      window.closeRegistrationModal = function () {
        var modal = document.getElementById('event-register-modal');
        var content = document.getElementById('event-register-modal-content');

        if (!modal || !content) return;

        content.classList.remove('scale-100', 'opacity-100');
        content.classList.add('scale-95', 'opacity-0');
        document.body.style.overflow = '';
        setTimeout(function () {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
        }, 300);
      };

      document.getElementById('event-registration-form').addEventListener('submit', function (e) {
        e.preventDefault();

        var id = document.getElementById('reg-event-id').value;
        var name = document.getElementById('reg-name').value.trim();
        var instansi = document.getElementById('reg-instansi').value.trim();
        var email = document.getElementById('reg-email').value.trim();
        var phone = document.getElementById('reg-phone').value.trim();
        var domisili = document.getElementById('reg-domisili').value.trim();

        var spinner = document.getElementById('reg-btn-spinner');
        var submitBtn = document.getElementById('reg-submit-btn');
        var alertEl = document.getElementById('reg-alert');
        var alertIcon = document.getElementById('reg-alert-icon');
        var alertText = document.getElementById('reg-alert-text');

        if (spinner) spinner.classList.remove('hidden');
        if (submitBtn) submitBtn.disabled = true;

        var regData = {
          event_id: String(id),
          event_name: document.getElementById('reg-event-title-el').textContent,
          name: name,
          instansi: instansi,
          email: email,
          phone: phone,
          domisili: domisili
        };

        var existingRegs = JSON.parse(localStorage.getItem('event_registrations') || '[]');
        var isDuplicate = existingRegs.some(function(r) {
            var sameEvent = (r.eventId === String(id) || r.event_id === String(id) || r.eventName === regData.event_name);
            var sameUser = (r.email === email || r.phone === phone);
            return sameEvent && sameUser;
        });

        if (isDuplicate) {
            if (spinner) spinner.classList.add('hidden');
            if (submitBtn) submitBtn.disabled = false;
            
            if (alertEl) {
                alertEl.className = 'rounded-xl p-4 text-sm font-medium flex items-center gap-3 border bg-red-50 border-red-200 text-red-700 dark:bg-red-950 dark:border-red-900 dark:text-red-300';
                if (alertIcon) alertIcon.className = 'fas fa-exclamation-circle text-lg flex-shrink-0 text-red-600';
                
                var isEn = document.documentElement.lang === 'en' || document.body.classList.contains('lang-en');
                if (alertText) {
                    alertText.textContent = isEn 
                        ? 'Email or phone number is already registered for this event!' 
                        : 'Email atau nomor telepon sudah terdaftar untuk event ini!';
                }
                alertEl.classList.remove('hidden');
            }
            return;
        }

        supabase.from('event_registrations').insert(regData).then(function(result) {
          if (result.error) {
            console.error("Error saving event registration:", result.error.message);
          } else {
            console.log("Event registration saved successfully in Supabase");
          }
        });

        var EMAILJS_CONFIG = {
          serviceId: 'service_j27qkiy', // Service ID Anda dari screenshot
          templateId: 'template_nl0ak7g', // Template ID Anda dari screenshot
          publicKey: 'dDvqjnhiR4dvGUDe2'   // Public Key Anda
        };

        function completeRegistration() {
          if (spinner) spinner.classList.add('hidden');
          if (submitBtn) submitBtn.disabled = false;

          if (alertEl) {
            alertEl.className = 'rounded-2xl p-5 text-sm font-medium flex flex-col gap-3 border bg-green-50 border-green-200 text-green-800 dark:bg-green-950 dark:border-green-900 dark:text-green-200';
            
            var isEn = document.documentElement.lang === 'en' || document.body.classList.contains('lang-en');
            var successHeading = isEn ? 'Registration Submitted Successfully!' : 'Pendaftaran Berhasil Dikirim!';
            var subText = isEn 
              ? 'Thank you for registering. Sync this event to your calendar so you do not miss it:'
              : 'Terima kasih telah mendaftar. Sinkronkan acara ini ke kalender Anda agar tidak ketinggalan:';
            var closeText = isEn ? 'Tutup' : 'Tutup';

            var eventObj = window._activeRegisterEvent || {};
            var titleForCal = encodeURIComponent(eventObj.title_id || eventObj.title || regData.eventName || 'Hey Youth Event');
            var locForCal = encodeURIComponent(eventObj.location || 'Zoom Meeting');
            var descForCal = encodeURIComponent('Pengingat Event Hey Youth: ' + (regData.eventName || '') + '\n\nLink Akses: ' + (eventObj.link || ''));
            var startDt = getEventDateTime(eventObj.date, eventObj.time);
            var endDt = new Date(startDt.getTime() + (2 * 60 * 60 * 1000));
            var startIso = formatCalDate(startDt);
            var endIso = formatCalDate(endDt);
            var dateParam = (startIso && endIso) ? '&dates=' + startIso + '/' + endIso : '';

            var gCalUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + titleForCal + '&details=' + descForCal + '&location=' + locForCal + dateParam;

            alertEl.innerHTML = 
              '<div class="flex items-center gap-2.5 font-bold text-green-700 dark:text-green-300 text-base">' +
                '<i class="fas fa-check-circle text-xl flex-shrink-0"></i>' +
                '<span>' + successHeading + '</span>' +
              '</div>' +
              '<p class="text-xs text-green-700/90 dark:text-green-300/90 leading-relaxed">' + subText + '</p>' +
              '<div class="flex flex-wrap items-center gap-2 pt-2">' +
                '<a href="' + gCalUrl + '" target="_blank" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-200 border border-gray-200 dark:border-slate-700 text-xs font-bold shadow-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">' +
                  '<img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" class="w-3.5 h-3.5" alt="Google Calendar">' +
                  '<span>Google Calendar</span>' +
                '</a>' +
                '<button type="button" onclick="downloadICS(\'' + (regData.eventName || 'Hey Youth Event').replace(/'/g, "\\'") + '\', \'' + (eventObj.location || 'Zoom Meeting').replace(/'/g, "\\'") + '\', \'' + descForCal + '\', \'' + startIso + '\', \'' + endIso + '\')" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-200 border border-gray-200 dark:border-slate-700 text-xs font-bold shadow-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">' +
                  '<i class="far fa-calendar-alt text-primary"></i>' +
                  '<span>Unduh (.ICS)</span>' +
                '</button>' +
                '<button type="button" onclick="closeRegistrationModal()" class="ml-auto px-4 py-2 text-xs font-bold text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">' + closeText + '</button>' +
              '</div>';
            alertEl.classList.remove('hidden');
          }
        }

        if (EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY' && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.templateId !== 'YOUR_TEMPLATE_ID') {
          emailjs.init(EMAILJS_CONFIG.publicKey);
          emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
            eventTitle: regData.eventName,
            userName: regData.name,
            userEmail: regData.email,
            userPhone: regData.phone,
            userInstansi: regData.instansi,
            userDomisili: regData.domisili,
            registeredAt: new Date(regData.registeredAt).toLocaleString('id-ID')
          })
            .then(function () {
              console.log('Notification email sent successfully via EmailJS!');
              completeRegistration();
            })
            .catch(function (err) {
              console.error('EmailJS Error:', err);
              completeRegistration();
            });
        } else {
          setTimeout(completeRegistration, 1000);
        }
      });

      async function initActivities() {
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
        initCertificateSearch();
        renderUpcomingEvents(data.events || DEFAULT_DATA.events || []);

        var s = data.eventsSettings || {
          eventTitle_id: 'Ikuti Event Kami',
          eventTitle_en: 'Join Our Events',
          eventSubtitle_id: 'Daftar untuk mengikuti webinar dan kelas bimbingan yang akan berlangsung.',
          eventSubtitle_en: 'Register to join our upcoming webinars and mentorship sessions.',
          certTitle_id: 'Unduh E-Sertifikat Anda',
          certTitle_en: 'Download Your E-Certificate',
          certSubtitle_id: 'Masukkan email yang Anda gunakan saat mendaftar acara untuk mengklaim sertifikat partisipasi Anda.',
          certSubtitle_en: 'Enter the email address you used during event registration to claim your certificate.'
        };
        var et = document.getElementById('event-title-el');
        var es = document.getElementById('event-subtitle-el');
        var ct = document.getElementById('cert-title-el');
        var cs = document.getElementById('cert-subtitle-el');
        if (et) et.innerHTML = '<span class="lang-id">' + _esc(s.eventTitle_id) + '</span><span class="lang-en">' + _esc(s.eventTitle_en) + '</span>';
        if (es) es.innerHTML = '<span class="lang-id">' + _esc(s.eventSubtitle_id) + '</span><span class="lang-en">' + _esc(s.eventSubtitle_en) + '</span>';
        if (ct) ct.innerHTML = '<span class="lang-id">' + _esc(s.certTitle_id) + '</span><span class="lang-en">' + _esc(s.certTitle_en) + '</span>';
        if (cs) cs.innerHTML = '<span class="lang-id">' + _esc(s.certSubtitle_id) + '</span><span class="lang-en">' + _esc(s.certSubtitle_en) + '</span>';

        var filterButtons = document.querySelectorAll('#activity-filters .filter-btn');
        filterButtons.forEach(function (btn) {
          btn.addEventListener('click', function (e) {
            activeCategory = e.currentTarget.getAttribute('data-category') || 'all';
            syncInputsFromState();
            syncUrlParams();
            filterAndRenderActivities();
          });
        });

        var searchInput = document.getElementById('activity-search');
        if (searchInput) {
          searchInput.addEventListener('input', function (e) {
            debounceActivitySearch(e.target.value.trim());
          });
        }

        var clearBtn = document.getElementById('activity-search-clear');
        if (clearBtn) {
          clearBtn.addEventListener('click', function () {
            if (searchInput) {
              searchInput.value = '';
              searchInput.focus();
            }
            activitySearchQuery = '';
            syncUrlParams();
            filterAndRenderActivities();
          });
        }

        var resetBtn = document.getElementById('btn-reset-act-filters');
        if (resetBtn) {
          resetBtn.addEventListener('click', function () {
            window.resetActivitiesPageFilters();
          });
        }

        var podcastSearchInput = document.getElementById('podcast-search');
        if (podcastSearchInput) {
          podcastSearchInput.addEventListener('input', function (e) {
            debouncePodcastSearch(e.target.value.trim());
          });
        }

        var podcastClearBtn = document.getElementById('podcast-search-clear');
        if (podcastClearBtn) {
          podcastClearBtn.addEventListener('click', function () {
            if (podcastSearchInput) {
              podcastSearchInput.value = '';
              podcastSearchInput.focus();
            }
            podcastSearchQuery = '';
            syncUrlParams();
            filterAndRenderPodcasts();
          });
        }

        // Browser navigation popstate
        window.addEventListener('popstate', function () {
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
        document.addEventListener('DOMContentLoaded', initActivities);
      } else {
        initActivities();
      }

    })();