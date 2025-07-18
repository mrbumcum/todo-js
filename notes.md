# SPECIFICATIONS

## TODO OBJECT
title (str)
description(str)
dueDate(date-fns object)
priority (str) - restrictions on low, medium, high
notes(str)
completed(boolean)
id(int)
project(int)


In the todo.js file make sure to have the following
todo(class)
create constructor,
get and set property for each item

## PROJECT OBJECT
title(str)
description(str)
create constructor,
get and set constructor for the item

# DOM Manipulation File
## CRUD FOR PROJECT
### CREATE
- openCreateProjectMenu()
    - This will open an html form modal
- closeCreateProjectMenu()
- (helper) getProjectInformation()
- createProject()
    - This will create the object and push it to the projectList(list)

### UPDATE
- Read projectList(list), create dom elements for each one

## CRUD for todo
- openCreateTodoMenu()
    - This will open an html form (usr will input title (required), desc, ...
    project)
- closeCreateTodoMenu()

### CREATE:
- (helper) getTodoInformation()
    - new FormData(), append all of the information and return the object
- createTodo(data)
    - uses the data from getTodoInformation() and creates new todo object

### UPDATE
- updateTodoList()
    - This will check the current project, filter the ones with "project:
    currentTodo", and then populate each todo DOM with the obj information with map



