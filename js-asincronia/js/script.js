// const numeros = [1, 2, 3, 4, 5];

// function mostrar(item) {
//   console.log(item);
// }

// numeros.forEach(mostrar);

// ---

const fnLog = (texto) => {
  document.write(texto);
};

// const mensajeLog = function (texto) {
//   texto += "!!!";
//   console.log(texto);
// };

// const mensajeAlert = function (texto) {
//   texto += "!!!";
//   alert(texto);
// };

// const mensajeOtroLog = function (texto) {
//   texto += "!!!";
//   fnLog(texto);
// };

const mensaje = (texto, callback) => {
  texto += "!!!";
  callback(texto);
};

mensaje("Un texto", console.log);
mensaje("Otro texto", alert);
mensaje("Otro texto mas", fnLog);
