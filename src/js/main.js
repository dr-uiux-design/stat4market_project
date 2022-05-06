// Импортируем функции
import * as flsFunctions from "./module/functions.js";
flsFunctions.isWebp();

import $ from "jquery";

// Burger Menu
$('.burger').click(function(event){
  $('.burger, .menu-mob').toggleClass('active');
  $('body').toggleClass('fixed-block');
});

// Запрет перетаскивания ссылок и картинок
$("img, a").on("dragstart", function(event) { event.preventDefault(); });

// Preloader
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}
