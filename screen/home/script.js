document.addEventListener('DOMContentLoaded', () => {
    try {
        VANTA.NET({
            el: "#hero-background",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.50,
            color: '#3b608c',       // More subtle muted blue
            backgroundColor: '#ffffff66', // Primary Color (Fallback)
            backgroundAlpha: 0.0,      // Allow CSS Gradient to show through
            points: 20.00,
            maxDistance: 10.00,
            spacing: 30.00
        });
        console.log('Vanta Net Background Initialized');
    } catch (error) {
        console.error('Vanta JS Error:', error);
    }

    // Animation Observer for Methodology
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger Progress Fill
                const progressFill = document.querySelector('.progress-fill');
                if (progressFill) {
                    // Simple check for mobile logic could vary, but width 100% works for horizontal. 
                    // For vertical pure CSS solution often easier, but let's trigger a class.
                    progressFill.style.width = '100%';
                    // If vertical (mobile), we might want height. 
                    if (window.innerWidth <= 768) {
                        progressFill.style.height = '100%';
                        progressFill.style.width = '100%'; // Ensure line thickness
                    }
                }
            }
        });
    }, observerOptions);

    const methodologySection = document.querySelector('#metodologia');
    if (methodologySection) observer.observe(methodologySection);
});
