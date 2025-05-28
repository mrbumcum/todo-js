class TodoItem {
    constructor(title, tags = [], notes = "", priority = "normal") {
        this.title = this.title;
        this.tags = this.tags;
        this.notes = this.notes;
        this.priority = this.priority;
        this.completed = false;
    }


    get title() {
        return this.title;
    }

    get tags() {
        return this.tags;
    }

    get notes() {
        return this.notes;
    }

    get priority() {
        return this.priority;
    }

    get completed() {
        return this.completed;
    }

}