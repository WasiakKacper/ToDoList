const done = document.getElementById("done_wrapper");

done.addEventListener("dragover", (e) => {
  e.preventDefault();
});

done.addEventListener("drop", (e) => {
  e.preventDefault();
  const currentTask = document.querySelector(".dragging");
  done.appendChild(currentTask);
  currentTask.classList.add("done");

  //Cut form sotrage
  const cutFromStorage = () => {
    let tasks = [];
    tasks = JSON.parse(localStorage.getItem("task"));
    const index = tasks.indexOf(document.querySelector(".dragging").innerText);
    tasks.splice(index, 1);
    localStorage.setItem("task", JSON.stringify(tasks));
  };

  cutFromStorage();
});

const todo = document.getElementById("todo_wrapper");

todo.addEventListener("dragover", (e) => {
  e.preventDefault();
});

todo.addEventListener("drop", () => {
  const currentTask = document.querySelector(".dragging");
  const value = currentTask.innerText;
  todo.appendChild(currentTask);

  //Function saveing tasks in local storage
  const saveInStorage = () => {
    let tasks = [];
    tasks = JSON.parse(localStorage.getItem("task"));
    const value = document.querySelector(".done").innerText;

    tasks.push(value);
    localStorage.setItem("task", JSON.stringify(tasks));
  };
  saveInStorage();

  currentTask.classList.remove("done");
});
