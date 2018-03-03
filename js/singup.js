function createSpan (element, message) {
    if ($('.'+ element+ ' span').length <= 0) {        
        $('.'+ element).append('<span>'+ message + '</span>');
    }
}
$(document).ready(function(){
   $("#botonn").click(function(evento){
      validarCorreo();
      validarContrasena();
      validarNombre();
      validarAmbos();
   });
});
  function validarContrasena(){ 
    var password= $('#password').val();
       if (password.length>=7 === false ||/^[0-9a-zA-Z]+$/.test(password) ===false ){
         var message = "Password can't be blank and is too short (minimum is 7 characters)";
        createSpan('password', message);
	}
    else {
        $('.password span').remove();
    }
}

function validarNombre(){
        var name = $('#name').val();
      if(/^[a-zA-Z]+$/.test(name)===false){
        var message = "Login can't be blank";
        createSpan('name', message);
      }
    else {
        $('.name span').remove();
    }
}
    function validarCorreo(){ 
    var correo= $('#email').val();
    if (/^\S+@\S+\.\S+$/.test(correo) ===false){
        var message = "Email can't be blank";
        createSpan('email', message);
	}
    else {
        $('.email span').remove();
    }
}
  
    function validarAmbos(){
         var name = $('#name').val();
        var correo= $('#email').val();
           var password= $('#password').val();
   if(/^[a-zA-Z]+$/.test(name)===false || /^[0-9a-zA-Z]+$/.test(password) ===false ||password.length>=7 === false || /^\S+@\S+\.\S+$/.test(correo) ===false ){
        
        
    } else {
        window.location.href = 'index.html';
    }
}