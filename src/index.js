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

