import { Todo } from "./todo.js";
import { Project } from "./project.js";

function clear(domElement) {
    while ( domElement.hasChildNodes() ) {
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
    return null;
};

export function createProject() {
    return null;
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
    return null;
}

export function updateTodoList(currentProject) {
    return null;
}

export function createTodo() {
    return null;
}

export function deleteTodo() {
    return null;
}









