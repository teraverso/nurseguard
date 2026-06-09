document.addEventListener("DOMContentLoaded", () => {
    
    // Controle da Linha de Progresso Superior
    const progressBar = document.getElementById("progressBar");
    
    window.addEventListener("scroll", () => {
        const doc = document.documentElement;
        const top = doc.scrollTop || document.body.scrollTop;
        const height = doc.scrollHeight || document.body.scrollHeight;
        const percent = (top / (height - doc.clientHeight)) * 100;
        
        if (progressBar) {
            progressBar.style.width = `${percent}%`;
        }
    });

    // Controle Visual de Scroll para Fixar Borda na Navbar
    const mainNavbar = document.getElementById("mainNavbar");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            mainNavbar.classList.add("scrolled");
        } else {
            mainNavbar.classList.remove("scrolled");
        }
    });
});