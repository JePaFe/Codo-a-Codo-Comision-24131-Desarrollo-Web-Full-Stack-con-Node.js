class User {
  constructor(nombre, dni) {
    this.nombre = nombre;
    this.dni = dni;
    this.admin = false;
  }

  info() {
    return `Nombre: ${this.nombre}, DNI: ${this.dni}`;
  };
}

const user1 = new User("Maria", 23456789);
console.log(user1);

let texto = user1.info();
console.log(texto);

const user2 = new User("Pedro", 4567843456);
console.log(user2);

texto = user2.info();
console.log(texto);
