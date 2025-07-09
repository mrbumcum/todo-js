import { displayTodoItems, displayProjects, displayProjectCreation, displayTodoCreation, closeTodoCreation, getTodoFormData } from "./dom";


let projectList = ["Inbox"]
let currentProject = "Inbox"

document.addEventListener('DOMContentLoaded', () => {
    displayTodoItems();
    displayProjectCreation();
    displayTodoCreation();
    closeTodoCreation();
    displayProjects();
    getTodoFormData();
})

















