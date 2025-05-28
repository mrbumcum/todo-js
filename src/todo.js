class TodoItem {
    constructor(title, tags = [], notes = "", priority = "normal") {
        this._title = title;
        this._tags = tags;
        this._notes = notes;
        this._priority = priority;
        this._completed = false;
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

    toggleComplete() {
        this._completed = !this._completed;
    }
}