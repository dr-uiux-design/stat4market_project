/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
};

// Disable Scroll
export const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${(window.innerWidth - vars.bodyEl.offsetWidth)}px`;

  vars.htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
  vars.bodyEl.style.paddingRight = paddingOffset;
  vars.bodyEl.classList.add('dis-scroll');
  vars.bodyEl.dataset.position = pagePosition;
  vars.bodyEl.style.top = `-${pagePosition}px`;
}

// Enable Scroll
export const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(vars.bodyEl.dataset.position, 10);
  fixBlocks.forEach(el => { el.style.paddingRight = '0px'; });
  vars.bodyEl.style.paddingRight = '0px';

  vars.bodyEl.style.top = 'auto';
  vars.bodyEl.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  vars.bodyEl.removeAttribute('data-position');
  vars.htmlEl.style.scrollBehavior = 'smooth';
}

