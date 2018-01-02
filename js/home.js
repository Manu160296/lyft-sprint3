$(document).ready(function() {
// obtenemos el botón sign-up para redireccinar la página:
  var signUp = $('.sign-up-js');
  signUp.on('click', function() {
    window.location.href = 'sign-up.html';
  });
});
