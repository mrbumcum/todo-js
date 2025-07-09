import { updateTodos, updateProjects, displayProjectCreation, displayTodoCreation, closeTodoCreation, getTodoFormData } from "./dom";


let projectList = ["Inbox"]
let currentProject = "Inbox"

// Need to address the issue of not getting latest values for currentProject later
document.addEventListener('DOMContentLoaded', () => {
    updateTodos(currentProject);
    displayProjectCreation();
    displayTodoCreation();
    closeTodoCreation();
    updateProjects();
    getTodoFormData(currentProject);
})

function switchProject (newProject) {
    currentProject = newProject
    updateTodos();
}















