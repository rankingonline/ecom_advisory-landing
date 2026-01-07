
const renderLayout = () => {
    // Header Content
    const headerContent = `
        <div class="container header-flex">
            <a href="#" class="logo-container">
                <img src="../../assets/logo/logo-full-white.png" alt="Ecom Advisory" class="header-logo">
            </a>
            
            <!-- Desktop Navigation -->
            <nav class="nav-menu desktop-nav">
                <a href="#asesorias" class="nav-link">Asesorías</a>
                <a href="#contacto" class="btn-contact btn-glass">Contáctanos</a>
            </nav>

            <!-- Mobile Controls -->
            <div class="mobile-controls">
                <a href="#contacto" class="btn-icon-glass" aria-label="Llamar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </a>
                <button class="btn-icon-glass menu-toggle" aria-label="Menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu Overlay -->
        <div class="mobile-menu-overlay">
            <button class="close-menu" aria-label="Cerrar menú">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <nav class="mobile-nav-content">
                <a href="#asesorias" class="mobile-nav-link">Asesorías</a>
                <a href="#contacto" class="mobile-nav-link">Contáctanos</a>
            </nav>
        </div>
    `;

    // Footer Content
    const footerContent = `
        <div class="container footer-content">
            <img src="../../assets/logo/logo-full-white.png" alt="Ecom Advisory" class="footer-logo">
            <p class="footer-tagline">ECOM Advisory · Asesoría y consultoría especializada en e-commerce con stock</p>
            <div class="footer-links">
                <a href="#">Aviso legal</a>
                <span class="separator">·</span>
                <a href="#">Política de privacidad</a>
                <span class="separator">·</span>
                <a href="#contacto-final">Contacto</a>
            </div>
            <p class="footer-copyright" style="margin-top: 1.5rem; opacity: 0.4; font-size: 0.85rem;">&copy; 2026 Ecom Advisory. Todos los derechos reservados.</p>
        </div>
    `;

    // Inject into DOM
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    if (header) {
        header.innerHTML = headerContent;

        // Mobile Menu Logic
        const menuToggle = header.querySelector('.menu-toggle');
        const closeMenu = header.querySelector('.close-menu');
        const mobileOverlay = header.querySelector('.mobile-menu-overlay');
        const mobileLinks = header.querySelectorAll('.mobile-nav-link');

        const toggleMenu = () => {
            mobileOverlay.classList.toggle('active');
            document.body.style.overflow = mobileOverlay.classList.contains('active') ? 'hidden' : '';
        };

        menuToggle.addEventListener('click', toggleMenu);
        closeMenu.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

        // Scroll Effect Logic
        window.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight * 0.8) { // Trigger after 80% viewport height
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    if (footer) footer.innerHTML = footerContent;
};

document.addEventListener('DOMContentLoaded', renderLayout);
