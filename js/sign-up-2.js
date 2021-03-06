$(document).ready(function() {
// redireccionando pagina:
	 var previousView = $('.icon-prev-js');
  previousView.on('click', function() {
    window.location.href = 'verify-phone-number.html';
  });
  var $firstName = $('.first-name-js');
  var $lastName = $('.last-name-js');
  var $email = $('.email-js');
  var $checkbox = $('.checkbox-js');
  var $submitForm = $('.submit-form-js');
  // expresion regular para letras:
  var patternLetters = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
  // variables verificadoras:
  var verifyName = false;
  var verifyLastName = false;
  var verifyEmail = false;
  var verifyPassword = false;
  var verifyCheck = false;

  $firstName.on('input', function(event) {
	 if (patternLetters.test($(this).val())) {
			  verifyName = true;
			 activeButton();
	 } else {
			 verifyName = false;
			 desactiveButton();
	 }
  });

  $lastName.on('input', function(event) {
		 if (patternLetters.test($(this).val())) {
				 verifyLastName = true;
				 activeButton();
		 } else {
				 verifyLastName = false;
				 desactiveButton();
		 }
  });
  // asociamos en evento input :
  $email.on('input', function(event) {
		 var patternEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
	  if (patternEmail.test($(this).val())) {
				  verifyEmail = true;
				  activeButton();
		 } else {
      verifyEmail = false;
      desactiveButton();
    }
  });
  // asociamos el evento click:
  $checkbox.on('click', function(event) {
    if (event.target.checked) {
      verifyCheck = true;
      activeButton();
    } else {
      verifyCheck = false;
      desactiveButton();
    }
  });

  $submitForm.on('click', function(event) {
    event.preventDefault();
    window.location.href = '../views/close.html';
  });

  // funciones generales:
  function activeButton() {
    if (verifyName && verifyLastName && verifyEmail && verifyCheck) {
      $submitForm.attr('disabled', false);
    }
  }

  function desactiveButton() {
    $submitForm.attr('disabled', true);
  }
});
