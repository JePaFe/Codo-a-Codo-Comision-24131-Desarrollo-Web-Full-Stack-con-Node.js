let tasks = [];

const form = document.querySelector(".form");
const taskInput = document.querySelector("#taskInput");
// const taskInput = document.getElementById("taskInput");
const taskList = document.querySelector("#taskList");

// Muestra las tareas en el HTML
const renderTasks = () => {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    // const li = document.createElement('li')

    // const p = document.createElement('p')
    // p.textContent = 'Tarea 1'

    // const div = document.createElement('div')

    const html = `
            <li data-id="${task.id}" class="tasks__item">
                <p class="${task.complete && "done"}">${task.title}</p>
                <div>
                    <i class="bx bx-check"></i>
                    <i class="bx bx-trash"></i>
                </div>
            </li>
        `;

    taskList.innerHTML += html;
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(event);

  const title = taskInput.value.trim();

  let erroresValidacion = false;

  //   if ("x@x.com".indexOf("@") == -1) {
  //     erroresValidacion = true;
  //   }

  if (title.length < 3) {
    erroresValidacion = true;

    const error = document.querySelector(".error");
    error.textContent = "La tarea tiene que tener 3 caracteres o mas";

    setTimeout(() => {
      error.textContent = "";
    }, 2000);
  }

  if (!erroresValidacion) {
    // console.log(title);
    const task = {
      id: Date.now(),
      title: title,
      complete: false,
    };
    // console.log(task);

    tasks.push(task);
    console.log(tasks);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";
    // form.reset();

    renderTasks();
  }

  //   if (title.length >= 3) {
  //     console.log(title);
  //   } else {
  //     // alert("La tarea tiene que tener 3 caracteres o mas");

  //     const error = document.querySelector(".error");
  //     error.textContent = "La tarea tiene que tener 3 caracteres o mas";

  //     setTimeout(() => {
  //       error.textContent = "";
  //     }, 2000);
  //   }
});

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("bx-check")) {
    const id = event.target.closest("li").dataset.id;
    const task = tasks.find((task) => task.id == id);
    // console.log(task);

    task.complete = !task.complete;
    // console.log(task);

    // renderTasks();
    event.target.closest("li").querySelector("p").classList.toggle("done");

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  if (event.target.classList.contains("bx-trash")) {
    const id = event.target.closest("li").dataset.id;
    const taskindex = tasks.findIndex((task) => task.id == id);

    tasks.splice(taskindex, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    event.target.closest("li").remove();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  renderTasks();

  // No funciona
  //   const check = document.querySelector(".bx-check");
  //   check.addEventListener("click", (event) => {
  //     console.log(event.target);
  //   });
});
