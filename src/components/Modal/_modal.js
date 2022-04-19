import MicroModal from 'micromodal';

// Modal Form
MicroModal.init({
  openTrigger: 'data-custom-open',
  disableScroll: true,
  disableFocus: true,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true
})
$('[data-custom-open]').click(function() {
  $('.modal [name=form]').val($(this).data('form'))
})
$('[data-custom-close]').click(function() {
  $('.modal [name=form]').val('')
})

$('[data-custom-open]').click(function() {
  $('.modal [name=form-title]').val($(this).data('form-title'))
})
