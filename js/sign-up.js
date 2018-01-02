
$('#phone').intlTelInput();

// obtenemos el botón que redireccionará la vista anterior:
var previousView = $('.previous-view-js');
// asociamos el evento click:
previousView.on('click', function() {
  window.location.href = 'home.html';
});

// obtenemos el input para validar la cantidad de digitos ingresada:

var inputNumber = $('.input-js');
// obtenemos el boton 'next-js' para redireccionar la página
var buttonNext = $('.next-js');

// asociamos el evento input:
inputNumber.on('input', function() {
  // expresión regular que valida entrada de numeros:
  var regExp = /^([0-9])*$/;
  // booleano para habilitar o deshabilitar boton:
  var validateNumber = false ;
  if (regExp.test($(this).val()) && $(this).val().length === 10) {
    validateNumber = true ;
    buttonNext.removeClass('disabled');
  } else {
    buttonNext.addClass('disabled');
  }
});

// funcion código aleatorio
function getRandomCode() {
  return Math.trunc(Math.random() * (999 - 100) + 100);
}

var randomCode ;
// funcion que retiene el codigo random para validarlo:
function tempRandomCode() {
  randomCode = getRandomCode();
  localStorage.prueba = randomCode;
}

// ascociamos el evento  click a buttonNext :
buttonNext.on('click', function(event) {
  event.preventDefault();
  tempRandomCode();
  alert('Tu código ' + 'LAB-' + randomCode);
  window.location.href = 'verify-phone-number.html';
});
