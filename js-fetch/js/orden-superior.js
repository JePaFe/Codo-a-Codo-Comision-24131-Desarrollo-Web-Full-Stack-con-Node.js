// function sumar(a, b) {
//   return a + b;
// }

// function calculadora(num1, num2, operacion) {
//   return operacion(num1, num2);
// }

// const resultado = calculadora(3, 5, sumar);
// console.log(resultado);

// ---

// function saludar() {
//   return (nombre) => {
//     console.log(`Hola ${nombre}`);
//   };
// }

// const saludo = saludar();
// saludo("Maria");

// ---

function saludar() {
  const apellido = "Perez";
  return (nombre) => {
    console.log(`Hola ${nombre} ${apellido}`);
  };
}

const saludo = saludar();
saludo("Maria");

// ---

(() => {

})