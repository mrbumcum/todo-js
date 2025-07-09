export class Project {
    constructor(name, todoList = []) {
        this._name = name;
        this._todoList = todoList;
        this._id = crypto.randomUUID();
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
    
    removeTodo(todoId) {
        this._todoList = this._todoList.filter(todo => todo.id !== todoId);
    }
}