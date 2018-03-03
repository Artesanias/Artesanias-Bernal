$(document).ready(function(){
   $("#botonn").click(function(evento){
      validarCorreo();
      validarContrasena();
      validarAmbos();
   });
});
  function validarContrasena(){ 
    var password= $('#password').val();
       if (/^[0-9a-zA-Z]+$/.test(password) ===false ){
        alert("Incorrecto, Coloca tu Contraseña");
    }
}
    function validarCorreo(){ 
    var correo= $('#email').val();
    if (/^\S+@\S+\.\S+$/.test(correo) ===false){
        alert("Incorrecto, Coloca tu email");
    }
}
  
    function validarAmbos(){
        var correo= $('#email').val();
          var password= $('#password').val();
   if(/^[0-9a-zA-Z]+$/.test(password) ===false || /^\S+@\S+\.\S+$/.test(correo) ===false ){
        
    } else {
        window.location.href = 'index.html';
    }
}
