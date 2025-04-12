document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const menuToggleCheckbox = document.getElementById('menu-toggle-checkbox');
    
    let scrollOffset;
    window.innerWidth <= 768 && menuToggleCheckbox ? scrollOffset = 210
    : scrollOffset = 80;

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - scrollOffset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            if (window.innerWidth <= 768 && menuToggleCheckbox) {
                menuToggleCheckbox.checked = false;
            }
        });
    });
});