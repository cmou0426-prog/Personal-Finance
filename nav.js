// Mindful Money - Shared Navigation Component
(function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const navHTML = `
        <a href="index.html" class="text-2xl font-bold text-forest hover:opacity-80 transition" aria-label="Mindful Money Home">
            Mindful Money.
        </a>

        <!-- Mobile Menu Button -->
        <button
            id="mobile-menu-btn"
            class="md:hidden p-2 text-forest hover:bg-forest/10 rounded-lg transition"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
            type="button"
        >
            <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        </button>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
            <a href="philosophy.html" class="hover:text-forest transition ${currentPage === 'philosophy.html' ? 'text-forest font-semibold' : ''}">Philosophy</a>
            <a href="lab.html" class="hover:text-forest transition ${currentPage === 'lab.html' ? 'text-forest font-semibold' : ''}">The Lab</a>
            <a href="tools.html" class="hover:text-forest transition ${currentPage === 'tools.html' ? 'text-forest font-semibold' : ''}">Tools</a>
            <a href="journey.html" class="bg-forest text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-80 transition ${currentPage === 'journey.html' ? 'ring-2 ring-offset-2 ring-forest' : ''}">
                Start Your Journey
            </a>
        </div>

        <!-- Mobile Navigation -->
        <div
            id="mobile-menu"
            class="fixed inset-y-0 right-0 w-64 bg-white shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out md:hidden z-50"
            role="navigation"
            aria-label="Mobile navigation"
        >
            <div class="p-6 pt-20 space-y-4">
                <a href="philosophy.html" class="block py-2 text-lg hover:text-forest transition ${currentPage === 'philosophy.html' ? 'text-forest font-semibold' : ''}">Philosophy</a>
                <a href="lab.html" class="block py-2 text-lg hover:text-forest transition ${currentPage === 'lab.html' ? 'text-forest font-semibold' : ''}">The Lab</a>
                <a href="tools.html" class="block py-2 text-lg hover:text-forest transition ${currentPage === 'tools.html' ? 'text-forest font-semibold' : ''}">Tools</a>
                <a href="journey.html" class="block mt-4 bg-forest text-white px-5 py-3 rounded-full text-center font-semibold hover:opacity-80 transition">Start Your Journey</a>
            </div>
        </div>

        <!-- Overlay for mobile menu -->
        <div id="mobile-overlay" class="fixed inset-0 bg-black/50 hidden md:hidden z-40" aria-hidden="true"></div>
    `;

    // Inject navigation
    const navElement = document.getElementById('main-nav');
    if (navElement) {
        navElement.innerHTML = navHTML;

        // Mobile menu functionality
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileOverlay = document.getElementById('mobile-overlay');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');

        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;

            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                mobileOverlay.classList.remove('hidden');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                menuBtn.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('translate-x-full');
                mobileOverlay.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                menuBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }

        menuBtn?.addEventListener('click', toggleMenu);
        mobileOverlay?.addEventListener('click', toggleMenu);

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                toggleMenu();
            }
        });
    }
})();
