function User(nombre, dni) {
  this.nombre = nombre;
  this.dni = dni;
  this.admin = false;
}

User.prototype.info = function () {
  return `Nombre: ${this.nombre}, DNI: ${this.dni}`;
};

const user1 = new User("Maria", 23456789);
console.log(user1);

let texto = user1.info();
console.log(texto);
