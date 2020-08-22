// Opções para carrossel do slick
$('.slider').slick({
  draggable: true,
  arrows: true,
  dots: true,
  fade: true,
  speed: 900,
  infinite: true,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  touchThreshold: 100
})

// Evento para rolar tela ao clicar nos itens do menu
$('header a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top;
    
  $('html, body').animate({ 
    scrollTop: targetOffset - -4
  }, 1500);
});

/* Funções para abrir e fechar barra de navegação lateral */
function openNav() {
  document.getElementById("side-navbar").style.width = "200px";
}

function closeNav() {
  document.getElementById("side-navbar").style.width = "0";
}