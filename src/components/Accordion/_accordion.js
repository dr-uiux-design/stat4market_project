// // Accordon
// const accordions = document.querySelectorAll('.accordion__item');

// for(item of accordions) {
// 	item.addEventListener('click', function() {
// 		if(this.classList.contains('active')) {
// 			this.classList.remove('active');
// 		} else {
// 			for(el of accordions) {
// 				el.classList.remove('active');
// 			}
// 			this.classList.add('active');
// 		}
// 	})
// }

var accordion = (function (element) {

  var _getItem = function (elements, className) { // функция для получения элемента с указанным классом
    var element = undefined;
    elements.forEach(function (item) {
      if (item.classList.contains(className)) {
        element = item;
      }
    });
    return element;
  };

  return function () {
    var _mainElement = {}, // .accordion
      _items = {}, // .accordion-item
      _contents = {}; // .accordion-item-content


    var _actionClick = function (e) {
        if (!e.target.classList.contains('accordion__item_head')) { // прекращаем выполнение функции если кликнули не по заголовку
          return;
        }
        e.preventDefault(); // Отменям стандартное действие
        // получаем необходимые данные
        var header = e.target,
          item = header.parentElement,
          itemActive = _getItem(_items, 'show');

        if (itemActive === undefined) { // добавляем класс show к элементу (в зависимости от выбранного заголовка)
          item.classList.add('show');
        } else {
          // удаляем класс show у ткущего элемента
          itemActive.classList.remove('show');
          // если следующая вкладка не равна активной
          if (itemActive !== item) {
            // добавляем класс show к элементу (в зависимости от выбранного заголовка)
            item.classList.add('show');
          }
        }
      },
      _setupListeners = function () {
        // добавим к элементу аккордиона обработчик события click
        _mainElement.addEventListener('click', _actionClick);
      };

    return {
      init: function (element) {
        _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
        _items = _mainElement.querySelectorAll('.accordion__item');
        _setupListeners();
      }
    }

  }
})();

var accordion1 = accordion();
accordion1.init('#accordion');
