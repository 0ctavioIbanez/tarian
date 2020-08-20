//Pestañas
$('.opciones:first-child').addClass('active')

$('.cinta .opciones').on('click', function(e){
  $('.opciones').removeClass('active');
  $(this).addClass('active')
  var enlace = $(this).attr('href');
  $('.area-texto').fadeOut('fast');
  $(enlace).fadeIn('fast');
});


$('nav a').on('click', function(){
  var goto = $(this).attr('href');
  $('html,body').animate({scrollTop: goto.offset().top},500);
});

$(window).scroll(function(event) {
  var posicion = $(window).scrollTop();
  var ancho = $(window).width();

  //Desk version
  if (ancho >= 768) {
    if (posicion <= 200) {
      $('.img-logo').css({'transition':'all .3s ease','width':'30rem',
                          'position':'absolute', 'top':'15vh','filter':'brightness(1) invert(0)'});
    }
    else {
      $('.img-logo').css({'transition':'all .3s ease','position':'static','width':'100%',  'filter':'brightness(0) invert(1)'});
    }

  }

  //Mobile version
  else {
    if (posicion <= 200) {
      $('.img-logo').css({'transition':'all .3s ease','width':'20rem',
                          'position':'absolute', 'top':'calc(75vh - 5rem)','left':'calc(50% - 10rem)','filter':'brightness(1) invert(0)'});
      $('.img-logo img').css({'width':'100%'});
      $('.barra').css('overflow', 'visible');
    }
    else {
      $('.img-logo').css({'transition':'all .3s ease','top':'0','position':'static','width':'100%',  'filter':'brightness(0) invert(1)'});
      $('.img-logo img').css({'width':'99%'});
      $('.barra').css('overflow', 'hidden');
    }
  }


});



//Effectos formulario
$('.input-form').on('focus', function(){
  var inputName = $(this).attr('name');
  var levelUp = "label[for='"+inputName+"']";
  $( levelUp ).css({'transition':'all .3s ease', 'bottom':'4rem', 'color':'rgba(255, 255, 255, 0.70)' });
});

$('.input-form').on('blur', function(){
  var inputName = $(this).attr('name');
  var levelUp = "label[for='"+inputName+"']";
  if( $(this).val() != "" ){
  }
  else {
      $( levelUp ).css({'transition':'all .3s ease', 'bottom':'1rem', 'color':'white' });
  }
});

//Enivando datos formulario
$('#botonForm').on('click', (e) => {
  e.preventDefault();
  var nombre = $('.nombre').val();
  var apellido = $('.apellidos').val();
  var asunto = $('.asunto').val();
  var mensaje = $('.mensaje').val();

  const form = new FormData();
  form.append('nombre',nombre);
  form.append('apellido',apellido);
  form.append('asunto', asunto);
  form.append('mensaje',mensaje);

  const xhr = new XMLHttpRequest();
  xhr.open("POST","./php/mail.php",true);
  xhr.onload = function(){
    if (this.status === 200 ) {
        limpiar();
        setTimeout(function(){
          $('.mail-sent').fadeOut('slow');
        },2500);
      }
  }
  xhr.send(form);

  function limpiar(){
    $('input[type="text"]').val('');
    $('textarea').val("");
    $('.mail-sent').fadeIn('fast');

    $('label').css({'transition':'all .3s ease', 'bottom':'1rem', 'color':'white'});
  }

})


//Mobile menu
$('.burger').on('click', () => {
  toggle();
});

var valor = false;
function toggle(){
  valor = !valor;
  if (valor) {
    $('.mobile-menu').css({'transition':'all .3s ease', 'left':'0'});
  }
  else {
    $('.mobile-menu').css({'transition':'all .3s ease', 'left':'-100%'});
  }
}

$('.nav-mobile a').on('click', () => {
  toggle();
});


//Phone Effect
// $('.phone').hover(function() {
//   $('.num-phone').fadeIn("fast");
// }, function() {
//   $('.num-phone').fadeOut("slow");
// });

var phoneEffect = false;
$('.phone').click(function(event) {
  phoneEffect = !phoneEffect;
  if (phoneEffect) {
    $('.fa-phone').hide();
    $('.close').show();
    $('.num-phone').fadeIn("fast");
  }
  else {
    $('.close').hide();
    $('.fa-phone').show();
    $('.num-phone').fadeOut("slow");
  }
});


//Carrusel
$('.portada').slick({
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1
});



//ver más
$('#btn-silver').on('click', (arguments) => {
  $('.ver-mas-silver').slideToggle()
});

$('#btn-diamond').on('click', (arguments) => {
  $('.ver-mas-diamante').slideToggle();
});

$('#btn-gold').on('click', (arguments) => {
  $('.ver-mas-gold').slideToggle()
});

$('.close-container').on('click', (arguments) => {
  $('.ver-mas').slideUp()
})

//Card expand button
$('#infoButton').on('click', function(){
  $('.hidden-info').slideToggle("slow");
  if ($(this).val() == "Ver más") {
    $(this).val("Ocultar")
  }
  else {
    $(this).val("Ver más");
  }
})

//Tiempo whatsapp
var d = new Date();
var hora = d.getHours();
var saludo = "";
if (hora >= 12 && hora < 18) {
  saludo = "Buenas tardes, "
}
else if ( hora >= 18 && hora <= 23 ) {
  saludo = "Buenas noches, ";
}
else {
  saludo = "Buenos días, "
}

$('.whatsapp').attr("href", " https://wa.me/525587481456?text="+saludo+"quisiera%20saber%20más%20acerca%20de%20");
