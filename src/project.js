export class Project {
    constructor(title, desc = "") {
        this._title = title;
        this._desc = desc;
        this._todos = [];
        this._id = crypto.randomUUID();
    }

    get title() {
        return this._title;
    }

    get desc() {
        return this._desc;
    }

    get todos() {
        return this._todos;
    }

    get id() {
        return this._id;
    }

    addTodo(todo) {
        this._todos.push(todo);
    }

    set title(title) {
        this._title = title;
    }

    set desc(desc) {
        this._desc = desc;
    }
}

