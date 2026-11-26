# Ex03 To-Do List using JavaScript
## Date:

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="stars">✦　 ✧　　 ✦　　✧　 ✦</div>

    <main class="todo-container">

        <header class="header">
            <div class="purple-heart">💜</div>
            <h1>Love Yourself Diary</h1>
            <p>Make today a little more beautiful. ✨</p>
            <span class="quote">"Life goes on, so do your tasks"</span>
        </header>

        <section class="task-input-section">

            <input
                type="text"
                id="taskInput"
                placeholder="What is on your mind today?"
            >

            <button id="addTaskBtn">+ Add Task</button>

        </section>

        <section class="task-options">

            <select id="priority">
                <option value="Low">🌱 Low Priority</option>
                <option value="Medium">💜 Medium Priority</option>
                <option value="High">🔥 High Priority</option>
            </select>

            <input type="date" id="dueDate">

        </section>

        <section class="task-controls">

            <input
                type="text"
                id="searchInput"
                placeholder="🔍 Search your tasks..."
            >

            <div class="filters">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="pending">Pending</button>
                <button class="filter-btn" data-filter="completed">Completed</button>
            </div>

        </section>

        <section class="tasks-section">

            <h2>✨ Your Daily Goals</h2>

            <ul id="taskList"></ul>

        </section>

        <footer class="footer">

            <p id="taskCount">0 tasks remaining</p>

            <button id="clearCompletedBtn">
                Clear Completed
            </button>

        </footer>

        <div class="footer-message">
            <p>Spread love. Stay inspired. Keep going. 💜</p>
            <span>Made with love for the purple universe ✨</span>
        </div>

    </main>

    <script src="script.js"></script>

</body>
</html>
```

style.css

```
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
    padding: 50px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background:
        radial-gradient(circle at 15% 20%, #a78bfa 0%, transparent 30%),
        radial-gradient(circle at 85% 80%, #7e22ce 0%, transparent 35%),
        linear-gradient(135deg, #100522, #29104b, #16052f);
    color: white;
    overflow-x: hidden;
}

/* Background stars */

.stars {
    position: fixed;
    top: 5%;
    left: 5%;
    width: 90%;
    color: #e9d5ff;
    font-size: 30px;
    letter-spacing: 30px;
    opacity: 0.7;
    pointer-events: none;
    text-shadow: 0 0 15px #d8b4fe;
}

/* Main container */

.todo-container {
    width: 100%;
    max-width: 750px;
    padding: 40px;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.10);
    backdrop-filter: blur(18px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 50px rgba(168, 85, 247, 0.25);
    position: relative;
    z-index: 1;
}

/* Header */

.header {
    text-align: center;
    margin-bottom: 35px;
}

.purple-heart {
    font-size: 45px;
    margin-bottom: 10px;
    filter: drop-shadow(0 0 15px #c084fc);
}

.header h1 {
    font-size: 30px;
    font-weight: 800;
    letter-spacing: 2px;
    color: #f3e8ff;
    text-shadow: 0 0 15px #c084fc;
}

.header p {
    color: #e9d5ff;
    margin-top: 10px;
    font-size: 14px;
}

.quote {
    display: inline-block;
    margin-top: 18px;
    padding: 7px 18px;
    border: 1px solid #c084fc;
    border-radius: 30px;
    color: #e9d5ff;
    font-size: 12px;
}

/* Task input */

.task-input-section {
    display: flex;
    gap: 12px;
    margin-bottom: 15px;
}

input, select {
    font-family: inherit;
    padding: 13px;
    border: 1px solid rgba(216, 180, 254, 0.5);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.12);
    color: white;
    outline: none;
}

input::placeholder {
    color: #d8b4fe;
}

input:focus, select:focus {
    border-color: #e9d5ff;
    box-shadow: 0 0 10px rgba(192, 132, 252, 0.4);
}

#taskInput {
    flex: 1;
    min-width: 0;
}

button {
    font-family: inherit;
    border: none;
    border-radius: 10px;
    padding: 12px 18px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.3s ease;
}

#addTaskBtn {
    background: linear-gradient(135deg, #c084fc, #9333ea);
    color: white;
    box-shadow: 0 0 15px rgba(192, 132, 252, 0.4);
}

#addTaskBtn:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 25px #c084fc;
}

