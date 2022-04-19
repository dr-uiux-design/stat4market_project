// Btn-top
$(function () {
  $('.btn-top').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 500);
  })
})
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $('.btn-top').fadeIn();
  } else {
    $('.btn-top').fadeOut();
  }
});
