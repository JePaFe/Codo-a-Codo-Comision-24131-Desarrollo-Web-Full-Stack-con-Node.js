// function saludar(nombre, apellido) {
//   console.log(`Hola ${nombre} ${apellido}`);
// }

// saludar("Juan", "Perez");
// saludar("Maria", "Garcia");

// ---

// function tablaMultiplicar(multiplicador, limite) {
//   for (let i = 1; i <= limite; i++) {
//     console.log(`${i} * ${multiplicador} = ${i * multiplicador}`);
//   }
// }

// const multiplicador = parseInt(prompt("Ingrese el multiplicador: "));

// tablaMultiplicar(multiplicador, 10);
// tablaMultiplicar(6, 12);

// ---

// function sumar(num1, num2) {
//   let suma = num1 + num2;
//   return suma;
// }

// let resultado;

// resultado = sumar(5, 2);
// console.log(`La suma es: ${resultado}`);

// console.log(`La suma es: ${sumar(9, 3)}`);

// console.log(sumar(6, 3));

// ---

function numeroMinimo(num1, num2) {
  //   if (num1 < num2) {
  //     return num1;
  //   }

  //   return num2;

  return num1 < num2 ? num1 : num2;

  console.log("Fin");
}

let minimo = numeroMinimo(7, 7);
console.log(minimo);
