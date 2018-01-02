$(document).ready(function() {
  // obtenemos el botón icon-js para redireccinar la página:
  var iconJs = $('.icon-js');
  iconJs.on('click', function() {
    window.location.href = 'sign-up.html';
  });

  // obtenemos el input para validar el codigo random:
  var codeInput = $('.code-input-js');
  var resendCode = $('.resend-js');
  var submit = $('.submit-js');
  var centinel = false;

  // asociamos el evento click a resendCode :
  resendCode.on('click', function(event) {
    event.preventDefault();
    tempRandomCode();
    alert('Tu código ' + 'LAB-' + randomCode) ;
  });
  // asociamos el evento input :
  codeInput.on('input', function() {
    if ($(this).val() === localStorage.prueba) {
      centinel = true ;
      submit.removeClass('disabled');
    } else {
      centinel = false;
      submit.addClass('disabled');
    }
  });

  submit.on('click', function() {
    event.preventDefault();
    if (centinel === true) {
      window.location.href = '../views/sign-up-2.html';
    }
  });
});
