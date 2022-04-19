import "slick-carousel"

$('.slider').slick({
  // главная настройка
  infinite: true, //зацикленный слайдер - после последнего слайда идёт первый
  slidesToShow: 3, //сколько слайдов показывать в карусели
  slidesToScroll: 1, // сколько слайдов прокручивать за раз
  autoplay: true, // автопрокрутка
  autoplaySpeed: 3000, // скорость пролистывания
  speed: 1000, // скорость пролистывания
  pauseOnHover: true, // останавливает перелистывание слайдов при наведении курсора мыши
  // cssEase: 'ease-out', // плавность анимации прокрутки
  draggable: true, // возможность перелистывания слайдов зажатием мышки
  // respondTo: true, // вызывает реакцию на изменения ширины окна браузера
  // variableWidth: true, // адаптирует ширину контейнеров слайдера под ширину каждой показываемой картинки

  // элементы управления
  arrows: true, // стрелки
  dots: true, // точки

  // Разная ширина и высота для слайдов
  // variableWidth: true,
  // adaptiveHeight: true,

  //адаптивность
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: false,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
