import { Todo } from "./todo.js";
import { Project } from "./project.js";

function clear(domElement) {
    while (domElement.hasChildNodes()) {
        domElement.removeChild(domElement.firstChild);
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

export function createProject(formData) {
    const { title, desc } = formData;

    const project = new Project(title, desc);
    return project;
};

export function deleteProject() {
    return null;
}

export function updateProjectList(currentProject) {
    return null;
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









