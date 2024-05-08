const main = document.querySelector("main");

// const section = document.createElement("section");

// const h2 = document.createElement("h2");

// // const text = document.createTextNode("Productos");
// // h2.appendChild(text);
// h2.textContent = "Productos";

// section.appendChild(h2);

// console.log(section);

// main.appendChild(section);

const title = "Productos";

const html = `
    <section>
        <h2>${title}</h2>
    </section>
`;

main.innerHTML += html;

const small = document.querySelector("small");

// const otroSmall = small.cloneNode(true);
// otroSmall.textContent = 2025;

small.className = "footer__small";
small.style.color = "orange";

// small.remove();

console.log(small);
