document.addEventListener("DOMContentLoaded", () => {
    
    // Inicializa os ícones do Lucide na página
    lucide.createIcons();
    
    const progressBar = document.getElementById("progressBar");
    const mainNavbar = document.getElementById("mainNavbar");
    
    window.addEventListener("scroll", () => {
        if (mainNavbar) {
            if (window.scrollY > 20) {
                mainNavbar.classList.add("scrolled");
            } else {
                mainNavbar.classList.remove("scrolled");
            }
        }
        
        if (progressBar) {
            const doc = document.documentElement;
            const top = doc.scrollTop || document.body.scrollTop;
            const height = doc.scrollHeight || document.body.scrollHeight;
            const percent = (top / (height - doc.clientHeight)) * 100;
            
            progressBar.style.width = `${percent}%`;
        }
    });
});