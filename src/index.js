import "./styles.css";
import {
    openAddProjectModal,
    closeAddProjectModal,
    handleSubmitProject,
    updateProjectList,
    openAddTodoModal,
    closeAddTodoModal,
    handleSubmitTodo,
    updateTodoList,
} from "./dom.js";

import { Project } from "./project.js";

const defaultProject = new Project("Default", "Default project");
let currentProject = defaultProject;
const projectList = [defaultProject];
updateProjectList(projectList);
updateTodoList(currentProject, projectList);

export function setCurrentProject(project) {
    currentProject = project;
}

export function getCurrentProject() {
    return currentProject;
}

const addProjectBtn = document.getElementById("addProjectBtn");
addProjectBtn.addEventListener("click", () => {
    console.log("add project btn clicked");
    openAddProjectModal();
});

const addTodoBtn = document.getElementById("addTodoBtn");
addTodoBtn.addEventListener("click", () => {
    openAddTodoModal(projectList);
});

const submitProjectBtn = document.getElementById("submitProjectBtn");
submitProjectBtn.addEventListener("click", (e) => {
    handleSubmitProject(e, projectList);
});

const submitTodoBtn = document.getElementById("submitTodoBtn");
submitTodoBtn.addEventListener("click", (e) => {
    handleSubmitTodo(e, currentProject, projectList);
});

const cancelProjectBtn = document.getElementById("cancelProjectBtn");
cancelProjectBtn.addEventListener("click", () => {
    closeAddProjectModal();
});

const cancelTodoBtn = document.getElementById("cancelTodoBtn");
cancelTodoBtn.addEventListener("click", () => {
    closeAddTodoModal();
});