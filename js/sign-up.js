$(document).ready(function () {

    $("#phone").intlTelInput();

//obtenemos el botón que redireccionará la vista anterior:
var previousView = $('.previous-view-js')
//asociamos el evento click:
previousView.on('click' , function () {
    window.location.href = 'home.html';

});

//obtenemos el input para validar la cantidad de digitos ingresada:

var inputNumber = $('.input-js');
//obtenemos el boton 'next-js' para redireccionar la página
var buttonNext = $('.next-js');

// asociamos el evento input:
inputNumber.on('input' , function () {
  // expresión regular que valida entrada de numeros:
  //  console.log($(this).val())
    var regExp = /^([0-9])*$/;
//booleano para habilitar o deshabilitar boton:
 var validateNumber = false ;
// console.log(regExp.test($(this).val()))
   if( regExp.test($(this).val()) && $(this).val().length === 10 ) {
        console.log('habilitado')
        validateNumber = true ;
        buttonNext.removeClass('disabled');      
    }  else {
        buttonNext.addClass('disabled');
    }

});

//ascociamos el evento  click a buttonNext :
   buttonNext.on('click' , function () {
    var randomCode = Math.trunc(Math.random() * (999 - 100) + 100)
       alert('Tu código ' + 'LAB-'+ randomCode)
    window.location.href = 'verify-phone-number.html';
   });


//console.log(buttonNext);


});
