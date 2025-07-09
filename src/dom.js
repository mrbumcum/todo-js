import { createTodo } from "./todo";

export function updateTodos(currentProject) {
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


export function updateProjects(projectList) {
    const projectContainer = document.querySelector('.project-container');
    clear(projectContainer);

    projectList.forEach((project) => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project-item");

        const projectIcon = document.createElement("div");
        projectIcon.classList.add("project-icon");

        const projectName = document.createElement("div");
        projectName.classList.add("project-name");
    });    
}

export function openProjectCreation() {
    const projectModal = document.getElementById("projectModal");
    const addProjectBtn = document.getElementById("addProject");

    addProjectBtn.addEventListener("click", function(event) {
        projectModal.showModal();
    })
}

export function projectCreation(projectList) {
    const projectForm = document.getElementById("projectForm");

    projectForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(projectForm);
        const projectTitle = formData.get("projectTitle");
        const newProject = createProject(projectTitle);
        projectList.push(newProject);
        updateProjects(projectList);
        projectModal.close();
    })
}

export function openTodoCreation() {
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

export function todoCreation (currentProject) {
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
        
        updateTodos(currentProject);
        closeTodoCreation();
    })
}



function clear(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}