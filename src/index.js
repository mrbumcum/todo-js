import { TodoItem } from "./todo";
import { Project } from "./project";
import { displayTodoItems, displayProjects } from "./dom"

const inboxProject = new Project("Inbox")
let projectList = [inboxProject];
let currentProject = inboxProject;

// Add a test todo item
inboxProject.createAndAddTodo("Test Todo", ["test"], "This is a test todo item", "high");
displayProjects(projectList);
displayTodoItems(currentProject);


