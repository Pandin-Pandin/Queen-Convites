var titleBtns = document.querySelectorAll(".titleBtn");

titleBtns.forEach(function(titleBtn, index) {
    titleBtn.addEventListener("click", function() {
        var elementosOcultos = document.querySelectorAll(".scrollable-container");        
        var spanArrow = titleBtn.querySelector("span");

        elementosOcultos.forEach(function(elemento, elementoIndex) {
            if (elementoIndex === index) {
                if (spanArrow.classList.contains("top")) {
                    elemento.style.display = "flex";
                    spanArrow.classList.remove("top");
                    spanArrow.classList.add("bottom");
                } else {
                    elemento.style.display = "none";
                    spanArrow.classList.remove("bottom");
                    spanArrow.classList.add("top");
                }
            } else {
                elemento.style.display = "none";
                var otherButton = titleBtns[elementoIndex];
                var otherSpanArrow = otherButton.querySelector("span");
                otherSpanArrow.classList.remove("bottom");
                otherSpanArrow.classList.add("top");
            }
        });
    });
});

// Seleciona todos os contêineres roláveis
const scrollableContainers = document.querySelectorAll('.scrollable-container');

scrollableContainers.forEach(container => {
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        container.style.cursor = 'grabbing';
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 0.8; // Ajuste a sensibilidade de deslizamento conforme necessário
        container.scrollLeft = scrollLeft - walk;
    });
});