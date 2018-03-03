// Array con las imagenes que se iran mostrando en la web
    var imagenes=new Array(
        'img/perfil/1.jpg',
        'img/perfil/2.jpg',
        'img/perfil/3.jpg'
    
    );
    //Funcion para cambiar la imagen
    function rotarImagenes()
    {
        // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
        var index=Math.floor((Math.random()*imagenes.length));
 
        // cambiamos la imagen
        document.getElementById("imagen").src=imagenes[index];
    }
    //Función que se ejecuta una vez cargada la página
    onload=function()
    {
        // Cargamos una imagen aleatoria
        rotarImagenes();
 
        // Indicamos que cada 2 segundos cambie la imagen
        setInterval(rotarImagenes,2000);
    }
    
    
$(document).ready(function(){

  var banner = $(".animate");
  
  for (var i=0; i<999; i++) {
  
    banner.css("opacity", "1");
    banner.animate({left: 250}, 1000);
    
    for (var k=0; k<5; k++) {
      banner.animate({opacity: 0}, 600);
      banner.animate({opacity: 1}, 600);   
    }
    
    banner.delay(2000).animate({left: 500}, 1000);
    banner.animate({left: -600}, 0); 
    
  }
 
}); 