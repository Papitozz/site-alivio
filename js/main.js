/*Burger*/
var burger = $('.mob__burger');
var burgerLine = $('.mob__burger-line');
var navMob = $('.wrapper')

var bg = $('.bg')

burger.on('touchend, click', function () {
    burgerLine.toggleClass('active');
    if (burgerLine.hasClass('active')) {
        bg.show();
        navMob.addClass('active');
        $('body').addClass('fixed')
    } else {
        bg.hide();
        navMob.removeClass('active');
        $('body').removeClass('fixed');
    }
})

bg.on('touchend, click', function () {
    bg.hide();
    navMob.removeClass('active');
    burgerLine.removeClass('active');
    $('body').removeClass('fixed')
});