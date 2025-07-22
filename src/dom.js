import { Todo } from "./todo.js";
import { Project } from "./project.js";
import { setCurrentProject, getCurrentProject } from "./index.js";

function clear(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
// TODO: Add CRUD for TODO
export function openAddProjectModal() {
    const projectModal = document.getElementById("projectModal")
    projectModal.style.display = "block"
};

export function closeAddProjectModal() {
    const projectModal = document.getElementById("projectModal")
    const projectForm = document.getElementById("projectForm");
    projectModal.style.display = "none"
    projectForm.reset();
}


function removeProjectFromList(e, projectList) {
    const projectId = e.target.id;
    const project = projectList.find(project => project.id === projectId);
    projectList.splice(projectList.indexOf(project), 1);
}

function removeProjectElement(e) {
    const projectId = e.target.id;
    const projectObject = document.getElementById(projectId);
    projectObject.remove();
}

export function deleteProject(e, projectList) {
    removeProjectFromList(e, projectList);
    removeProjectElement(e, projectList);
    updateProjectList(projectList);
}

let editingProject = null;

export function handleSubmitProject(e, projectList) {
    e.preventDefault();
    const projectForm = document.getElementById("projectForm");
    const title = projectForm["project-title"].value;
    const desc = projectForm["project-desc"].value;

    if (editingProject) {
        editingProject.title = title;
        editingProject.desc = desc;
        editingProject = null;
    } else {
        const project = new Project(title, desc);
        projectList.push(project);
    }

    updateProjectList(projectList);
    closeAddProjectModal();
}

export function openEditProjectModal(e, projectList) {
    openAddProjectModal();
    const project = projectList.find(project => project.id === e.target.id);
    const projectForm = document.getElementById("projectForm");
    projectForm["project-title"].value = project.title;
    projectForm["project-desc"].value = project.desc;
    editingProject = project;
}

function toggleProject(e, projectList) {
    // Get the project element (the .project-object div)
    const projectDiv = e.currentTarget || e.target.closest('.project-object');
    if (!projectDiv) return;

    const projectId = projectDiv.id;
    const project = projectList.find(project => project.id === projectId);
    if (project === getCurrentProject()) return;

    // Remove 'currentProject' class from all
    document.querySelectorAll('.project-object.currentProject').forEach(el => {
        el.classList.remove('currentProject');
    });

    // Add 'currentProject' class to the clicked one
    projectDiv.classList.add('currentProject');

    setCurrentProject(project);
    updateTodoList(project, projectList);
}

export function updateProjectList(projectList) {
    const projectContainer = document.getElementById("project-container");
    clear(projectContainer);

    projectList.forEach(project => {
        const projectObject = document.createElement("div");
        projectObject.classList.add("project-object");
        projectObject.setAttribute("id", project.id);

        // Highlight if this is the current project
        if (getCurrentProject() && project.id === getCurrentProject().id) {
            projectObject.classList.add("currentProject");
        }

        // Attach click handler to the project div
        projectObject.addEventListener("click", (e) => {
            // Prevent clicks on buttons from triggering project selection
            if (e.target.closest("button")) return;
            toggleProject(e, projectList);
        });

        const projectObjectContainer = document.getElementById("project-container");
        projectObjectContainer.appendChild(projectObject);

        const projectObjectRow1 = document.createElement("div");
        projectObjectRow1.classList.add("project-object-row1");
        projectObject.appendChild(projectObjectRow1);

        const projectObjectRow2 = document.createElement("div");
        projectObjectRow2.classList.add("project-object-row2");
        projectObject.appendChild(projectObjectRow2);

        const projectName = document.createElement("p");
        projectName.classList.add("project-name");
        projectObjectRow1.appendChild(projectName);
        projectName.textContent = project.title;

        const projectObjectButtons = document.createElement("div");
        projectObjectButtons.classList.add("project-object-buttons");
        projectObjectRow1.appendChild(projectObjectButtons);

        const projectDescription = document.createElement("p");
        projectDescription.classList.add("project-description");
        projectObjectRow2.appendChild(projectDescription);
        projectDescription.textContent = project.desc;

        if (project.title != "Default") {
            const editProjectBtn = document.createElement("button");
            editProjectBtn.setAttribute("id", "editProjectBtn");
            editProjectBtn.setAttribute("id", project.id);
            editProjectBtn.setAttribute("type", "button");
            editProjectBtn.textContent = "Edit";
            projectObjectButtons.appendChild(editProjectBtn);
            editProjectBtn.addEventListener("click", (e) => {
                console.log("edit project btn clicked");
                openEditProjectModal(e, projectList);
            });
            

            const deleteProjectBtn = document.createElement("button");
            deleteProjectBtn.setAttribute("id", "deleteProjectBtn");
            deleteProjectBtn.setAttribute("id", project.id);
            deleteProjectBtn.setAttribute("type", "button");
            deleteProjectBtn.textContent = "Delete";
            projectObjectButtons.appendChild(deleteProjectBtn);
            deleteProjectBtn.addEventListener("click", (e) => {
                deleteProject(e, projectList);
            });
        }
    });
};

function populateProjectDropdown(projectList) {
    const projectDropdown = document.getElementById("todo-project-dropdown");
    clear(projectDropdown);

    projectList.forEach(project => {
        const projectOption = document.createElement("option");
        projectOption.setAttribute("value", project.id);
        projectOption.textContent = project.title;
        projectDropdown.appendChild(projectOption);
        
        if (project.id === getCurrentProject().id) {
            projectOption.setAttribute("selected", "selected");
        }
    })

}

// TODO: Add CRUD for PROJECT obj

export function openAddTodoModal(projectList) {
    const todoModal = document.getElementById("todoModal");
    todoModal.style.display = "block"
    populateProjectDropdown(projectList);
}

export function closeAddTodoModal() {
    const todoModal = document.getElementById("todoModal");
    const todoForm = document.getElementById("todoForm");
    todoModal.style.display = "none"
    todoForm.reset();
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

function addTodoToList(project, todo) {
    console.log(project);
    console.log(todo);
    project.todos.push(todo);
}

let editingTodo = null;

export function openEditTodoModal(e, projectList) {
    openAddTodoModal(projectList);
    const todoId = e.target.id;
    // Find the project that contains the todo
    const parentProject = projectList.find(project =>
        project.todos.some(todo => todo.id === todoId)
    );

    // Find the todo within that project
    const todo = parentProject ? parentProject.todos.find(todo => todo.id === todoId) : undefined;
    const todoForm = document.getElementById("todoForm");
    todoForm["todo-title"].value = todo.title;
    todoForm["desc-title"].value = todo.desc;
    todoForm["todo-notes"].value = todo.notes;
    todoForm["todo-priority"].value = todo.priority;
    todoForm["todo-dueDate"].value = todo.dueDate;
    editingTodo = todo;
}

export function handleSubmitTodo(e, currentProject, projectList) {
    e.preventDefault();
    const todoForm = document.getElementById("todoForm");
    const title = todoForm["todo-title"].value;
    const desc = todoForm["desc-title"].value;
    const notes = todoForm["todo-notes"].value;
    const priority = todoForm["todo-priority"].value;
    const project = todoForm["todo-project-dropdown"].value;
    const dueDate = todoForm["todo-dueDate"].value;
    
    if (editingTodo) {
        editingTodo.title = title;
        editingTodo.desc = desc;
        editingTodo.notes = notes;
        editingTodo.priority = priority;
        editingTodo.dueDate = dueDate;
    } else {
        const todo = new Todo(title, desc, priority, notes, project, dueDate);
        const selectedProject = projectList.find(project => project.id === todo.project);

        addTodoToList(selectedProject, todo);
        updateTodoList(currentProject, projectList);
        closeAddTodoModal();
    }
}

export function updateTodoList(currentProject, projectList) {
    const todoContainer = document.getElementById("todo-container");
    clear(todoContainer);

    currentProject.todos.length > 0 && currentProject.todos.forEach(todo => {
        const todoObject = document.createElement("div");
        todoObject.classList.add("todo-object");
        todoObject.setAttribute("id", todo.id);
        todoContainer.appendChild(todoObject);

        const todoObjectRow1 = document.createElement("div");
        todoObjectRow1.classList.add("todo-object-row1");
        todoObject.appendChild(todoObjectRow1);

        const todoObjectRow2 = document.createElement("div");
        todoObjectRow2.classList.add("todo-object-row2");
        todoObject.appendChild(todoObjectRow2);

        const todoName = document.createElement("p");
        todoName.classList.add("todo-name");
        todoObjectRow1.appendChild(todoName);
        todoName.textContent = todo.title;

        const todoObjectButtons = document.createElement("div");
        todoObjectButtons.classList.add("todo-object-buttons");
        todoObjectRow1.appendChild(todoObjectButtons);

        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.setAttribute("id", "deleteTodoBtn");
        deleteTodoBtn.setAttribute("id", todo.id);
        deleteTodoBtn.setAttribute("type", "button");
        deleteTodoBtn.textContent = "Delete";
        todoObjectButtons.appendChild(deleteTodoBtn);
        deleteTodoBtn.addEventListener("click", (e) => {
            deleteTodo(e, projectList);
        });

        const editTodoBtn = document.createElement("button");
        editTodoBtn.setAttribute("id", "editTodoBtn");
        editTodoBtn.setAttribute("id", todo.id);
        editTodoBtn.setAttribute("type", "button");
        editTodoBtn.textContent = "Edit";
        todoObjectButtons.appendChild(editTodoBtn);
        editTodoBtn.addEventListener("click", (e) => {
            console.log(projectList);
            openEditTodoModal(e, projectList);
        });

        const todoDate = document.createElement("p");
        todoDate.classList.add("todo-date");
        todoObjectRow2.appendChild(todoDate);
        todoDate.textContent = todo.dueDate;
    })
}

export function deleteTodo(e, projectList) {
    const todoProject = e.target.project;
    const parentProject = projectList.find(project => project.title === todoProject);
    const todoId = e.target.id;
    const todo = parentProject.todos.find(todo => todo.id === todoId);
    parentProject.todos.splice(parentProject.todos.indexOf(todo), 1);
    const todoObject = document.getElementById(todoId);
    todoObject.remove();
    updateTodoList(parentProject, projectList);
}









