
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click',() =>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

document.addEventListener('click', e => {
    const isDropDownButton = e.target.matches("[data-dropdown-button]")
    if(!isDropDownButton && e.target.closest('[data-dropdown]')!= null)return

    let currentDropdown
    if(isDropDownButton){
       currentDropdown = e.target.closest("[data-dropdown]")
       currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown =>{
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active");
    })


})

$(window).scroll(function(){
    $(".logo").css("opacity",1 - $(window).scrollTop()/250)
});

$(window).scroll(function(){
    $(".scroll-down").css("opacity",1 - $(window).scrollTop()/1050)
});

$(window).scroll(function(){
    $(".scroll-down-p").css("opacity",1 - $(window).scrollTop()/1500)
});

$(document).on('scroll',function(){
    $('#intro-holder').css("left", Math.max(130 - 0.15*window.scrollY ) + "vh");
})

$(document).on('scroll',function(){
    $('#intro-holder2').css("right", Math.max(130 - 0.15*window.scrollY) + "vh");
})

$(window).scroll(function(){
    $(".intro").css("opacity",1 - $(window).scrollTop()/2500)
});

$(window).scroll(function(){
    $(".mid-part").css("opacity",0 + $(window).scrollTop()/500)
});

$(window).scroll(function(){
    $(".intro-year").css("opacity",1 - $(window).scrollTop()/1250)
});

//document.getElementById('animation').defaultPlaybackRate = 0.5;

