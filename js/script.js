$(document).ready(function() {

    $('.links a').click(function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        // Use a função animate para rolar para a âncora com um deslocamento de 40px
        $('html, body').animate({
            scrollTop: $(target).offset().top - 40
        }, 500);
    });

    $('.menu').click(function(event) {
        event.preventDefault();
        $('.links').removeClass('disable').addClass('show');
        $('.menu').addClass('disable');
    });
    
    $('.close').click(function(event) {
        event.preventDefault();
        $('.links').removeClass('show');
        $('.menu').removeClass('disable');
    });
    
    $(document).click(function(event) {
        if (!$(event.target).closest('.links').length && !$(event.target).closest('.menu').length) {
            $('.links').removeClass('show');
            $('.menu').removeClass('disable');
        }
    });

    $(".titleBtn").click(function() {
        var $titleBtn = $(this);
        var $container = $titleBtn.next(".scrollable-container");
        var $spanArrow = $titleBtn.find("span");
    
        // Oculta todos os outros .scrollable-container
        $(".scrollable-container").not($container).addClass("disable");
    
        $container.each(function() {
            if ($spanArrow.hasClass("top")) {
                $(this).removeClass("disable");
                $spanArrow.removeClass("top").addClass("bottom");
            } else {
                $(this).addClass("disable");
                $spanArrow.removeClass("bottom").addClass("top");
            }
        });
    
        $(".titleBtn").not($titleBtn).each(function() {
            var otherButton = $(this);
            var otherSpanArrow = otherButton.find("span");
            otherSpanArrow.removeClass("bottom").addClass("top");
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

});