document.addEventListener('DOMContentLoaded', function() {
    if(window.innerWidth >= 768){
        const nav = document.querySelector('.nav');
        
        nav.style.transition = 'background-color 0.3s ease';

        nav.addEventListener('mouseenter',(e)=>{
            e.target.style.backgroundColor = '#00f';
        })

        nav.addEventListener('mouseleave',(e)=>{
            const navRect = nav.getBoundingClientRect();
            if (navRect.top <= 0) {
                e.target.style.backgroundColor = 'rgba(0,0,255,0.5)';
            }
        })

        function checkScroll() {
            let hover = nav.matches(':hover');
            if (!hover) {
                const navRect = nav.getBoundingClientRect();
                navRect.top <= 0 ? nav.style.backgroundColor = 'rgba(0,0,255,0.5)'
                : nav.style.backgroundColor = '#00f';
            }
        }
        checkScroll();

        window.addEventListener('scroll', checkScroll);
    }

    if ('serviceWorker' in navigator) {
        const swPath = location.pathname.includes('/html/') ? '../js/sw.js' : './js/sw.js';
        
        navigator.serviceWorker.register(swPath)
            .then(registration => {
                console.log('Service Worker registrado con éxito:', registration.scope);
            })
            .catch(error => {
                console.error('Error al registrar el Service Worker:', error);
            });
    }
    
    const placeholderSrc = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 300 200' %3E%3Crect width%3D'300' height%3D'200' fill%3D'%23cccccc' %2F%3E%3C%2Fsvg%3E";
    
    const lazyImages = document.querySelectorAll('.lazy-image');
    
    lazyImages.forEach(img => {
        img.setAttribute('src', placeholderSrc);
    });
    
    const loadImage = (img) => {
        const src = img.dataset.src;
        if (!src || img.dataset.loading === 'true') return;
    
        img.dataset.loading = 'true';
    
        img.onload = () => {
            img.removeAttribute('data-src');
            img.removeAttribute('data-loading');
            console.log('Imagen cargada sin error:', img.src);
        };
    
        img.onerror = () => {
            console.warn('Imagen con error:', img.src);
            img.removeAttribute('data-loading');
        };
    
        img.src = src;
    };
    
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0 &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right >= 0
        );
    };
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage(entry.target);
                    obs.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });
    
        document.querySelectorAll('.lazy-image[data-src]').forEach(img => {
            observer.observe(img);
        });
    
    } else {
        // Solo usar fallback si no hay IntersectionObserver
        const loadVisibleImages = () => {
            document.querySelectorAll('.lazy-image[data-src]').forEach(img => {
                if (isInViewport(img)) {
                    loadImage(img);
                }
            });
        };
    
        window.addEventListener('scroll', () => {
            clearTimeout(window._scrollTimeout);
            window._scrollTimeout = setTimeout(loadVisibleImages, 200);
        });
    
        ['resize', 'orientationchange'].forEach(event => {
            window.addEventListener(event, loadVisibleImages);
        });
    
        loadVisibleImages();
    }    
});