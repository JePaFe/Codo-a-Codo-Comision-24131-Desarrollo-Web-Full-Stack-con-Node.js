const load = () => {
  const h2 = document.querySelector("h2");
  console.log(h2);

  // h2.onclick = () => {
  //   console.log("Hola desde h2 version 1");
  // };

  // h2.onclick = () => {
  //   console.log("Hola desde h2 version 2");
  // };

  h2.addEventListener("click", () => {
    console.log("Hola desde h2 version 1");
  });

  const clickH2 = () => {
    console.log("Hola desde h2 version 2");
  };

  h2.addEventListener("click", clickH2);
};

document.addEventListener("DOMContentLoaded", load);
