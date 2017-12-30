$(document).ready(function () {

    $("#phone").intlTelInput();

//obtenemos el botón que redireccionará la vista anterior:
var previousView = $('.previous-view-js')
//asociamos el evento click:
previousView.on('click' , function () {
    window.location.href = 'home.html';

});

//obtenemos el boton 'next-js' para redireccionar la página
var buttonNext = $('.next-js');
console.log(buttonNext);


});
