document.addEventListener("DOMContentLoaded", () => {
    
    // Nastavení Intersection Observeru (sleduje, kdy jsou prvky vidět)
    const observerOptions = {
        root: null, // sleduje viewport prohlížeče
        rootMargin: '0px',
        threshold: 0.1 // spustí se, když je 10% prvku vidět
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Přidá třídu 'visible', která spustí CSS přechod
                entry.target.classList.add('visible');
                // Jakmile se jednou ukáže, už ho nemusíme sledovat (výkon)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Vybereme všechny prvky, které chceme animovat
    const animatedElements = document.querySelectorAll('.fade-in');
    
    // Spustíme sledování pro každý z nich
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    console.log("Inked Terra script loaded. Animation ready.");
});