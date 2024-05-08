let parrafos = document.getElementsByTagName("p");
console.log(parrafos);

parrafos[2].textContent = "Un <strong>nuevo</strong> texto...";

// for (let i = 0; i < parrafos.length; i++) {
//   console.log(parrafos[i]);
// }

// parrafos = document.getElementsByClassName("destacado");
// console.log(parrafos);

let input = document.getElementsByName("nombre");
// console.log(input);

input = document.getElementById("nombre");
// console.log(input);
