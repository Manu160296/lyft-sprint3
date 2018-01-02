$(document).ready(function() {
  // obtenemos el botón sign-up para redireccinar la página:
  var returnStart = $('.home-js');
  returnStart.on('click', function() {
    window.location.href = 'home.html';
  });
});
