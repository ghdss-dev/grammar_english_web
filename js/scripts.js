document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.modal-trigger');
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close-btn");
    const zoomBtn = document.getElementById("zoom-btn");

    // Abrir modal ao clicar na imagem
    images.forEach(image => {
        image.addEventListener("click", function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
            modalImg.classList.remove("zoomed"); // Remove o zoom ao abrir uma nova imagem
            zoomBtn.textContent = "🔍 Zoom"; // Reseta o texto do botão
        });
    });

    // Fechar o modal ao clicar no botão 'X'
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Alternar zoom ao clicar no botão Zoom
    zoomBtn.addEventListener("click", function() {
        if (modalImg.classList.contains("zoomed")) {
            modalImg.classList.remove("zoomed");
            zoomBtn.textContent = "🔍 Zoom"; // Texto para ampliar
        } else {
            modalImg.classList.add("zoomed");
            zoomBtn.textContent = "🔍 Reduzir"; // Texto para reduzir
        }
    });

    // Fechar modal ao clicar fora da imagem
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
