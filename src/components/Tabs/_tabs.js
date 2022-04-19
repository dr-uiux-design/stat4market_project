// Tabs
var jsTriggers = document.querySelectorAll('.tabs__list_item'),
    jsContents = document.querySelectorAll('.tabs__content_item');

jsTriggers.forEach(function(trigger) {
   trigger.addEventListener('click', function() {
      var id = this.getAttribute('data-tab'),
          content = document.querySelector('.tabs__content_item[data-tab="'+id+'"]'),
          activeTrigger = document.querySelector('.tabs__list_item.active'),
          activeContent = document.querySelector('.tabs__content_item.active');

      activeTrigger.classList.remove('active'); // 1
      trigger.classList.add('active'); // 2

      activeContent.classList.remove('active'); // 3
      content.classList.add('active'); // 4
   });
});
