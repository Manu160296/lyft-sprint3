//$(document).ready(function () {

  //obtenemos el input para validar el codigo random:
  var codeInput = $('.code-input-js');
  var resendCode = $('.resend-js');
  var submit = $('.submit-js')
console.log(resendCode)
  //asociamos el evento click a resendCode :
  resendCode.on('click' , function(event){
event.preventDefault();
tempRandomCode ()
   alert('Tu código ' + 'LAB-'+ randomCode) ;
  })
  //asociamos el evento input :
  codeInput.on ('input' , function () {
  if($(this).val() === localStorage.prueba) {
    submit.removeClass('disabled'); 
  }  else {
    submit.addClass('disabled');
  }
  });

  submit.on('click' , function () {
      event.preventDefault();
      window.location.href = '../views/sign-up-2.html'
  });
//})
