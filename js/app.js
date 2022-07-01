$(document).ready(function(){
$('.slider').slick(
    {
       arrows:false,
       dots:true,
       appendDots:'.slider-dots',
       dotsClass:'dots'
    }
);


let scroll_down=document.querySelector('.scroll-down');
let times=document.querySelector('.times');
let mobileNav=document.querySelector('.mobile-nav'); 


scroll_down.addEventListener('click',function()
{
    mobileNav.classList.add('open');
}
);

times.addEventListener('click',function()
{
    mobileNav.classList.remove('open');

}
);


});
