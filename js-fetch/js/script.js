// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => {
//     users.forEach((user) => {
//       console.log(user.name);
//     });
//   })
//   .catch((error) => console.log(error));

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((products) => console.log(products))
//   .catch((error) => console.log(error));

const getProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    console.log(products);
  } catch (error) {
    console.log(error);
  }
};

getProducts();
