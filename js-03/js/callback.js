// function saludarConsola() {
//   console.log("Hola");
// }

// function saludarAlert() {
//   alert("Hola");
// }

// function saludarWrite() {
//   document.write("Hola");
// }

// saludarConsola();
// saludarAlert();
// saludarWrite();

// ---

function saludar(nombre, callback) {
  callback(`Hola ${nombre}`);
}

saludar("Juan", console.log);
saludar("Maria", alert);

function mensaje(texto) {
  document.write(texto);
}

saludar("Pedro", mensaje);
