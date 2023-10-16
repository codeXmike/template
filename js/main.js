const responsive = {
    250:{
        items: 1
    },
    500:{
        items: 2
    },
    700:{
        items: 3
    }
}
function search_templates(){
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('template');

    for (i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display="none"    
        }
        else{
            x[i].style.display="list-item"
        }
    }
}
$(document).ready(function(){
    
    $nav = $('.nav')
    $toggleCollapse = $('.toggle-collapse')

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    $products = $('.products')
    $extras = $('.extras')

    $products.click(function(){
        $extras.toggleClass('show');
        $nav.toggleClass('increase')
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: ["<img src='./assets/nav2.png'>", "<img src='./assets/nav.png'>"],
        responsive: responsive
    });
});