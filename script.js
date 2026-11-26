// Get HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const priorityInput = document.getElementById("priority");
const dueDateInput = document.getElementById("dueDate");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const taskCount = document.getElementById("taskCount");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

// Load saved tasks
let tasks = JSON.parse(localStorage.getItem("purpleTasks")) || [];
let currentFilter = "all";

// Save tasks in Local Storage
function saveTasks() {
    localStorage.setItem("purpleTasks", JSON.stringify(tasks));
}

// Display tasks
function displayTasks() {
    taskList.innerHTML = "";

    const searchText = searchInput.value.toLowerCase();

    const filteredTasks = tasks.filter(task => {
        const matchesSearch = task.text.toLowerCase().includes(searchText);

        const matchesFilter =
            currentFilter === "all" ||
            (currentFilter === "pending" && !task.completed) ||
            (currentFilter === "completed" && task.completed);

        return matchesSearch && matchesFilter;
    });

    if (filteredTasks.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.textContent = tasks.length === 0
            ? "No tasks yet. Let's make today amazing! ✨"
            : "No matching tasks found. 💜";

        taskList.appendChild(emptyMessage);
    }

    filteredTasks.forEach(task => {
        const li = document.createElement("li");

        const taskInfo = document.createElement("div");
        taskInfo.className = task.completed
            ? "task-info completed"
            : "task-info";

        const title = document.createElement("h3");
        title.textContent = task.text;

        const details = document.createElement("p");
        details.textContent =
            `Priority: ${task.priority} | Due: ${task.dueDate || "No date"}`;

        taskInfo.append(title, details);

        const actions = document.createElement("div");
        actions.className = "task-actions";

        const completeBtn = document.createElement("button");
        completeBtn.textContent = task.completed ? "Undo" : "Complete";
        completeBtn.className = "complete-btn";
        completeBtn.onclick = () => toggleTask(task.id);

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.onclick = () => editTask(task.id);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = () => deleteTask(task.id);

        actions.append(completeBtn, editBtn, deleteBtn);
        li.append(taskInfo, actions);

        taskList.appendChild(li);
    });

    const remaining = tasks.filter(task => !task.completed).length;
    taskCount.textContent = `${remaining} tasks remaining 💜`;
}

// Add a new task
function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task first! 💜");
        return;
    }

    const task = {
        id: Date.now(),
        text: text,
        priority: priorityInput.value,
        dueDate: dueDateInput.value,
        completed: false
    };

    tasks.push(task);

    saveTasks();
    displayTasks();

    taskInput.value = "";
    dueDateInput.value = "";
    priorityInput.value = "Low";
}

// Complete or undo a task
function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id
            ? { ...task, completed: !task.completed }
            : task
    );

    saveTasks();
    displayTasks();
}

// Edit a task
function editTask(id) {
    const task = tasks.find(task => task.id === id);

    const updatedText = prompt("Edit your task:", task.text);

    if (updatedText === null) return;

    if (updatedText.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }

    task.text = updatedText.trim();

    saveTasks();
    displayTasks();
}

// Delete a task
function deleteTask(id) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks = tasks.filter(task => task.id !== id);

        saveTasks();
        displayTasks();
    }
}

// Filter tasks
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        displayTasks();
    });
});

// Search tasks
searchInput.addEventListener("input", displayTasks);

// Clear completed tasks
clearCompletedBtn.addEventListener("click", () => {
    if (tasks.some(task => task.completed)) {
        if (confirm("Clear all completed tasks?")) {
            tasks = tasks.filter(task => !task.completed);

            saveTasks();
            displayTasks();
        }
    } else {
        alert("There are no completed tasks to clear!");
    }
});

// Add task using button
addTaskBtn.addEventListener("click", addTask);

// Add task using Enter key
taskInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        addTask();
    }
});

// Show saved tasks when page opens
displayTasks();