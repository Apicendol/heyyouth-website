/* =============================================
   HEY YOUTH! — Global Components (Navbar & Footer)
   ============================================= */

(function () {
  'use strict';

  var navbarTemplate = `
  <nav id="navbar" class="fixed w-full z-[500] transition-all duration-300 bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-sm dark-glass">
    <div class="w-full bg-primary text-white text-xs py-1.5 px-4 text-center hidden md:block">
      <span class="lang-id">Pengumuman: Pendaftaran Relawan Batch 2026 Segera Dibuka! Persiapkan dirimu! 🚀</span>
      <span class="lang-en">Announcement: Volunteer Batch 2026 Registration Opens Soon! Get ready! 🚀</span>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <a href="index.html" class="flex-shrink-0 flex items-center gap-2 group">
          <img src="assets/img/NEW HEY YOUTH Sep 2025.webp" alt="Hey Youth Logo" class="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300">
        </a>
        <div class="hidden md:flex space-x-8 items-center">
          <a href="index.html" id="nav-link-home" class="nav-link text-body hover:text-primary transition-colors">Home</a>
          <a href="about us.html" id="nav-link-about" class="nav-link text-body hover:text-primary transition-colors">About us</a>
          <a href="activities.html" id="nav-link-activities" class="nav-link text-body hover:text-primary transition-colors">Activities</a>
          <a href="mentoring.html" id="nav-link-teacher-class" class="nav-link text-body hover:text-primary transition-colors">Teacher Class</a>
          <a href="partner.html" id="nav-link-partners" class="nav-link text-body hover:text-primary transition-colors">Partners</a>
          <a href="donation.html" id="nav-link-donation" class="nav-link text-body hover:text-primary transition-colors">Donation</a>
        </div>
        <div class="hidden md:flex items-center gap-2">
          <!-- Command Palette Trigger Button (Ctrl+K) -->
          <button type="button" onclick="window.openCommandPalette && window.openCommandPalette()" class="cmd-palette-btn p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all focus:outline-none dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 w-9 h-9 flex items-center justify-center cursor-pointer shadow-sm" aria-label="Search or Command Palette (Ctrl+K)" title="Pencarian Cepat (Ctrl+K)">
            <i class="fas fa-search text-xs"></i>
          </button>
          <a href="CMS/Login.html" class="text-body hover:text-primary px-3 py-2.5 rounded-lg font-medium transition-colors text-sm flex items-center gap-1.5">
            <i class="fas fa-lock text-xs"></i> Dashboard
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXvkYsaiPvhNHGPcUGUQ1tFoWGv5XxLuAQ32B_om95DRAEPg/viewform" target="_blank" class="bg-primary hover:bg-primaryDark text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Join Us!
          </a>
          <button type="button" class="theme-toggle-btn ml-1 p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all focus:outline-none dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-yellow-400 w-9 h-9 flex items-center justify-center cursor-pointer" aria-label="Toggle Theme">
            <i class="fas fa-sun theme-icon-sun text-sm hidden"></i>
            <i class="fas fa-moon theme-icon-moon text-sm"></i>
          </button>
          <div class="btn-group lang-toggle-group ml-1 bg-gray-200 rounded-full p-1 relative flex items-center w-[84px] h-9 dark:bg-slate-800" role="group" aria-label="Language Switch">
            <div class="absolute left-1 bg-white h-7 w-9 rounded-full shadow-sm transition-transform duration-300 lang-slider-bg dark:bg-slate-900" style="transform: translateX(0);"></div>
            <button type="button" class="btn btn-secondary flex-1 text-xs font-bold text-gray-800 relative z-10 lang-btn dark:text-slate-200 cursor-pointer" data-lang="id">ID</button>
            <button type="button" class="btn btn-secondary flex-1 text-xs font-bold text-gray-800 relative z-10 lang-btn dark:text-slate-200 cursor-pointer" data-lang="en">EN</button>
          </div>
        </div>
        <div class="md:hidden flex items-center gap-1">
          <button type="button" onclick="window.openCommandPalette && window.openCommandPalette()" class="cmd-palette-btn p-2 rounded-full text-heading hover:text-primary dark:text-slate-200 focus:outline-none cursor-pointer" aria-label="Pencarian Cepat">
            <i class="fas fa-search text-base"></i>
          </button>
          <button id="mobile-menu-btn" class="text-heading hover:text-primary focus:outline-none p-2 cursor-pointer" aria-label="Toggle menu">
            <svg id="icon-menu" class="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg id="icon-close" class="h-6 w-6 hidden transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl transform transition-all duration-300 origin-top dark:bg-slate-900 dark:border-slate-800">
      <div class="px-4 pt-4 pb-6 space-y-2">
        <a href="index.html" id="mobile-nav-link-home" class="block px-4 py-3 rounded-xl text-base font-medium text-body hover:text-primary hover:bg-gray-50 dark:hover:bg-slate-800 dark:text-slate-200">Home</a>
        <a href="about us.html" id="mobile-nav-link-about" class="block px-4 py-3 rounded-xl text-base font-medium text-body hover:text-primary hover:bg-gray-50 dark:hover:bg-slate-800 dark:text-slate-200">About us</a>
        <a href="activities.html" id="mobile-nav-link-activities" class="block px-4 py-3 rounded-xl text-base font-medium text-body hover:text-primary hover:bg-gray-50 dark:hover:bg-slate-800 dark:text-slate-200">Activities</a>
        <a href="mentoring.html" id="mobile-nav-link-teacher-class" class="block px-4 py-3 rounded-xl text-base font-medium text-body hover:text-primary hover:bg-gray-50 dark:hover:bg-slate-800 dark:text-slate-200">Teacher Class</a>
        <a href="partner.html" id="mobile-nav-link-partners" class="block px-4 py-3 rounded-xl text-base font-medium text-body hover:text-primary hover:bg-gray-50 dark:hover:bg-slate-800 dark:text-slate-200">Partners</a>
        <a href="donation.html" id="mobile-nav-link-donation" class="block px-4 py-3 rounded-xl text-base font-medium text-body hover:text-primary hover:bg-gray-50 dark:hover:bg-slate-800 dark:text-slate-200">Donation</a>
        <div class="pt-4 border-t border-gray-100 dark:border-slate-800 mt-4 space-y-2">
          <button type="button" onclick="window.openCommandPalette && window.openCommandPalette()" class="w-full py-2.5 px-4 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-200 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer">
            <i class="fas fa-search text-xs"></i> <span>Pencarian Cepat / Command (Ctrl+K)</span>
          </button>
          <a href="CMS/Login.html" class="block w-full text-center border-2 border-gray-200 dark:border-slate-700 text-heading dark:text-slate-200 font-semibold px-4 py-3 rounded-xl hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
            <i class="fas fa-lock text-sm"></i> Dashboard
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXvkYsaiPvhNHGPcUGUQ1tFoWGv5XxLuAQ32B_om95DRAEPg/viewform" target="_blank" class="block w-full text-center bg-accent text-white px-4 py-3 rounded-xl font-bold hover:bg-yellow-600 transition-colors shadow-md">Join Us Now!</a>
          <div class="flex justify-center mt-4 pt-2 gap-3 items-center">
            <div class="btn-group lang-toggle-group bg-gray-200 rounded-full p-1 relative flex items-center w-[84px] h-9 dark:bg-slate-800" role="group" aria-label="Language Switch">
              <div class="absolute left-1 bg-white h-7 w-9 rounded-full shadow-sm transition-transform duration-300 lang-slider-bg dark:bg-slate-900" style="transform: translateX(0);"></div>
              <button type="button" class="btn btn-secondary flex-1 text-xs font-bold text-gray-800 relative z-10 lang-btn dark:text-slate-200" data-lang="id">ID</button>
              <button type="button" class="btn btn-secondary flex-1 text-xs font-bold text-gray-800 relative z-10 lang-btn dark:text-slate-200" data-lang="en">EN</button>
            </div>
            <button type="button" class="theme-toggle-btn p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all focus:outline-none dark:bg-slate-800 dark:text-yellow-400 w-9 h-9 flex items-center justify-center cursor-pointer" aria-label="Toggle Theme">
              <i class="fas fa-sun theme-icon-sun text-sm hidden"></i>
              <i class="fas fa-moon theme-icon-moon text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  `;

  var footerTemplate = `
  <footer id="contact" class="bg-heading text-gray-400 py-12 border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8 mb-8 items-start">
        <div class="flex flex-col justify-start">
          <span class="text-2xl font-bold text-white block mb-4 leading-none h-6 flex items-center">Hey Youth!</span>
          <p class="mt-4 text-sm leading-relaxed text-gray-400">
            Helping youths grow through webinar, mentoring & volunteering<br>
            Est. 2018 | 5K+ learners | 📩 Join our team to make a real impact 🌏
          </p>
        </div>
        <div class="flex flex-col justify-start">
          <h4 class="text-white font-bold mb-4 uppercase text-xs tracking-wider h-6 flex items-center">Contact</h4>
          <ul class="space-y-2 text-sm mt-4">
            <li class="flex items-center gap-2"><i class="fas fa-envelope text-accent"></i> hey.youth.id@gmail.com</li>
            <li class="flex items-center gap-2"><i class="fas fa-map-marker-alt text-accent"></i> Jakarta, Indonesia</li>
          </ul>
        </div>
        <div class="flex flex-col justify-start">
          <h4 class="text-white font-bold mb-4 uppercase text-xs tracking-wider h-6 flex items-center">Follow Us</h4>
          <p class="text-xs mb-3 text-gray-500 mt-4">Follow us to keep you updated with our latest activities</p>
          <div class="flex space-x-3">
            <a href="https://www.instagram.com/heyyouth_id/" class="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/heyyouth-official/" class="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://www.youtube.com/@HeyYouthIndonesia" class="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><i class="fab fa-youtube"></i></a>
            <a href="https://www.tiktok.com/@heyyouth.id" class="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><i class="fab fa-tiktok"></i></a>
            <a href="https://twitter.com/heyyouth_id" class="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><i class="fa-brands fa-x-twitter"></i></a>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-800 pt-8 text-center text-xs">&copy; Hey Youth. Made with ❤ for Golden Future. All right reserved.</div>
    </div>
  </footer>
  `;

  function inject() {
    var navbarContainer = document.getElementById('global-navbar');
    var footerContainer = document.getElementById('global-footer');

    var pathname = window.location.pathname.toLowerCase();
    var isSubFolder = pathname.includes('/pages/') || pathname.includes('/cms/');
    var basePath = isSubFolder ? '../' : '';

    var processedNavbar = navbarTemplate
      .replace(/href="index\.html"/g, 'href="' + basePath + 'index.html"')
      .replace(/href="about us\.html"/g, 'href="' + basePath + 'pages/about-us.html"')
      .replace(/href="activities\.html"/g, 'href="' + basePath + 'pages/activities.html"')
      .replace(/href="mentoring\.html"/g, 'href="' + basePath + 'pages/mentoring.html"')
      .replace(/href="partner\.html"/g, 'href="' + basePath + 'pages/partner.html"')
      .replace(/href="donation\.html"/g, 'href="' + basePath + 'pages/donation.html"')
      .replace(/href="CMS\/Login\.html"/g, 'href="' + basePath + 'CMS/Login.html"')
      .replace(/src="assets\//g, 'src="' + basePath + 'assets/');

    var processedFooter = footerTemplate
      .replace(/href="index\.html"/g, 'href="' + basePath + 'index.html"')
      .replace(/src="assets\//g, 'src="' + basePath + 'assets/');

    if (navbarContainer) {
      navbarContainer.outerHTML = processedNavbar;
    }
    if (footerContainer) {
      footerContainer.outerHTML = processedFooter;
    }

    // Inject Global Loader
    if (!document.getElementById('global-loader')) {
      var loader = document.createElement('div');
      loader.id = 'global-loader';
      loader.style.cssText = 'position:fixed;inset:0;z-index:999999;background-color:#ffffff;display:flex;flex-direction:column;justify-content:center;align-items:center;transition:opacity 0.5s ease;';
      loader.innerHTML = '<img src="' + basePath + 'assets/img/NEW HEY YOUTH Sep 2025.webp" alt="Loading..." style="width:80px;height:auto;animation:heartbeat 1.5s infinite ease-in-out;"><div style="margin-top:20px;width:40px;height:40px;border:3px solid rgba(29,78,216,0.2);border-top-color:#1D4ED8;border-radius:50%;animation:spin 1s linear infinite;"></div>';
      document.body.appendChild(loader);
    }

    var filename = decodeURIComponent(pathname.split('/').pop().toLowerCase());

    var activeId = '';
    if (filename === '' || filename === 'index.html') {
      activeId = 'home';
    } else if (filename === 'about-us.html' || filename === 'about us.html') {
      activeId = 'about';
    } else if (filename === 'activities.html' || filename === 'activity-detail.html') {
      activeId = 'activities';
    } else if (filename === 'partner.html') {
      activeId = 'partners';
    } else if (filename === 'donation.html') {
      activeId = 'donation';
    } else if (filename === 'mentoring.html') {
      activeId = 'teacher-class';
    }

    if (activeId) {
      var desktopEl = document.getElementById('nav-link-' + activeId);
      if (desktopEl) {
        desktopEl.classList.remove('text-body');
        desktopEl.classList.add('text-primary', 'font-bold');
      }
      var mobileEl = document.getElementById('mobile-nav-link-' + activeId);
      if (mobileEl) {
        mobileEl.classList.remove('text-body', 'hover:bg-gray-50');
        mobileEl.classList.add('text-primary', 'font-bold', 'bg-blue-50');
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();

/* =============================================
   SPOTIFY MODAL PLAYER (GLOBAL)
   ============================================= */
window.playPodcast = function(event, spotifyId) {
    if (event) event.preventDefault();
    
    var modal = document.getElementById('spotify-player-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'spotify-player-modal';
        modal.className = 'fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm';
        modal.style.zIndex = '99999';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        modal.style.backdropFilter = 'blur(4px)';
        modal.style.webkitBackdropFilter = 'blur(4px)';
        modal.innerHTML = 
            '<div class="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-800 transform scale-100 transition-all duration-300">' +
                '<div class="p-4 border-b border-gray-150 dark:border-slate-800 flex justify-between items-center bg-gray-50 dark:bg-slate-950">' +
                    '<span class="text-xs font-bold text-green-500 uppercase tracking-widest flex items-center gap-1.5"><i class="fab fa-spotify text-base"></i> Spotify Player</span>' +
                    '<button onclick="closeSpotifyPlayer()" class="text-gray-400 hover:text-red-500 transition-colors p-1.5 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full w-8 h-8 flex items-center justify-center"><i class="fas fa-times"></i></button>' +
                '</div>' +
                '<div class="p-6 bg-white dark:bg-slate-900">' +
                    '<div id="spotify-iframe-container" class="w-full h-[152px] bg-gray-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-gray-400 text-xs font-medium">Memuat player...</div>' +
                '</div>' +
            '</div>';
        document.body.appendChild(modal);
    }
    
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    
    var iframeContainer = document.getElementById('spotify-iframe-container');
    if (iframeContainer) {
        iframeContainer.innerHTML = '<iframe src="https://open.spotify.com/embed/episode/' + spotifyId + '?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" class="rounded-xl border-none"></iframe>';
    }
};

window.closeSpotifyPlayer = function() {
    var modal = document.getElementById('spotify-player-modal');
    if (modal) {
        modal.classList.add('hidden');
        var iframeContainer = document.getElementById('spotify-iframe-container');
        if (iframeContainer) iframeContainer.innerHTML = '';
    }
    document.body.classList.remove('overflow-hidden');
};

/* =============================================
   FEATURE 1: QUICK COMMAND PALETTE / GLOBAL SEARCH (Ctrl+K)
   ============================================= */
(function() {
    'use strict';

    var pathname = window.location.pathname.toLowerCase();
    var isSubFolder = pathname.includes('/pages/') || pathname.includes('/cms/');
    var basePath = isSubFolder ? '../' : '';

    var DEFAULT_COMMAND_ITEMS = [
        // Quick Actions
        { id: 'act-theme', type: 'action', title: 'Ganti Tema (Gelap / Terang)', title_en: 'Toggle Dark / Light Theme', icon: 'fas fa-moon', category: 'Aksi Cepat', action: function() {
            var themeBtn = document.querySelector('.theme-toggle-btn');
            if (themeBtn) themeBtn.click();
        }},
        { id: 'act-lang', type: 'action', title: 'Ganti Bahasa (Indonesia / English)', title_en: 'Switch Language (ID / EN)', icon: 'fas fa-language', category: 'Aksi Cepat', action: function() {
            var currentLang = localStorage.getItem('heyyouth_lang') || 'en';
            var nextLang = currentLang === 'id' ? 'en' : 'id';
            var btn = document.querySelector('.lang-btn[data-lang="' + nextLang + '"]');
            if (btn) btn.click();
        }},
        { id: 'act-cert', type: 'link', title: 'Unduh E-Sertifikat Event', title_en: 'Claim E-Certificate', icon: 'fas fa-certificate', category: 'Aksi Cepat', url: basePath + 'pages/activities.html#download-certificate' },
        { id: 'act-join', type: 'link', title: 'Pendaftaran Relawan Hey Youth', title_en: 'Join Hey Youth as Volunteer', icon: 'fas fa-hand-holding-heart', category: 'Aksi Cepat', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfXvkYsaiPvhNHGPcUGUQ1tFoWGv5XxLuAQ32B_om95DRAEPg/viewform', external: true },
        
        // Navigation Pages
        { id: 'nav-home', type: 'link', title: 'Beranda (Home)', title_en: 'Home Page', icon: 'fas fa-home', category: 'Halaman', url: basePath + 'index.html' },
        { id: 'nav-about', type: 'link', title: 'Tentang Kami & Tim (About Us)', title_en: 'About Us & Team', icon: 'fas fa-users', category: 'Halaman', url: basePath + 'pages/about-us.html' },
        { id: 'nav-activities', type: 'link', title: 'Kegiatan, Webinar & Podcast Terbaru', title_en: 'Latest Activities & Podcasts', icon: 'fas fa-bolt', category: 'Halaman', url: basePath + 'pages/activities.html' },
        { id: 'nav-gallery', type: 'link', title: 'Galeri Semua Dokumentasi Kegiatan', title_en: 'Full Activities Gallery', icon: 'fas fa-images', category: 'Halaman', url: basePath + 'pages/gallery.html' },
        { id: 'nav-mentoring', type: 'link', title: 'Teacher Class / Mentoring', title_en: 'Teacher Class / Mentorship', icon: 'fas fa-chalkboard-teacher', category: 'Halaman', url: basePath + 'pages/mentoring.html' },
        { id: 'nav-partner', type: 'link', title: 'Kemitraan & Kolaborasi (Partners)', title_en: 'Partnership & Collaboration', icon: 'fas fa-handshake', category: 'Halaman', url: basePath + 'pages/partner.html' },
        { id: 'nav-donation', type: 'link', title: 'Donasi Program Pendidikan (Donation)', title_en: 'Donation Program', icon: 'fas fa-donate', category: 'Halaman', url: basePath + 'pages/donation.html' },
        { id: 'nav-cms', type: 'link', title: 'CMS Admin Dashboard', title_en: 'CMS Admin Dashboard', icon: 'fas fa-lock', category: 'Admin', url: basePath + 'CMS/Login.html' }
    ];

    function getDynamicItems() {
        var items = [];
        try {
            var raw = localStorage.getItem('hey_youth_cms');
            if (raw) {
                var parsed = JSON.parse(raw);
                if (parsed.activityCards && Array.isArray(parsed.activityCards)) {
                    parsed.activityCards.forEach(function(card) {
                        items.push({
                            id: 'act-card-' + card.id,
                            type: 'link',
                            title: card.title || card.title_id || 'Kegiatan Hey Youth',
                            title_en: card.title_en || card.title || 'Hey Youth Activity',
                            icon: 'fas fa-file-alt',
                            category: 'Kegiatan & Artikel',
                            url: basePath + 'pages/activity-detail.html?id=' + card.id
                        });
                    });
                }
                if (parsed.podcasts && Array.isArray(parsed.podcasts)) {
                    parsed.podcasts.forEach(function(pod) {
                        items.push({
                            id: 'pod-' + pod.id,
                            type: 'link',
                            title: (pod.episode || '') + ': ' + (pod.title || ''),
                            title_en: (pod.episode || '') + ': ' + (pod.title || ''),
                            icon: 'fas fa-podcast',
                            category: 'Podcast',
                            url: basePath + 'pages/gallery.html#podcasts'
                        });
                    });
                }
            }
        } catch(e) {}

        if (items.length === 0) {
            items.push(
                { id: 'act-sample-1', type: 'link', title: 'Dream Big, Learn Bigger at SD Yos Sudarso', title_en: 'Dream Big, Learn Bigger at Yos Sudarso', icon: 'fas fa-file-alt', category: 'Kegiatan & Artikel', url: basePath + 'pages/activity-detail.html?id=301' },
                { id: 'act-sample-2', type: 'link', title: 'Instilling Education, Igniting Dreams di TBM Kolong', title_en: 'Visit to TBM Kolong', icon: 'fas fa-file-alt', category: 'Kegiatan & Artikel', url: basePath + 'pages/activity-detail.html?id=302' },
                { id: 'pod-sample-1', type: 'link', title: 'Episode 1: The Power of Self-Affirmation', title_en: 'Episode 1: The Power of Self-Affirmation', icon: 'fas fa-podcast', category: 'Podcast', url: basePath + 'pages/gallery.html#podcasts' },
                { id: 'pod-sample-2', type: 'link', title: 'Episode 2: Suicide Is Not The Answer', title_en: 'Episode 2: Suicide Is Not The Answer', icon: 'fas fa-podcast', category: 'Podcast', url: basePath + 'pages/gallery.html#podcasts' }
            );
        }
        return items;
    }

    var selectedIndex = 0;
    var currentFilteredItems = [];

    function renderCommandPalette() {
        var modal = document.getElementById('global-command-palette');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'global-command-palette';
            modal.className = 'fixed inset-0 z-[999999] hidden flex items-start justify-center pt-14 sm:pt-20 px-4 bg-black/60 backdrop-blur-sm transition-opacity duration-200';
            modal.setAttribute('role', 'dialog');
            modal.setAttribute('aria-modal', 'true');
            modal.innerHTML = 
                '<div class="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden border border-gray-150 dark:border-slate-800 flex flex-col max-h-[82vh] animate-fade-in-up" onclick="event.stopPropagation()">' +
                    '<div class="p-3.5 sm:p-4 border-b border-gray-100 dark:border-slate-800 flex items-center gap-3 bg-gray-50/50 dark:bg-slate-950/50">' +
                        '<i class="fas fa-search text-gray-400 text-sm pl-2"></i>' +
                        '<input type="text" id="cmd-palette-input" placeholder="Cari halaman, artikel, podcast, atau aksi cepat..." class="w-full bg-transparent text-sm text-heading dark:text-white placeholder-gray-400 focus:outline-none" autocomplete="off">' +
                        '<kbd class="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono bg-gray-200 dark:bg-slate-800 text-gray-500 dark:text-gray-400 rounded-md border border-gray-300 dark:border-slate-700">ESC</kbd>' +
                        '<button type="button" onclick="window.closeCommandPalette()" class="text-gray-400 hover:text-red-500 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer"><i class="fas fa-times text-xs"></i></button>' +
                    '</div>' +
                    '<div id="cmd-palette-results" class="p-2.5 overflow-y-auto space-y-1 flex-1 divide-y divide-gray-50 dark:divide-slate-850" style="max-height: 55vh;"></div>' +
                    '<div class="p-3 bg-gray-50 dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-gray-400">' +
                        '<div class="flex items-center gap-3">' +
                            '<span><kbd class="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded border border-gray-200 dark:border-slate-700 text-[10px]">↑</kbd> <kbd class="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded border border-gray-200 dark:border-slate-700 text-[10px]">↓</kbd> Navigasi</span>' +
                            '<span><kbd class="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded border border-gray-200 dark:border-slate-700 text-[10px]">↵</kbd> Pilih</span>' +
                        '</div>' +
                        '<span class="font-bold text-primary dark:text-blue-400 flex items-center gap-1"><i class="fas fa-bolt text-[10px]"></i> Quick Search</span>' +
                    '</div>' +
                '</div>';

            modal.addEventListener('click', function(e) {
                if (e.target === modal) window.closeCommandPalette();
            });

            document.body.appendChild(modal);

            var input = document.getElementById('cmd-palette-input');
            if (input) {
                input.addEventListener('input', function(e) {
                    filterAndRenderResults(e.target.value.trim());
                });
                input.addEventListener('keydown', handleKeyNavigation);
            }
        }
    }

    function handleKeyNavigation(e) {
        var results = currentFilteredItems;
        if (!results.length) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = (selectedIndex + 1) % results.length;
            updateSelection();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = (selectedIndex - 1 + results.length) % results.length;
            updateSelection();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (results[selectedIndex]) {
                executeItem(results[selectedIndex]);
            }
        }
    }

    function updateSelection() {
        var container = document.getElementById('cmd-palette-results');
        if (!container) return;
        var items = container.querySelectorAll('.cmd-item');
        items.forEach(function(el, idx) {
            if (idx === selectedIndex) {
                el.classList.add('bg-blue-50', 'dark:bg-blue-950/60', 'text-primary', 'dark:text-blue-400');
                el.classList.remove('text-heading', 'dark:text-slate-200');
                el.scrollIntoView({ block: 'nearest' });
            } else {
                el.classList.remove('bg-blue-50', 'dark:bg-blue-950/60', 'text-primary', 'dark:text-blue-400');
                el.classList.add('text-heading', 'dark:text-slate-200');
            }
        });
    }

    function executeItem(item) {
        window.closeCommandPalette();
        if (item.type === 'action' && typeof item.action === 'function') {
            item.action();
        } else if (item.url) {
            if (item.external) {
                window.open(item.url, '_blank');
            } else {
                window.location.href = item.url;
            }
        }
    }

    function filterAndRenderResults(query) {
        var container = document.getElementById('cmd-palette-results');
        if (!container) return;

        var all = DEFAULT_COMMAND_ITEMS.concat(getDynamicItems());
        var q = (query || '').toLowerCase();

        var filtered = all.filter(function(item) {
            if (!q) return true;
            return (item.title && item.title.toLowerCase().includes(q)) ||
                   (item.title_en && item.title_en.toLowerCase().includes(q)) ||
                   (item.category && item.category.toLowerCase().includes(q));
        });

        currentFilteredItems = filtered;
        selectedIndex = 0;

        if (filtered.length === 0) {
            container.innerHTML = '<div class="py-8 text-center text-gray-400 text-xs">' +
                '<i class="fas fa-search-minus text-2xl mb-2 block opacity-40"></i>' +
                'Tidak ada hasil untuk "' + query.replace(/</g, '&lt;') + '". Coba kata kunci lain.' +
            '</div>';
            return;
        }

        var currentLang = localStorage.getItem('heyyouth_lang') || 'en';
        var html = '';
        var currentCategory = '';

        filtered.forEach(function(item, idx) {
            if (item.category !== currentCategory) {
                currentCategory = item.category;
                html += '<div class="pt-2 pb-1 px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">' + currentCategory + '</div>';
            }
            var title = (currentLang === 'id' ? (item.title || item.title_en) : (item.title_en || item.title));
            var activeClass = idx === 0 ? 'bg-blue-50 dark:bg-blue-950/60 text-primary dark:text-blue-400' : 'text-heading dark:text-slate-200';

            html += '<div class="cmd-item px-3 py-2.5 rounded-xl cursor-pointer transition-colors flex items-center justify-between text-xs hover:bg-gray-100 dark:hover:bg-slate-800 ' + activeClass + '" data-idx="' + idx + '">' +
                '<div class="flex items-center gap-3 min-w-0">' +
                    '<div class="w-7 h-7 rounded-lg bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-xs text-primary dark:text-blue-400 flex-shrink-0">' +
                        '<i class="' + item.icon + '"></i>' +
                    '</div>' +
                    '<span class="font-medium truncate">' + title + '</span>' +
                '</div>' +
                '<i class="fas fa-chevron-right text-[10px] text-gray-300 dark:text-slate-600"></i>' +
            '</div>';
        });

        container.innerHTML = html;

        // Add click events to items
        container.querySelectorAll('.cmd-item').forEach(function(el) {
            el.addEventListener('click', function() {
                var idx = parseInt(el.getAttribute('data-idx'));
                if (!isNaN(idx) && currentFilteredItems[idx]) {
                    executeItem(currentFilteredItems[idx]);
                }
            });
        });
    }

    window.openCommandPalette = function() {
        renderCommandPalette();
        var modal = document.getElementById('global-command-palette');
        var input = document.getElementById('cmd-palette-input');
        if (modal) {
            modal.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
            if (input) {
                input.value = '';
                filterAndRenderResults('');
                setTimeout(function() { input.focus(); }, 50);
            }
        }
    };

    window.closeCommandPalette = function() {
        var modal = document.getElementById('global-command-palette');
        if (modal) {
            modal.classList.add('hidden');
        }
        document.body.classList.remove('overflow-hidden');
    };

    window.toggleCommandPalette = function() {
        var modal = document.getElementById('global-command-palette');
        if (modal && !modal.classList.contains('hidden')) {
            window.closeCommandPalette();
        } else {
            window.openCommandPalette();
        }
    };

    // Keyboard shortcut: Ctrl+K or Cmd+K
    window.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
            e.preventDefault();
            window.toggleCommandPalette();
        } else if (e.key === 'Escape') {
            window.closeCommandPalette();
        }
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderCommandPalette);
    } else {
        renderCommandPalette();
    }
})();

