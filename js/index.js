document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar el comportamiento del nav en móviles
    const nav = document.querySelector('nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        // Solo aplicamos este comportamiento en dispositivos móviles
        if (window.innerWidth <= 768) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Si está en la parte superior, siempre mostramos el nav
            if (scrollTop <= 50) {
                nav.style.transform = 'translateY(0)';
                return;
            }
            
            // Si se desplaza hacia abajo, oculta el nav
            if (scrollTop > lastScrollTop) {
                nav.style.transform = 'translateY(-100%)';
            } 
            // Si se desplaza hacia arriba, muestra el nav
            else {
                nav.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        } else {
            // Reset para pantallas más grandes
            nav.style.transform = 'translateY(0)';
        }
    });
    
    // Suavizar el desplazamiento al hacer clic en los enlaces del menú
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - nav.offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});