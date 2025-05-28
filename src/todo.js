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

    addTag(tag) {
        if (this._tags.contains(String(tag))) {
            tag = String(tag);
            this._tags.push(tag);
        }
    }

    removeTag(tag) {
        if (this._tags.contains(String(tag))) {
            tag = String(tag);
            this._tags.pop(tag);
        } else {
            console.log("This value is not present")
        }
    }

    toggleComplete() {
        this._completed = !this._completed;
    }
}