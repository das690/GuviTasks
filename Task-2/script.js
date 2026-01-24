document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if(menuIcon) {
        menuIcon.addEventListener('click', () => {
            // Simple toggle for demonstration. 
            // In a real project, you would toggle a class to show/hide the menu.
            alert('Mobile menu clicked! (Add .show-menu CSS class logic here)');
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if(targetElement){
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Sticky Navbar on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(76, 29, 149, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            navbar.style.position = 'fixed';
            navbar.style.top = '0';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
            navbar.style.position = 'absolute';
        }
    });

    // Testimonial Hover Effect (Optional)
    const testCards = document.querySelectorAll('.test-card');
    testCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            testCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });
});