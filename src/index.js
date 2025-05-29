import { TodoItem } from "./todo";
import { Project } from "./project";
import { displayTodoItems, displayProjects } from "./dom"

const inboxProject = new Project("Inbox")
let projectList = [inboxProject];
let currentProject = inboxProject;
displayProjects();
displayTodoItems(currentProject);







