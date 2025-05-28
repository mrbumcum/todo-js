import { TodoItem } from "./todo";

export class Project {
    constructor(name, todoList = []) {
        this._name = name;
        this._todoList = todoList;
    }

    get name() {
        return this._name;
    }

    get todoList() {
        return this._todoList;
    }

    set name(name) {
        this._name = name;
    }

    addTodo(todoItem) {
        this._todoList.push(todoItem);
    }

    createAndAddTodo(title, tags = [], notes = "", priority = "normal") {
        const todoItem = new TodoItem(title, tags, notes, priority);
        this.addTodo(todoItem);
        return todoItem;
    }

    removeTodo(todoId) {
        this._todoList = this._todoList.filter(todo => todo.id !== todoId);
    }
}