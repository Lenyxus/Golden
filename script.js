document.addEventListener("DOMContentLoaded", () => {
    
    // 1. GRID & SPARKS (Zachováno z tvého kódu, jen upravená barva v CSS)
    const gridContainer = document.getElementById('grid-container');
    if (gridContainer) {
        let cols, rows, gridItems = []; 

        function createGrid() {
            gridContainer.innerHTML = '';
            const width = gridContainer.clientWidth;
            const height = gridContainer.clientHeight;
            const size = 40; // Trochu větší grid

            cols = Math.ceil(width / size);
            rows = Math.ceil(height / size);
            gridItems = [];

            for (let r = 0; r < rows; r++) {
                gridItems[r] = [];
                for (let c = 0; c < cols; c++) {
                    const item = document.createElement('div');
                    item.classList.add('grid-item');
                    gridContainer.appendChild(item);
                    gridItems[r][c] = item;
                }
            }
        }

        function spawnSpark() {
            const r = Math.floor(Math.random() * rows);
            const c = Math.floor(Math.random() * cols);
            if (gridItems[r] && gridItems[r][c]) {
                const item = gridItems[r][c];
                item.classList.add('spark');
                setTimeout(() => item.classList.remove('spark'), 2000);
            }
        }

        createGrid();
        setInterval(spawnSpark, 100); 
        window.addEventListener('resize', createGrid);
    }

    // 2. PARALLAX EFFECT PRO VELKÁ ČÍSLA
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // 3. THEME TOGGLE (Volitelné)
    // Pokud chceš zachovat přepínání témat, funguje stále stejně, 
    // jen se ujisti, že definuješ barvy pro .light-mode v CSS.
    // Pro tento specifický "Dark/Gold" design bych doporučil light mode vypnout nebo silně upravit.
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            // Zde bys musel dodefinovat light-mode proměnné v CSS
        });
    }
});