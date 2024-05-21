function multiplicar(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a != "number" || typeof b != "number") {
      reject("Los parámetros tienen que ser números");
    }
    setTimeout(() => {
      resolve({ num1: a, num2: b, result: a * b });
    }, Math.floor(Math.random() * (3000 - 1 + 1) + 1));
  });
}

// multiplicar(1, 2)
//   .then((response) => console.log(`${response.num1} x ${response.num2} = ${response.result}`))
//   .catch((error) => console.log(error));

// async function saludar() {}

// const saludar = async function () {};

const tabla = async () => {
  try {
    let response = await multiplicar(1, 2);
    console.log(`${response.num1} x ${response.num2} = ${response.result}`);

    response = await multiplicar(2, 2);
    console.log(`${response.num1} x ${response.num2} = ${response.result}`);

    response = await multiplicar(3, 2);
    console.log(`${response.num1} x ${response.num2} = ${response.result}`);
  } catch (error) {
    console.log(error);
  }
};

tabla();
