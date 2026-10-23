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
          <a href="pages/register.html" class="bg-primary hover:bg-primaryDark text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-primary">
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
          <a href="pages/register.html" class="block w-full text-center bg-accent text-white px-4 py-3 rounded-xl font-bold hover:bg-yellow-600 transition-colors shadow-md">Join Us Now!</a>
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
    var homeUrl = isSubFolder ? '../' : './';

    var processedNavbar = navbarTemplate
      .replace(/href="index\.html"/g, 'href="' + homeUrl + '"')
      .replace(/href="about us\.html"/g, 'href="' + basePath + 'pages/about-us.html"')
      .replace(/href="activities\.html"/g, 'href="' + basePath + 'pages/activities.html"')
      .replace(/href="mentoring\.html"/g, 'href="' + basePath + 'pages/mentoring.html"')
      .replace(/href="partner\.html"/g, 'href="' + basePath + 'pages/partner.html"')
      .replace(/href="donation\.html"/g, 'href="' + basePath + 'pages/donation.html"')
      .replace(/href="pages\/register\.html"/g, 'href="' + (isSubFolder ? 'register.html' : 'pages/register.html') + '"')
      .replace(/href="CMS\/Login\.html"/g, 'href="' + basePath + 'CMS/Login.html"')
      .replace(/src="assets\//g, 'src="' + basePath + 'assets/');

    var processedFooter = footerTemplate
      .replace(/href="index\.html"/g, 'href="' + homeUrl + '"')
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
        { id: 'act-theme', type: 'action', title: 'Ganti Tema (Gelap / Terang)', title_en: 'Toggle Dark / Light Theme', icon: 'fas fa-moon', category: 'Aksi Cepat', category_en: 'Quick Actions', action: function() {
            var themeBtn = document.querySelector('.theme-toggle-btn');
            if (themeBtn) themeBtn.click();
        }},
        { id: 'act-lang', type: 'action', title: 'Ganti Bahasa (Indonesia / English)', title_en: 'Switch Language (ID / EN)', icon: 'fas fa-language', category: 'Aksi Cepat', category_en: 'Quick Actions', action: function() {
            var currentLang = localStorage.getItem('heyyouth_lang') || 'en';
            var nextLang = currentLang === 'id' ? 'en' : 'id';
            var btn = document.querySelector('.lang-btn[data-lang="' + nextLang + '"]');
            if (btn) btn.click();
        }},
        { id: 'act-cert', type: 'link', title: 'Unduh E-Sertifikat Event & Webinar', title_en: 'Claim E-Certificate for Event / Webinar', icon: 'fas fa-certificate', category: 'Aksi Cepat', category_en: 'Quick Actions', url: basePath + 'pages/activities.html#download-certificate' },
        { id: 'act-wa', type: 'link', title: 'Hubungi WhatsApp Admin Hey Youth (Official)', title_en: 'Chat Hey Youth Admin on WhatsApp', icon: 'fab fa-whatsapp', category: 'Aksi Cepat', category_en: 'Quick Actions', url: 'https://wa.me/6281283626296?text=Halo%20Admin%20Hey%20Youth%2C%20saya%20ingin%20bertanya%20informasi...', external: true },
        { id: 'act-ig', type: 'link', title: 'Kunjungi Instagram Resmi (@heyyouth_id)', title_en: 'Visit Official Instagram (@heyyouth_id)', icon: 'fab fa-instagram', category: 'Aksi Cepat', category_en: 'Quick Actions', url: 'https://www.instagram.com/heyyouth_id/', external: true },

        // Volunteer Divisions (10 Divisions)
        { id: 'div-teacher', type: 'link', title: 'Divisi Relawan: Teacher (Pengajar Kolong & Pelosok)', title_en: 'Volunteer Division: Teacher (Educator)', icon: 'fas fa-chalkboard-teacher', category: 'Divisi Relawan', category_en: 'Divisions', url: (isSubFolder ? 'register.html' : 'pages/register.html') + '#divisions-grid' },
        { id: 'div-comm', type: 'link', title: 'Divisi Relawan: Community Coordinator', title_en: 'Volunteer Division: Community Coordinator', icon: 'fas fa-users-cog', category: 'Divisi Relawan', category_en: 'Divisions', url: (isSubFolder ? 'register.html' : 'pages/register.html') + '#divisions-grid' },
        { id: 'div-writer', type: 'link', title: 'Divisi Relawan: Content Writer', title_en: 'Volunteer Division: Content Writer', icon: 'fas fa-pen-nib', category: 'Divisi Relawan', category_en: 'Divisions', url: (isSubFolder ? 'register.html' : 'pages/register.html') + '#divisions-grid' },
        { id: 'div-eo', type: 'link', title: 'Divisi Relawan: Event Organizer (EO)', title_en: 'Volunteer Division: Event Organizer (EO)', icon: 'fas fa-calendar-check', category: 'Divisi Relawan', category_en: 'Divisions', url: (isSubFolder ? 'register.html' : 'pages/register.html') + '#divisions-grid' },
        { id: 'div-gd', type: 'link', title: 'Divisi Relawan: Graphic Designer', title_en: 'Volunteer Division: Graphic Designer', icon: 'fas fa-palette', category: 'Divisi Relawan', category_en: 'Divisions', url: (isSubFolder ? 'register.html' : 'pages/register.html') + '#divisions-grid' },
        { id: 'div-hr', type: 'link', title: 'Divisi Relawan: Human Resources (HR)', title_en: 'Volunteer Division: Human Resources (HR)', icon: 'fas fa-user-tie', category: 'Divisi Relawan', category_en: 'Divisions', url: (isSubFolder ? 'register.html' : 'pages/register.html') + '#divisions-grid' },
        { id: 'div-mkt', type: 'link', title: 'Divisi Relawan: Marketing & Partnership', title_en: 'Volunteer Division: Marketing & Partnership', icon: 'fas fa-bullhorn', category: 'Divisi Relawan', category_en: 'Divisions', url: (isSubFolder ? 'register.html' : 'pages/register.html') + '#divisions-grid' },
        { id: 'div-socmed', type: 'link', title: 'Divisi Relawan: Social Media Specialist', title_en: 'Volunteer Division: Social Media Specialist', icon: 'fas fa-hashtag', category: 'Divisi Relawan', category_en: 'Divisions', url: (isSubFolder ? 'register.html' : 'pages/register.html') + '#divisions-grid' },
        { id: 'div-video', type: 'link', title: 'Divisi Relawan: Video Editor', title_en: 'Volunteer Division: Video Editor', icon: 'fas fa-video', category: 'Divisi Relawan', category_en: 'Divisions', url: (isSubFolder ? 'register.html' : 'pages/register.html') + '#divisions-grid' },
        { id: 'div-web', type: 'link', title: 'Divisi Relawan: Web Developer', title_en: 'Volunteer Division: Web Developer', icon: 'fas fa-code', category: 'Divisi Relawan', category_en: 'Divisions', url: (isSubFolder ? 'register.html' : 'pages/register.html') + '#divisions-grid' },
        
        // Navigation Pages & Key Sections
        { id: 'nav-home', type: 'link', title: 'Beranda (Home)', title_en: 'Home Page', icon: 'fas fa-home', category: 'Halaman', category_en: 'Pages', url: isSubFolder ? '../' : './' },
        { id: 'nav-about', type: 'link', title: 'Tentang Kami & Tim (About Us)', title_en: 'About Us & Team', icon: 'fas fa-users', category: 'Halaman', category_en: 'Pages', url: basePath + 'pages/about-us.html' },
        { id: 'nav-stories', type: 'link', title: 'Cerita Jejak Relawan & Catatan Lapangan', title_en: 'Hey Youth Stories & Field Notes', icon: 'fas fa-book-reader', category: 'Halaman', category_en: 'Pages', url: basePath + 'pages/about-us.html#field-stories' },
        { id: 'nav-activities', type: 'link', title: 'Kegiatan, Webinar & Podcast Terbaru', title_en: 'Latest Activities & Podcasts', icon: 'fas fa-bolt', category: 'Halaman', category_en: 'Pages', url: basePath + 'pages/activities.html' },
        { id: 'nav-register', type: 'link', title: 'Formulir Pendaftaran Relawan (Join Us)', title_en: 'Volunteer Application Form (Join Us)', icon: 'fas fa-user-plus', category: 'Halaman', category_en: 'Pages', url: (isSubFolder ? 'register.html' : 'pages/register.html') },
        { id: 'nav-gallery', type: 'link', title: 'Galeri Semua Dokumentasi Kegiatan', title_en: 'Full Activities Gallery', icon: 'fas fa-images', category: 'Halaman', category_en: 'Pages', url: basePath + 'pages/gallery.html' },
        { id: 'nav-mentoring', type: 'link', title: 'Teacher Class / Program Mentoring', title_en: 'Teacher Class / Mentorship Program', icon: 'fas fa-graduation-cap', category: 'Halaman', category_en: 'Pages', url: basePath + 'pages/mentoring.html' },
        { id: 'nav-partner', type: 'link', title: 'Kemitraan & Kolaborasi (Partners)', title_en: 'Partnership & Collaboration', icon: 'fas fa-handshake', category: 'Halaman', category_en: 'Pages', url: basePath + 'pages/partner.html' },
        { id: 'nav-donation', type: 'link', title: 'Donasi Program Pendidikan (Donation)', title_en: 'Donation Program', icon: 'fas fa-donate', category: 'Halaman', category_en: 'Pages', url: basePath + 'pages/donation.html' },
        { id: 'nav-cms', type: 'link', title: 'CMS Admin Dashboard', title_en: 'CMS Admin Dashboard', icon: 'fas fa-lock', category: 'Admin', category_en: 'Admin', url: basePath + 'CMS/Login.html' },

        // Stories & Field Notes Quick Items
        { id: 'story-sal', type: 'link', title: 'Cerita Lapangan: Melihat Binar Harapan di Kolong Jembatan Ciputat', title_en: 'Field Notes: Glimmers of Hope Under Ciputat Flyover', icon: 'fas fa-heart', category: 'Cerita Lapangan', category_en: 'Stories', url: basePath + 'pages/about-us.html#field-stories' },
        { id: 'story-rian', type: 'link', title: 'Cerita Lapangan: Dari Kanvas Digital ke Senyum Nyata', title_en: 'Field Notes: From Digital Canvas to Pure Smiles', icon: 'fas fa-heart', category: 'Cerita Lapangan', category_en: 'Stories', url: basePath + 'pages/about-us.html#field-stories' },
        { id: 'story-dimas', type: 'link', title: 'Cerita Lapangan: Mendampingi Mimpi Pertama Adik Asuh', title_en: 'Field Notes: Mentoring the First Dream', icon: 'fas fa-heart', category: 'Cerita Lapangan', category_en: 'Stories', url: basePath + 'pages/about-us.html#field-stories' },
        { id: 'story-amanda', type: 'link', title: 'Cerita Lapangan: Menembus Pelosok Banten Selatan', title_en: 'Field Notes: Reaching Remote Corners of South Banten', icon: 'fas fa-heart', category: 'Cerita Lapangan', category_en: 'Stories', url: basePath + 'pages/about-us.html#field-stories' }
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
                            category_en: 'Activities',
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
                            category_en: 'Podcasts',
                            url: basePath + 'pages/gallery.html#podcasts'
                        });
                    });
                }
            }
        } catch(e) {}

        if (items.length === 0) {
            items.push(
                { id: 'act-sample-1', type: 'link', title: 'Dream Big, Learn Bigger at SD Yos Sudarso', title_en: 'Dream Big, Learn Bigger at Yos Sudarso', icon: 'fas fa-file-alt', category: 'Kegiatan & Artikel', category_en: 'Activities', url: basePath + 'pages/activity-detail.html?id=301' },
                { id: 'act-sample-2', type: 'link', title: 'Instilling Education, Igniting Dreams di TBM Kolong', title_en: 'Visit to TBM Kolong', icon: 'fas fa-file-alt', category: 'Kegiatan & Artikel', category_en: 'Activities', url: basePath + 'pages/activity-detail.html?id=302' },
                { id: 'pod-sample-1', type: 'link', title: 'Episode 1: The Power of Self-Affirmation', title_en: 'Episode 1: The Power of Self-Affirmation', icon: 'fas fa-podcast', category: 'Podcast', category_en: 'Podcasts', url: basePath + 'pages/gallery.html#podcasts' },
                { id: 'pod-sample-2', type: 'link', title: 'Episode 2: Suicide Is Not The Answer', title_en: 'Episode 2: Suicide Is Not The Answer', icon: 'fas fa-podcast', category: 'Podcast', category_en: 'Podcasts', url: basePath + 'pages/gallery.html#podcasts' }
            );
        }
        return items;
    }

    var selectedIndex = 0;
    var currentFilteredItems = [];
    var activeCategoryFilter = 'all';

    function renderCommandPalette() {
        var modal = document.getElementById('global-command-palette');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'global-command-palette';
            modal.className = 'fixed inset-0 z-[999999] hidden flex items-start justify-center pt-10 sm:pt-16 px-4 bg-black/60 backdrop-blur-md transition-opacity duration-200';
            modal.setAttribute('role', 'dialog');
            modal.setAttribute('aria-modal', 'true');
            
            var isMac = typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
            var shortcutKbd = isMac ? '⌘K' : 'Ctrl K';

            modal.innerHTML = 
                '<div class="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden border border-gray-150 dark:border-slate-800 flex flex-col max-h-[85vh] animate-fade-in-up" onclick="event.stopPropagation()">' +
                    '<!-- Input Header -->' +
                    '<div class="p-3.5 sm:p-4 border-b border-gray-150 dark:border-slate-800 flex items-center gap-3 bg-gray-50/70 dark:bg-slate-950/70">' +
                        '<i class="fas fa-search text-primary dark:text-blue-400 text-sm pl-2"></i>' +
                        '<input type="text" id="cmd-palette-input" placeholder="Cari halaman, divisi relawan, cerita, artikel, aksi cepat..." class="w-full bg-transparent text-sm text-heading dark:text-white placeholder-gray-400 focus:outline-none" autocomplete="off">' +
                        '<button type="button" id="cmd-palette-clear" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 hidden cursor-pointer" title="Bersihkan input"><i class="fas fa-times-circle text-xs"></i></button>' +
                        '<kbd class="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-mono font-bold bg-gray-200 dark:bg-slate-800 text-gray-600 dark:text-gray-300 rounded-md border border-gray-300 dark:border-slate-700 shadow-xs">' + shortcutKbd + '</kbd>' +
                        '<button type="button" onclick="window.closeCommandPalette()" class="text-gray-400 hover:text-red-500 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer transition-colors" title="Tutup (ESC)"><i class="fas fa-times text-xs"></i></button>' +
                    '</div>' +
                    '<!-- Category Filter Chips -->' +
                    '<div class="px-3.5 py-2.5 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto hide-scroll text-xs">' +
                        '<button type="button" class="cmd-filter-chip active px-3 py-1 rounded-full font-semibold transition-all whitespace-nowrap bg-primary text-white cursor-pointer shadow-xs" data-cat="all">Semua</button>' +
                        '<button type="button" class="cmd-filter-chip px-3 py-1 rounded-full font-semibold transition-all whitespace-nowrap bg-gray-100 hover:bg-gray-200 text-gray-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 cursor-pointer" data-cat="Divisi Relawan">Divisi Relawan</button>' +
                        '<button type="button" class="cmd-filter-chip px-3 py-1 rounded-full font-semibold transition-all whitespace-nowrap bg-gray-100 hover:bg-gray-200 text-gray-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 cursor-pointer" data-cat="Aksi Cepat">Aksi Cepat</button>' +
                        '<button type="button" class="cmd-filter-chip px-3 py-1 rounded-full font-semibold transition-all whitespace-nowrap bg-gray-100 hover:bg-gray-200 text-gray-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 cursor-pointer" data-cat="Halaman">Halaman</button>' +
                        '<button type="button" class="cmd-filter-chip px-3 py-1 rounded-full font-semibold transition-all whitespace-nowrap bg-gray-100 hover:bg-gray-200 text-gray-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 cursor-pointer" data-cat="Cerita & Kegiatan">Cerita & Kegiatan</button>' +
                    '</div>' +
                    '<!-- Results List -->' +
                    '<div id="cmd-palette-results" class="p-2 sm:p-2.5 overflow-y-auto space-y-1 flex-1 divide-y divide-gray-50 dark:divide-slate-850" style="max-height: 52vh;"></div>' +
                    '<!-- Keyboard Navigation Footer -->' +
                    '<div class="p-3 bg-gray-50 dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-gray-400">' +
                        '<div class="flex items-center gap-3">' +
                            '<span><kbd class="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded border border-gray-200 dark:border-slate-700 text-[10px]">↑</kbd> <kbd class="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded border border-gray-200 dark:border-slate-700 text-[10px]">↓</kbd> Navigasi</span>' +
                            '<span><kbd class="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded border border-gray-200 dark:border-slate-700 text-[10px]">↵</kbd> Buka</span>' +
                            '<span><kbd class="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded border border-gray-200 dark:border-slate-700 text-[10px]">ESC</kbd> Tutup</span>' +
                        '</div>' +
                        '<span class="font-bold text-primary dark:text-blue-400 flex items-center gap-1"><i class="fas fa-bolt text-[10px]"></i> Hey Youth Spotlight</span>' +
                    '</div>' +
                '</div>';

            modal.addEventListener('click', function(e) {
                if (e.target === modal) window.closeCommandPalette();
            });

            document.body.appendChild(modal);

            var input = document.getElementById('cmd-palette-input');
            var clearBtn = document.getElementById('cmd-palette-clear');
            if (input) {
                input.addEventListener('input', function(e) {
                    var val = e.target.value;
                    if (clearBtn) {
                        if (val) clearBtn.classList.remove('hidden');
                        else clearBtn.classList.add('hidden');
                    }
                    filterAndRenderResults(val.trim());
                });
                input.addEventListener('keydown', handleKeyNavigation);
            }
            if (clearBtn) {
                clearBtn.addEventListener('click', function() {
                    if (input) {
                        input.value = '';
                        clearBtn.classList.add('hidden');
                        filterAndRenderResults('');
                        input.focus();
                    }
                });
            }

            // Category Filter Chip click handlers
            modal.querySelectorAll('.cmd-filter-chip').forEach(function(chip) {
                chip.addEventListener('click', function() {
                    modal.querySelectorAll('.cmd-filter-chip').forEach(function(c) {
                        c.classList.remove('active', 'bg-primary', 'text-white', 'shadow-xs');
                        c.classList.add('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200', 'dark:bg-slate-800', 'dark:text-slate-300');
                    });
                    chip.classList.add('active', 'bg-primary', 'text-white', 'shadow-xs');
                    chip.classList.remove('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200', 'dark:bg-slate-800', 'dark:text-slate-300');
                    activeCategoryFilter = chip.getAttribute('data-cat') || 'all';
                    var currQ = input ? input.value.trim() : '';
                    filterAndRenderResults(currQ);
                });
            });
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
            // Check Category filter chip first
            if (activeCategoryFilter !== 'all') {
                if (activeCategoryFilter === 'Cerita & Kegiatan') {
                    if (item.category !== 'Cerita Lapangan' && item.category !== 'Kegiatan & Artikel' && item.category !== 'Podcast') {
                        return false;
                    }
                } else if (item.category !== activeCategoryFilter) {
                    return false;
                }
            }

            if (!q) return true;
            return (item.title && item.title.toLowerCase().includes(q)) ||
                   (item.title_en && item.title_en.toLowerCase().includes(q)) ||
                   (item.category && item.category.toLowerCase().includes(q)) ||
                   (item.category_en && item.category_en.toLowerCase().includes(q));
        });

        currentFilteredItems = filtered;
        selectedIndex = 0;

        if (filtered.length === 0) {
            container.innerHTML = '<div class="py-10 text-center text-gray-400 text-xs">' +
                '<i class="fas fa-search-minus text-3xl mb-2.5 block opacity-40"></i>' +
                'Tidak ada hasil untuk "' + query.replace(/</g, '&lt;') + '". Coba kata kunci lain atau pilih kategori Semua.' +
            '</div>';
            return;
        }

        var currentLang = localStorage.getItem('heyyouth_lang') || 'en';
        var html = '';
        var currentCategory = '';

        filtered.forEach(function(item, idx) {
            var catLabel = currentLang === 'id' ? (item.category || item.category_en) : (item.category_en || item.category);
            if (item.category !== currentCategory) {
                currentCategory = item.category;
                html += '<div class="pt-2.5 pb-1 px-3 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider flex items-center justify-between">' +
                    '<span>' + catLabel + '</span>' +
                '</div>';
            }
            var title = (currentLang === 'id' ? (item.title || item.title_en) : (item.title_en || item.title));
            var activeClass = idx === 0 ? 'bg-blue-50 dark:bg-blue-950/60 text-primary dark:text-blue-400' : 'text-heading dark:text-slate-200';

            html += '<div class="cmd-item px-3 py-2.5 rounded-xl cursor-pointer transition-colors flex items-center justify-between text-xs hover:bg-gray-100 dark:hover:bg-slate-800 ' + activeClass + '" data-idx="' + idx + '">' +
                '<div class="flex items-center gap-3 min-w-0">' +
                    '<div class="w-8 h-8 rounded-xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-xs text-primary dark:text-blue-400 flex-shrink-0 shadow-xs">' +
                        '<i class="' + item.icon + '"></i>' +
                    '</div>' +
                    '<div class="truncate text-left">' +
                        '<span class="font-medium block truncate">' + title + '</span>' +
                    '</div>' +
                '</div>' +
                '<div class="flex items-center gap-2 flex-shrink-0 ml-2">' +
                    '<span class="text-[10px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-gray-500 font-mono hidden sm:inline-block">' + catLabel + '</span>' +
                    '<i class="fas fa-arrow-right text-[10px] text-gray-300 dark:text-slate-600"></i>' +
                '</div>' +
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
            el.addEventListener('mouseenter', function() {
                var idx = parseInt(el.getAttribute('data-idx'));
                if (!isNaN(idx)) {
                    selectedIndex = idx;
                    updateSelection();
                }
            });
        });
    }

    window.openCommandPalette = function() {
        renderCommandPalette();
        var modal = document.getElementById('global-command-palette');
        var input = document.getElementById('cmd-palette-input');
        var clearBtn = document.getElementById('cmd-palette-clear');
        if (modal) {
            modal.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
            if (input) {
                var currentLang = localStorage.getItem('heyyouth_lang') || 'en';
                input.placeholder = currentLang === 'id' 
                    ? "Cari halaman, divisi relawan, cerita, kegiatan, atau aksi cepat..." 
                    : "Search pages, volunteer divisions, field stories, activities, or quick actions...";
                input.value = '';
                if (clearBtn) clearBtn.classList.add('hidden');
                activeCategoryFilter = 'all';
                modal.querySelectorAll('.cmd-filter-chip').forEach(function(c, i) {
                    if (i === 0) {
                        c.classList.add('active', 'bg-primary', 'text-white', 'shadow-xs');
                        c.classList.remove('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200', 'dark:bg-slate-800', 'dark:text-slate-300');
                    } else {
                        c.classList.remove('active', 'bg-primary', 'text-white', 'shadow-xs');
                        c.classList.add('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200', 'dark:bg-slate-800', 'dark:text-slate-300');
                    }
                });
                filterAndRenderResults('');
                setTimeout(function() { input.focus(); }, 60);
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

