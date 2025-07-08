import { TodoItem, createTodo } from "./todo";
import { compareAsc, format } from "date-fns";


// <div class="todo-item">
    // <button class="toggleComplete">+</button>
    // <div class="todo-information">
    //     <div class="todo-title"></div>
    //     <div class="todo-notes"></div>
    //     <div class="todo-tags"></div>
    //     <div class="todo-date"></div>
    //     <div class="todo-misc">
    //         <div id="addDate"></div>
    //         <div id="addTag"></div>
    //     </div>
    // </div>
// </div>

export function displayTodoItems(currentProject) {
    const todoContainer = document.querySelector('.todo-container');
    clear(todoContainer);

    currentProject.todoList.forEach((todoItem) => {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo-item');

        const toggleButton = document.createElement('button');
        toggleButton.classList.add('toggleComplete');
        toggleButton.textContent = '+';

        const todoInfo = document.createElement('div');
        todoInfo.classList.add('todo-information');

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('todo-title');
        titleDiv.textContent = todoItem.title;

        const notesDiv = document.createElement('div');
        notesDiv.classList.add('todo-notes');
        notesDiv.textContent = todoItem.notes;

        const tagsDiv = document.createElement('div');
        tagsDiv.classList.add('todo-tags');
        tagsDiv.textContent = todoItem.tags.join(', ');

        const dateDiv = document.createElement('div');
        dateDiv.classList.add('todo-date');


        const addDateDiv = document.createElement('div');
        addDateDiv.id = 'addDate';

        const addTagDiv = document.createElement('div');
        addTagDiv.id = 'addTag';

        todoInfo.appendChild(titleDiv);
        todoInfo.appendChild(notesDiv);
        todoInfo.appendChild(tagsDiv);
        todoInfo.appendChild(dateDiv);

        todoElement.appendChild(toggleButton);
        todoElement.appendChild(todoInfo);

        todoContainer.appendChild(todoElement);
    });
}


// <div class="project-item">
//     <div class="project-icon"></div>
//     <div class="project-name"></div>
// </div>


export function displayProjects(projectList) {
    const projectContainer = document.querySelector('.project-container');
    clear(projectContainer);

    projectList.forEach((project) => {
        const titleDiv = document.createElement("div");
        titleDiv.textContent = project.title;
    });    
}


export function displayTodoCreation() {
    const todoModal = document.getElementById("todoModal");
    const addTodo = document.getElementById("addTodo");

    addTodo.addEventListener("click", ()=>{
        todoModal.showModal();
    })
}

export function closeTodoCreation() {
    const todoModal = document.getElementById("todoModal");
    const closeModalBtn = document.getElementById("closeModalBtn");

    closeModalBtn.addEventListener("click", () => {
        todoModal.close()
    })
}

export function getTodoFormData(currentProject) {
    const form = document.getElementById("todoForm");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const formData = new FormData(form);


        const title = formData.get("title");
        const notes = formData.get("notes") || "";
        // Handle date input later
        const date = formData.get("date") || "";
        const priority = formData.get("priority") || "medium";
        const tags = formData.get("tags")
        .split(",")
        .map(tag => tag.trim())
        .filter(tag => tag !== "");

        const newTodo = createTodo(title, tags, notes, priority);
        currentProject.addTodo(newTodo);
    })
}



function clear(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}