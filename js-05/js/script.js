// const myArray = new Array(6, 2, true, "Texto");
// // console.log(myArray);

// const letras = ["a", "b", "d"];
// console.log(letras);

// const otrasLetras = ["c", "d"];
// console.log(otrasLetras);

// const abecedario = letras.concat(otrasLetras, ["e", "f"]);
// console.log(abecedario);

// console.log(abecedario.indexOf("z"));

// letras[2] = "c";

// // letras[3] = "d";
// letras[letras.length] = "d";

// console.log(letras);

// console.log(letras[1]);
// console.log(letras[10]);

// console.log(letras.length);
// console.log(letras[letras.length - 1]);

// Ciclos

// for(let i = 0; i < letras.length; i++) {
//     console.log(letras[i])
// }

// Métodos

// const dias = ["Martes", "Miércoles", "Friday", "Sábado"];

// // dias[4] = "Domingo";
// // dias[dias.length] = "Domingo";

// dias.push("Domingo", "Osvaldo");

// let dia;
// dia = dias.pop();

// dias.unshift("Lunes");
// dia = dias.shift();

// console.log(dias, dia);

// const numeros = [3, 2, 5, 7, 2, 8];

// console.log(numeros.lastIndexOf(2));

const dias = ["Martes", "Miércoles", "Friday", "Sábado"];

dias.splice(0, 0, "Lunes"); // unshift
dias.splice(dias.length, 0, "Domingo", "Osvaldo"); // push

let indexFriday = dias.indexOf("Friday");
// console.log(indexFriday);

// dias.splice(indexFriday, 1); // Borrar
dias.splice(indexFriday, 1, "Jueves", "Viernes"); // Reemplazar
dias.splice(dias.length - 1, 1); // Eliminar

// console.log(dias);

// const algunosDias = dias.slice(5, 7);
// console.log(algunosDias);

// console.log(dias.reverse());
// console.log(dias.sort());

const numeros = [3, 2, 4, 20, 50, 5, 5, 8, 100, 3000, 30, 1];

// function compareFn(a, b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }

// console.log(numeros.sort((a, b) => a - b));

// function mostrarDia(dia) {
//   console.log(dia);
// }

// const mostrarDia = function (dia) {
//   console.log(dia);
// };

// const mostrarDia = dia => console.log(dia);

// dias.forEach(dia => console.log(dia));

// console.log(numeros);

// function fnParesImpares(numero) {
//   if (numero % 2 == 0) {
//     return "par";
//   } else {
//     return "impar";
//   }
// }

// const textosParesImpares = numeros.map(fnParesImpares);
// console.log(textosParesImpares);

// const multiplicados = numeros.map((numero) => numero * 3);
// console.log(multiplicados);

// const cloneNumeros = numeros.map((numero) => numero);
// console.log(cloneNumeros);

// function filtrarNumeros(numero) {
//   if (numero >= 15) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function filtrarNumeros(numero) {
//   if (numero >= 15) {
//     return true;
//   }

//   return false;
// }

// function filtrarNumeros(numero) {
//   return numero >= 15;
// }

// const filtrarNumeros = function (numero) {
//   return numero >= 15;
// };

// const filtrarNumeros = numero => numero >= 15;

// const numerosFiltrados = numeros.filter(numero => numero >= 15);
// console.log(numerosFiltrados);

console.log(dias);

// console.log(dias.findIndex((dia) => dia == "Jueves"));
// console.log(dias.indexOf("Jueves"));

// console.log(dias.find((dia) => dia == "Osvaldo"));

// for (let index in dias) {
//   console.log(index, dias[index]);
// }

// for (let elemento of dias) {
//   console.log(elemento);
// }

const user = {
  nombre: "Juan",
  dni: 34567890,
};
console.log(user);

for (let key in user) {
  console.log(key, user[key]);
}
