// Импортируем функции
import * as flsFunctions from "./module/functions.js";
flsFunctions.isWebp();

import $ from "jquery";

// подключение стороних плагинов и библиотек Libs
// require('./vendor/test.js')

// Компоненты
import '../components/Preloader/_preloader.js';
import '../components/Btn-top/_btn-top.js';
// import '../components/Modal/_modal.js';
// import '../components/Accordion/_accordion.js';
// import '../components/Slick-slider/_slick-slider.js';
// import '../components/Tabs/_tabs.js';
// import '../components/Form/_inputMask.js';

// Пользовательские скрипты

// Burger Menu
$('.burger').click(function(event){
  $('.burger, .header__nav').toggleClass('active');
  $('body').toggleClass('fixed-block');
});

// Запрет перетаскивания ссылок и картинок
$("img, a").on("dragstart", function(event) { event.preventDefault(); });

// Отправка заявки на почту
//E-mail Ajax Send
// $("form").submit(function () { //Change
//   var th = $(this);
//   $.ajax({
//     type: "POST",
//     url: "mail.php", //Change
//     data: th.serialize()
//   }).done(function () {
//     window.location = "./thank-you.html";
//   });
//   return false;
// });
