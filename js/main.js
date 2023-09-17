$(document).ready(function(){
    
    $nav = $('.nav')
    $toggleCollapse = $('.toggle-collapse')

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: ["<img src='./assets/nav2.png'>", "<img src='./assets/nav.png'>"]
    });
});