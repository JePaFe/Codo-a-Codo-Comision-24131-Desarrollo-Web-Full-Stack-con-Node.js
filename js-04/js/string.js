const texto1 = new String("Texto 1...");
// console.log(texto1, texto1.length);

let texto2 = "Texto Texto 2";
// console.log(texto2, texto2.length);
// console.log(texto2.charAt(6));

texto2 = texto2.concat("...");
console.log(texto2);

// console.log(texto2.indexOf("t", 4));

// console.log(texto2[2])

console.log("✨".repeat(3));
console.log(texto2.toUpperCase());

console.log("     JUan     ".trim().toLowerCase());

console.log("Un Texto algo".replace("algo", "***"));

let otroTexto = "Un Texto ...";
let start = otroTexto.indexOf("Texto");
let end = "Texto".length + start;
console.log(otroTexto.substring(start, end));

// console.log(start, "Texto".length, "Texto".length + start);
