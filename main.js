$(function() {
  function closeModal() {
    $('#js-language-modal').hide();
  }

  function displayTurkishAlert() {
    $('#js-alert').show();
  }

  $('#js-turkish-language').click(function () {
    closeModal();
    displayTurkishAlert();
  });

  $('#js-norwegian-language').click(function () {
    closeModal();
  });

  $('#js-close-modal').click(function () {
    closeModal();
  });
});
