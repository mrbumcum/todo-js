export class TodoItem {
    constructor(title, tags = [], notes = "", priority = "medium") {
        this._title = title;
        this._tags = tags;
        this._notes = notes;
        this._priority = priority;
        this._completed = false;
        this._trash = false;
        this._id = crypto.randomUUID();
    }

    get title() {
        return this._title;
    }

    get tags() {
        return this._tags;
    }

    get notes() {
        return this._notes;
    }

    get priority() {
        return this._priority;
    }

    get completed() {
        return this._completed;
    }

    get id() {
        return this._id;
    }

    set title(title) {
        this._title = title; 
    }

    set notes(notes) {
        this._notes = notes;
    }

    set priority(priority) {
        if (priority === "low" || priority === "medium" || priority === "high"){
            this._priority = priority;
        }
    }

    addTag(tag) {
        tag = String(tag);
        if (!this._tags.includes(tag)) {
            this._tags.push(tag);
        }
    }

    removeTag(tag) {
        tag = String(tag);
        if (this._tags.includes(tag)) {
            this._tags = this._tags.filter(t => t !== tag);
        } else {
            console.log("This tag is not present");
        }
    }

    toggleComplete() {
        this._completed = !this._completed;
    }

    toggleTrash() {
        this._trash = !this._trash;
    }
}


export function createTodo(title, tags = [], notes = "", priority = "medium") {
    const todoItem = new TodoItem(title, tags, notes, priority);
    return todoItem
}