import { updateTodos, updateProjects, openProjectCreation, openTodoCreation, closeTodoCreation, getTodoFormData } from "./dom";
import { Project } from "./project";

const defaultProject = new Project("Inbox");
let projectList = [defaultProject];
let currentProject = projectList[0];

// TODO: Add event listeners for project creation and todo creation
document.addEventListener('DOMContentLoaded', () => {
    updateTodos(currentProject);
    openProjectCreation();
    openTodoCreation();
    closeTodoCreation();
    updateProjects(projectList);
    getTodoFormData(currentProject); 
    projectCreation(projectList);
    todoCreation(currentProject);
})

function switchProject (newProjectName) {
    currentProject = projectList.find(project => project.name === newProjectName);
    updateTodos(currentProject);
}














