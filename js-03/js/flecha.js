// function saludar() {
//   console.log(`Hola`);
// }

// const saludar = function () {
//   console.log(`Hola`);
// };

// const saludar = () => console.log(`Hola`);

// saludar();

// ---

// function sumar(num1, num2) {
//   let suma = num1 + num2;
//   return suma;
// }

// const sumar = function (num1, num2) {
//   let suma = num1 + num2;
//   return suma;
// }

// const sumar = (num1, num2) => {
//   let suma = num1 + num2;
//   return suma;
// };

// const sumar = (num1, num2) => num1 + num2;

// let resultado;

// resultado = sumar(5, 4);
// console.log(`La suma es: ${resultado}`);

// ---

// function saludar(nombre) {
//   console.log(`Hola ${nombre}`);
// }

// const saludar = function (nombre) {
//   console.log(`Hola ${nombre}`);
// };

const saludar = nombre => console.log(`Hola ${nombre}`);

saludar("Juan");
