// console.log("Inicio del proceso");

// let suma = 0;
// for (let i = 0; i < 1000000; i++) {
//   suma += i;
// }

// console.log("Suma completa: ", suma);
// console.log("Fin del proceso");

// ---

// setTimeout(() => {
//   console.log("Pasaron 2 segundos");
// }, 2000);

// console.log("Primero: Este mensaje se muestra primero.");

// // setInterval()

// setTimeout(() => {
//   console.log("Tercero: Este mensaje se muestra después de 2 segundos.");
// }, 2000);

// console.log(
//   "Segundo: Este mensaje se muestra mientras esperamos el temporizador."
// );

// ---

function multiplicar(a, b, callback) {
  setTimeout(() => {
    callback(a, b, a * b);
  }, Math.floor(Math.random() * (3000 - 1 + 1) + 1));
}

// ----

// function resultado(num1, num2, result) {
//   console.log(`${num1} x ${num2} = ${result}`);
// }

// const resultado = (num1, num2, result) => {
//   console.log(`${num1} x ${num2} = ${result}`);
// };

// multiplicar(1, 2, resultado);

// multiplicar(2, 2, (num1, num2, result) => {
//   console.log(`${num1} x ${num2} = ${result}`);
// });

// ---

// let result;

// result = multiplicar(1, 2);
// console.log(`1 x 2 = ${result}`);

// result = multiplicar(2, 2);
// console.log(`2 x 2 = ${result}`);

// result = multiplicar(3, 2);
// console.log(`3 x 2 = ${result}`);

// console.log(Math.floor(Math.random() * (3000 - 1 + 1) + 1))

// ---

// function multiplicar(a, b, cb) {
//   setTimeout(() => {
//     cb(a, b, a * b);
//   }, Math.floor(Math.random() * (3000 - 1 + 1) + 1));
// }

// multiplicar(1, 2, (num1, num2, result) => {
//   console.log(`${num1} x ${num2} = ${result}`);
// });

// multiplicar(2, 2, (num1, num2, result) => {
//   console.log(`${num1} x ${num2} = ${result}`);
// });

// multiplicar(3, 2, (num1, num2, result) => {
//   console.log(`${num1} x ${num2} = ${result}`);
// });

// ---

multiplicar(1, 2, (num1, num2, result) => {
  console.log(`${num1} x ${num2} = ${result}`);

  multiplicar(2, 2, (num1, num2, result) => {
    console.log(`${num1} x ${num2} = ${result}`);

    multiplicar(3, 2, (num1, num2, result) => {
      console.log(`${num1} x ${num2} = ${result}`);
    });
  });
});
