// Burger Menu
$('.burger').click(function(event){
  $('.burger, .header__nav').toggleClass('active');
  $('body').toggleClass('fixed-block');
});
