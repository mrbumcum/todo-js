import "./styles.css";
import {
    openAddProjectModal,
    closeAddProjectModal,
    getProjectInformation,
    createProject,
    updateProjectList,
    openAddTodoModal,
    closeAddTodoModal,
    getTodoInformation,
    createTodo,
    updateTodoList,
    deleteTodo
} from "./dom.js";

import { Project } from "./project.js";

const defaultProject = new Project("Default", "Default project");
const currentProject = defaultProject;
const projectList = [defaultProject];
updateProjectList(projectList);
updateTodoList(currentProject);

const addProjectBtn = document.getElementById("addProjectBtn");
addProjectBtn.addEventListener("click", () => {
    openAddProjectModal();
});

const addTodoBtn = document.getElementById("addTodoBtn");
addTodoBtn.addEventListener("click", () => {
    openAddTodoModal(projectList);
});

const submitProjectBtn = document.getElementById("submitProjectBtn");
submitProjectBtn.addEventListener("click", () => {
    const projectData = getProjectInformation();
    createProject(projectData, projectList);
    closeAddProjectModal();
});

const submitTodoBtn = document.getElementById("submitTodoBtn");
submitTodoBtn.addEventListener("click", () => {
    const todoData = getTodoInformation();
    createTodo(todoData, projectList);
    closeAddTodoModal();
});

const cancelProjectBtn = document.getElementById("cancelProjectBtn");
cancelProjectBtn.addEventListener("click", () => {
    closeAddProjectModal();
});

const cancelTodoBtn = document.getElementById("cancelTodoBtn");
cancelTodoBtn.addEventListener("click", () => {
    closeAddTodoModal();
});