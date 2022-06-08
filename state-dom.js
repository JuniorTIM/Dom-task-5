const list = document.getElementById("list");
const input = document.getElementById("input-task");
const button = document.getElementById("button-task");

const tasks = [
  {
    text: "Сделать домашнее задание",
    done: false,
  },

  {
    text: "Навести суету",
    done: false,
  },

  {
    text: "Доделать таски",
    done: true,
  },

  {
    text: "Освоить новую технологию",
    done: false,
  },

  {
    text: "Списать егэ",
    done: true,
  },
];

function render(arr) {
  list.textContent = "";
  for (let i = 0; i < arr.length; i++) {
    const task = document.createElement("div");
    task.classList.add("list__item");
    task.textContent = arr[i].text;

    const checkInput = document.createElement("input");
    checkInput.classList.add("item");
    checkInput.type = "checkbox";
    checkInput.checked = tasks[i].done
    checkInput.addEventListener("change", () => {
      checkTodo(i)
    })
    task.prepend(checkInput);

    task.addEventListener("change", () => {
      if (checkInput.checked) {
        task.style.textDecoration = "line-through";
        task.style.opacity = "0.3";
      } else {
        task.style.textDecoration = "none";
        task.style.opacity = "1";
      }
    });

    function checkTodo(i) {

    }

    const deleteTask = document.createElement("button");
    deleteTask.textContent = "x";
    deleteTask.classList.add("itemm");
    task.append(deleteTask);

    deleteTask.addEventListener("click", () => {
      task.remove();
    });

    list.append(task);
  }
}

render(tasks);

function remove(id) {
  tasks.splice(id, 1);
  render(tasks);
}

remove(6);

function addToDo(value) {
  const task = document.createElement("div");
  let result = {
    text: value,
    done: false,
  };
  tasks.push(result);
  list.append(task);
  render(tasks);
}

addToDo("Проснуться");
addToDo("Попить");

button.addEventListener("click", () => {
  if (input.value !== "") {
    addToDo(input.value);
    input.value = "";
  }
});
