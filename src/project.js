export class Project {
    constructor(title, desc = "") {
        this.title = title;
        this.desc = desc;
        this.todos = [];
        this.id = crypto.randomUUID();
    }

    get title() {
        return this.title;
    }

    get desc() {
        return this.desc;
    }

    get todos() {
        return this.todos;
    }

    get id() {
        return this.id;
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    set title(title) {
        this.title = title;
    }

    set desc(desc) {
        this.desc = desc;
    }
}

