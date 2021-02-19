
// Nombre de discord
function mostrarDiscord() {
  alert('¡Buscame como Julián#7777!');
}

// Desplazamiento de sections
window.sr = ScrollReveal();

  sr.reveal('.nav__li', {
    duration: 2000,
    origin: 'top',
    distance: '1000px'
  });

// Main h1
  sr.reveal('.main__h1', {
    duration: 2000,
    origin: 'right',
    distance: '-1000px',
  });

// Ilustracion del main
  sr.reveal('.main__svg', {
      duration: 2000,
      origin: 'left',
      distance: '-1000px',
  });

// Section aboutme
  sr.reveal('.aboutme__contenedor', {
      duration: 2000,
      origin: 'bottom',
      distance: '1000px',
  });

// Filas del section skills
  sr.reveal('.primerFila', {
    duration: 1500,
    origin: 'bottom',
    distance: '1000px',
  })

  sr.reveal('.segundaFila', {
    duration: 2000,
    origin: 'bottom',
    distance: '1000px',
  })

  sr.reveal('.tercerFila', {
    duration: 2500,
    origin: 'bottom',
    distance: '1000px',
  })

  sr.reveal('.cuartaFila', {
    duration: 3000,
    origin: 'bottom',
    distance: '1000px',
  })
