import { Todo } from "./todo.js";
import { Project } from "./project.js";

function clear(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
// TODO: Add CRUD for TODO
export function openAddProjectModal() {
    const projectModal = document.getElementById("projectModal")
    projectModal.style.display = "block"
};

export function closeAddProjectModal() {
    const projectModal = document.getElementById("projectModal")
    projectModal.style.display = "none"
}

export function getProjectInformation() {
    const projectForm = document.getElementById("projectForm");
    const formData = new FormData(projectForm);
    const title = formData.get("project-title");
    const desc = formData.get("project-desc");
    return { title, desc };
};

export function createProject(formData, projectList) {
    const { title, desc } = formData;
    const project = new Project(title, desc);
    projectList.push(project);

    updateProjectList(projectList);
};

function deleteProject(e, projectList) {
    const projectId = e.target.id;
    const project = projectList.find(project => project.id === projectId);
    projectList.splice(projectList.indexOf(project), 1);
    const projectObject = document.getElementById(projectId);
    projectObject.remove();

    updateProjectList(projectList);
}

function editProject(e, projectList) {
    return null;
}

export function updateProjectList(projectList) {
    const projectContainer = document.getElementById("project-container");
    clear(projectContainer);

    projectList.forEach(project => {
        const projectObjectContainer = document.getElementById("project-container");
        const projectObject = document.createElement("div");
        projectObject.classList.add("project-object");
        projectObject.setAttribute("id", project.id);
        projectObjectContainer.appendChild(projectObject);

        const projectObjectRow1 = document.createElement("div");
        projectObjectRow1.classList.add("project-object-row1");
        projectObject.appendChild(projectObjectRow1);

        const projectObjectRow2 = document.createElement("div");
        projectObjectRow2.classList.add("project-object-row2");
        projectObject.appendChild(projectObjectRow2);

        const projectName = document.createElement("p");
        projectName.classList.add("project-name");
        projectObjectRow1.appendChild(projectName);
        projectName.textContent = project.title;

        const projectObjectButtons = document.createElement("div");
        projectObjectButtons.classList.add("project-object-buttons");
        projectObjectRow1.appendChild(projectObjectButtons);

        const editProjectBtn = document.createElement("button");
        editProjectBtn.setAttribute("id", "editProjectBtn");
        editProjectBtn.setAttribute("id", project.id);
        editProjectBtn.setAttribute("type", "button");
        editProjectBtn.textContent = "Edit";
        projectObjectButtons.appendChild(editProjectBtn);

        const deleteProjectBtn = document.createElement("button");
        deleteProjectBtn.setAttribute("id", "deleteProjectBtn");
        deleteProjectBtn.setAttribute("id", project.id);
        deleteProjectBtn.setAttribute("type", "button");
        deleteProjectBtn.textContent = "Delete";
        projectObjectButtons.appendChild(deleteProjectBtn);

        const projectDescription = document.createElement("p");
        projectDescription.classList.add("project-description");
        projectObjectRow2.appendChild(projectDescription);
        projectDescription.textContent = project.desc;
    })
};

function populateProjectDropdown(projectList) {
    return null;
}

// TODO: Add CRUD for PROJECT obj

export function openAddTodoModal() {
    const todoModal = document.getElementById("todoModal");
    todoModal.style.display = "block"
}

export function closeAddTodoModal() {
    const todoModal = document.getElementById("todoModal");
    todoModal.style.display = "none"
}


export function getTodoInformation() {
    const todoForm = document.getElementById("todoForm");
    const formData = new FormData(todoForm);

    // Extract all form values, some might be empty
    const title = formData.get("todo-title") || "";
    const desc = formData.get("desc-title") || "";
    const notes = formData.get("todo-notes") || "";
    const priority = formData.get("todo-priority") || "medium";
    const project = formData.get("todo-project-dropdown") || "default";
    const dueDate = formData.get("todo-dueDate") || "";

    return { title, desc, notes, priority, project, dueDate };
}

export function createTodo(todoData) {
    const { title, desc, notes, priority, project, dueDate } = todoData;
    const todo = new Todo(title, desc, priority, notes, project, dueDate);
    return todo;
}

export function updateTodoList(currentProject) {
    return null;
}



export function deleteTodo() {
    return null;
}









