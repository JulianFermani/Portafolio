
// Nombre de discord
function mostrarDiscord() {
  alert('¡Buscame como Julián#7777!');
}

 // TEXTO H1

 new TypeIt(".main__h1", {
   strings  : ["¡Hola! Me llamo <span>Julian</span> y"," soy desarrollador web","<span>frontend</span>"],
   speed: 100,
   waitUntilVisible: true
 }).go();

// TEXTO DE PROJECTS

const instance = new TypeIt(".projects__ad", {
  strings: ["Proyectos aún en construcción, disculpe las molestias."],
  waitUntilVisible: true,
  speed: 100,
}).go();
