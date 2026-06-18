/* =============================================
   HEY YOUTH! — Global Components (Navbar & Footer)
   ============================================= */

(function () {
  'use strict';

  var navbarTemplate = `
  <nav id="navbar" class="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <a href="index.html" class="flex-shrink-0 flex items-center gap-2 group">
          <img src="assets/img/NEW HEY YOUTH Sep 2025.png" alt="Hey Youth Logo" class="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300">
        </a>
        <div class="hidden md:flex space-x-8 items-center">
          <a href="index.html" id="nav-link-home" class="nav-link text-body hover:text-primary transition-colors">Home</a>
          <a href="about us.html" id="nav-link-about" class="nav-link text-body hover:text-primary transition-colors">About us</a>
          <a href="activities.html" id="nav-link-activities" class="nav-link text-body hover:text-primary transition-colors">Activities</a>
          <a href="partner.html" id="nav-link-partners" class="nav-link text-body hover:text-primary transition-colors">Partners</a>
          <a href="donation.html" id="nav-link-donation" class="nav-link text-body hover:text-primary transition-colors">Donation</a>
        </div>
        <div class="hidden md:flex items-center gap-3">
          <a href="CMS/Login.html" class="text-body hover:text-primary px-3 py-2.5 rounded-lg font-medium transition-colors text-sm flex items-center gap-1.5">
            <i class="fas fa-lock text-xs"></i> Dashboard
          </a>
          <a href="https://bit.ly/HYOprec" class="bg-primary hover:bg-primaryDark text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Join Us!
          </a>
          <button type="button" class="theme-toggle-btn ml-2 p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all focus:outline-none dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-yellow-400 w-9 h-9 flex items-center justify-center" aria-label="Toggle Theme">
            <i class="fas fa-sun theme-icon-sun text-sm hidden"></i>
            <i class="fas fa-moon theme-icon-moon text-sm"></i>
          </button>
          <div class="btn-group lang-toggle-group ml-2 bg-gray-200 rounded-full p-1 relative flex items-center w-[84px] h-9 dark:bg-slate-800" role="group" aria-label="Language Switch">
            <div class="absolute left-1 bg-white h-7 w-9 rounded-full shadow-sm transition-transform duration-300 lang-slider-bg dark:bg-slate-900" style="transform: translateX(0);"></div>
            <button type="button" class="btn btn-secondary flex-1 text-xs font-bold text-gray-800 relative z-10 lang-btn dark:text-slate-200" data-lang="id">ID</button>
            <button type="button" class="btn btn-secondary flex-1 text-xs font-bold text-gray-800 relative z-10 lang-btn dark:text-slate-200" data-lang="en">EN</button>
          </div>
        </div>
        <div class="md:hidden flex items-center">
          <button id="mobile-menu-btn" class="text-heading hover:text-primary focus:outline-none p-2" aria-label="Toggle menu">
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
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl transform transition-all duration-300 origin-top">
      <div class="px-4 pt-4 pb-6 space-y-2">
        <a href="index.html" id="mobile-nav-link-home" class="block px-4 py-3 rounded-xl text-base font-medium text-body hover:text-primary hover:bg-gray-50">Home</a>
        <a href="about us.html" id="mobile-nav-link-about" class="block px-4 py-3 rounded-xl text-base font-medium text-body hover:text-primary hover:bg-gray-50">About us</a>
        <a href="activities.html" id="mobile-nav-link-activities" class="block px-4 py-3 rounded-xl text-base font-medium text-body hover:text-primary hover:bg-gray-50">Activities</a>
        <a href="partner.html" id="mobile-nav-link-partners" class="block px-4 py-3 rounded-xl text-base font-medium text-body hover:text-primary hover:bg-gray-50">Partners</a>
        <a href="donation.html" id="mobile-nav-link-donation" class="block px-4 py-3 rounded-xl text-base font-medium text-body hover:text-primary hover:bg-gray-50">Donation</a>
        <div class="pt-4 border-t border-gray-100 mt-4 space-y-2">
          <a href="CMS/Login.html" class="block w-full text-center border-2 border-gray-200 text-heading font-semibold px-4 py-3 rounded-xl hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
            <i class="fas fa-lock text-sm"></i> Dashboard
          </a>
          <a href="https://bit.ly/HYOprec" class="block w-full text-center bg-accent text-white px-4 py-3 rounded-xl font-bold hover:bg-yellow-600 transition-colors shadow-md">Join Us Now!</a>
          <div class="flex justify-center mt-4 pt-2 gap-3 items-center">
            <div class="btn-group lang-toggle-group bg-gray-200 rounded-full p-1 relative flex items-center w-[84px] h-9 dark:bg-slate-800" role="group" aria-label="Language Switch">
              <div class="absolute left-1 bg-white h-7 w-9 rounded-full shadow-sm transition-transform duration-300 lang-slider-bg dark:bg-slate-900" style="transform: translateX(0);"></div>
              <button type="button" class="btn btn-secondary flex-1 text-xs font-bold text-gray-800 relative z-10 lang-btn dark:text-slate-200" data-lang="id">ID</button>
              <button type="button" class="btn btn-secondary flex-1 text-xs font-bold text-gray-800 relative z-10 lang-btn dark:text-slate-200" data-lang="en">EN</button>
            </div>
            <button type="button" class="theme-toggle-btn p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all focus:outline-none dark:bg-slate-800 dark:text-yellow-400 w-9 h-9 flex items-center justify-center" aria-label="Toggle Theme">
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
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <span class="text-2xl font-bold text-white block mb-4">Hey Youth!</span>
          <p class="mt-4 text-sm leading-relaxed text-gray-400">
            Helping youths grow through webinar, mentoring & volunteering<br>
            Est. 2018 | 5K+ learners | 📩 Join our team to make a real impact 🌏
          </p>
        </div>
        <div>
          <h4 class="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contact</h4>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center gap-2"><i class="fas fa-envelope text-accent"></i> hey.youth.id@gmail.com</li>
            <li class="flex items-center gap-2"><i class="fas fa-map-marker-alt text-accent"></i> Jakarta, Indonesia</li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-bold mb-4 uppercase text-xs tracking-wider">Follow Us</h4>
          <p class="text-xs mb-3 text-gray-500">Follow us to keep you updated with our latest activities</p>
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

    if (navbarContainer) {
      navbarContainer.outerHTML = navbarTemplate;
    }
    if (footerContainer) {
      footerContainer.outerHTML = footerTemplate;
    }

    // Highlight active page link based on the filename in URL path
    var pathname = window.location.pathname;
    var filename = decodeURIComponent(pathname.split('/').pop().toLowerCase());

    var activeId = '';
    if (filename === '' || filename === 'index.html') {
      activeId = 'home';
    } else if (filename === 'about us.html') {
      activeId = 'about';
    } else if (filename === 'activities.html' || filename === 'activity-detail.html') {
      activeId = 'activities';
    } else if (filename === 'partner.html') {
      activeId = 'partners';
    } else if (filename === 'donation.html') {
      activeId = 'donation';
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