/* Priority and date */

.task-options {
    display: flex;
    gap: 12px;
    margin-bottom: 25px;
}

.task-options select,
.task-options input {
    flex: 1;
    min-width: 0;
}

select option {
    color: #241039;
}

/* Search and filters */

.task-controls {
    margin-bottom: 25px;
}

#searchInput {
    width: 100%;
    margin-bottom: 15px;
}

.filters {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.filter-btn {
    background: rgba(255, 255, 255, 0.12);
    color: #e9d5ff;
    border: 1px solid rgba(216, 180, 254, 0.3);
}

.filter-btn:hover,
.filter-btn.active {
    background: #a855f7;
    color: white;
    box-shadow: 0 0 12px rgba(168, 85, 247, 0.5);
}

/* Task list */

.tasks-section h2 {
    font-size: 19px;
    color: #e9d5ff;
    margin-bottom: 15px;
}

#taskList {
    list-style: none;
}

#taskList li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 16px;
    margin-bottom: 12px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.10);
    border: 1px solid rgba(216, 180, 254, 0.2);
    transition: 0.3s;
}

#taskList li:hover {
    background: rgba(192, 132, 252, 0.18);
    transform: translateX(4px);
}

.task-info {
    flex: 1;
    min-width: 0;
}

.task-info h3 {
    color: #fff;
    font-size: 15px;
    overflow-wrap: anywhere;
}

.task-info p {
    color: #d8b4fe;
    font-size: 11px;
    margin-top: 6px;
}

.completed h3 {
    text-decoration: line-through;
    opacity: 0.5;
}

.task-actions {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
}

.task-actions button {
    padding: 8px 10px;
    font-size: 11px;
}

.complete-btn {
    background: #a7f3d0;
    color: #064e3b;
}

.edit-btn {
    background: #fde68a;
    color: #78350f;
}

.delete-btn {
    background: #fda4af;
    color: #881337;
}

.task-actions button:hover {
    transform: scale(1.06);
}

/* Footer */

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 25px;
    padding-top: 18px;
    border-top: 1px solid rgba(216, 180, 254, 0.3);
}

#taskCount {
    color: #e9d5ff;
    font-size: 13px;
}

#clearCompletedBtn {
    background: #7e22ce;
    color: white;
}

#clearCompletedBtn:hover {
    background: #9333ea;
    box-shadow: 0 0 15px #a855f7;
}

/* Bottom message */

.footer-message {
    text-align: center;
    margin-top: 30px;
    color: #e9d5ff;
}

.footer-message p {
    font-size: 13px;
}

.footer-message span {
    display: block;
    margin-top: 8px;
    font-size: 10px;
    opacity: 0.7;
}

/* Mobile responsive design */

@media (max-width: 600px) {

    body {
        padding: 20px 12px;
    }

    .todo-container {
        padding: 25px 18px;
    }

    .header h1 {
        font-size: 22px;
    }

    .task-input-section {
        flex-direction: column;
    }

    .task-options {
        flex-direction: column;
    }

    #taskList li {
        flex-direction: column;
        align-items: flex-start;
    }

    .task-actions {
        width: 100%;
    }
}

```

script.js

```
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

```

## OUTPUT
<img width="959" height="501" alt="image" src="https://github.com/user-attachments/assets/2f90233c-74c7-4587-9d06-d325d14c5cfc" />

<img width="959" height="493" alt="image" src="https://github.com/user-attachments/assets/ffc3aff5-b6cf-4362-8c7f-d4f584779dea" />



## RESULT
The program for creating To-do list using JavaScript is executed successfully.
