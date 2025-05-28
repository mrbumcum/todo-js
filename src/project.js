import { TodoItem } from "./todo";

export class Project {
    constructor(title, count = 0, todoList = []) {
        this._title = title;
        this._count = count;
        this._todoList = todoList;
    }

    get todoList() {
        return this._todoList;
    }

    addTodo(title, tags = [], notes = "", priority = "normal") {
        this._todoList.push(new TodoItem(title, tags, notes, priority))
    }

    removeTodo() {
        return null;
    }
}