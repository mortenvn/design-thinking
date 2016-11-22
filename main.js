$(function() {
  function closeModal() {
    $('#js-language-modal').hide();
  }

  function displayTurkishAlert() {
    $('#js-alert').show();
  }

  $('#js-english-language').click(function () {
    closeModal();
  });

  $('#js-turkish-language').click(function () {
    closeModal();
    displayTurkishAlert();
  });
});
