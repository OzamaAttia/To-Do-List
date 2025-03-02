let taskInput = document.querySelector("#taskInput");
let taskBtn = document.querySelector("#taskBtn");
let taskList = document.querySelector("#taskList");

// Load Tasks From LocalStorage When The Page Loads
document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
});

// Add a New Task
taskBtn.addEventListener("click", () => {
    if (taskInput.value.trim() !== "") {
        addTask(taskInput.value);
        saveTasks();
        taskInput.value = "";
    }
});

// Function To Add a Task To The Do,
let addTask = (taskText) => {
    let task = document.createElement("li");
    task.innerHTML = `<div class="check"></div> ${taskText} <span class= "delBtn">Delete</span>`;
    task.className = "task";
    taskList.prepend(task);

    // Add Line Through When Click On Task
    task.addEventListener("click", (e) => {
        task.classList.toggle("done");

        // Add Check Mark When Click On Task
        let check = task.querySelector(".check");
        if (task.classList.contains("done")) {
            check.innerHTML = "&#10003";
        } else {
            check.innerHTML = "";
        }

        // Save Tasks To LocalStorage
        saveTasks();
    });

    // Add Event Listener To The Delete Button
    let delBtn = document.querySelector(".delBtn");
    delBtn.addEventListener("click", () => {
        task.remove();
        saveTasks();
    });
};

// Function To Save Tasks To LocalStorage
let saveTasks = () => {
    let tasks = [];
    document.querySelectorAll("#taskList .task").forEach((task) => {
        tasks.push(task.textContent.replace("Delete", "").trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Function To Load Tasks From LocalStorage
let loadTasks = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((taskText) => {
        addTask(taskText);
    });
};

// localStorage.clear()
// --------------------------------
// <<<<<<<<<<= [ => Proses <= ] =>>>>>>>>>>
// --------------------------------

// let tasks = document.querySelectorAll("#taskList .task");
// let dleBtn = document.querySelectorAll("#taskList .task .delBtn");

//  -------------------------------

// if (window.localStorage.length > 0) {
//     // taskList.value = window.localStorage.getItem("task");
//     loadTasks();
// }

//  -------------------------------

// if (window.localStorage.length > 0) {
//     taskList.value = window.localStorage.getItem("tasks");
// }

// ------------------------

// taskBtn.addEventListener("click", () => {
//     let task = document.createElement("li");
//     task.textContent = `${taskInput.value}`;
//     let btn = document.createElement("span");
//     btn.className = "delBtn";
//     task.appendChild(btn);

//     // tasks.forEach(() => {
//     //     window.localStorage.setItem("task", tasks.value);
//     // });

//     tasks.forEach((e) => {
//         window.localStorage.setItem("task", e.value);
//     });

//     task.className = "task";
//     taskList.prepend(task);

//     window.localStorage.setItem("task", tasks.value);

//     taskInput.value = "";
// });

//  -------------------------------

//  => [NOT ALL MINE]
// tasks.forEach((e) => {
//     e.addEventListener("click", (e) => {
//         e.target.style.textDecoration =
//             e.target.style.textDecoration === "line-through"
//                 ? "none"
//                 : "line-through";
//     });
// });

//  -------------------------------

// dleBtn.forEach((e) => {
//     e.textContent = "Delete";
//     e.addEventListener("click", () => {
//         e.parentElement.remove();
//     });
// });

//  -------------------------------

// taskList.addEventListener("click", (e) => {
//     e.target.remove();
//     if (e.target.classList.contains("task")) {
//         // Update localStorage
//         let taskText = e.target.textContent;
//         tasks = tasks.filter((task) => task !== taskText);
//         window.localStorage.setItem("tasks", JSON.stringify(tasks));
//     }
// });
