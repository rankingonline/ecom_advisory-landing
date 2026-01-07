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
});
