// const user = new Object();

// user.nombre = "Juan";
// user.dni = 23456789;

const user1 = {
  nombre: "Juan",
  dni: 23456789,
  info() {
    return `Nombre: ${this.nombre}, DNI: ${this.dni}`;
  },
};

console.log(user1);

const texto = user1.info();
console.log(texto);

// user.nombre = "Juan Pablo";
// user["dni"] = 98765432;

// user.email = "x@x.com";

// console.log(user.nombre, user["dni"]);

// delete user.nombre;

// console.log(user);
