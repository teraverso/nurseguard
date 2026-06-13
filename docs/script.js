document.addEventListener("DOMContentLoaded", () => {
    
    // Inicializa os ícones do Lucide na página
    lucide.createIcons();
    
    const progressBar = document.getElementById("progressBar");
    const mainNavbar = document.getElementById("mainNavbar");
    
    let ticking = false;

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateScrollEffects();
                ticking = false;
            });
            ticking = true;
        }
    });

    function updateScrollEffects() {
        if (mainNavbar) {
            mainNavbar.classList.toggle("scrolled", window.scrollY > 20);
        }
        
        if (progressBar) {
            const doc = document.documentElement;
            const top = doc.scrollTop || document.body.scrollTop;
            const height = doc.scrollHeight || document.body.scrollHeight;
            const percent = (top / (height - doc.clientHeight)) * 100;
            
            progressBar.style.width = `${percent}%`;
        }
    }

});

function loadVideo() {
    const container = document.getElementById('videoFacade');
    const videoId = 'SEU_VIDEO_ID_AQUI'; // Substitua pelo ID real
    container.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" title="NurseGuard na Prática" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>`;
}