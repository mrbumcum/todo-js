class Todo {
    constructor(title, desc = "", priorty = "medium", notes = "", project = "default" ) {
        this.title = title;
        this.desc = desc;
        this.priority = priority;
        this.notes = notes;
        this.completed = false;
        this.id = crypto.randomUUID();
        this.project = project;
    }

    get title() {
        return this.title;
    }

    get desc() {
        return this.desc;
    }

    get priority() {
        return this.priority;
    }

    get notes() {
        return this.notes;
    }

    get id() {
        return this.id;
    }

    get project() {
        return this.project;
    }

    set title(title) {
        this.title = title;
    }

    set desc(desc) {
        this.desc = desc;
    }

    set priority(priority) {
        this.priority = priority;
    }

    set notes(notes) {
        this.notes = notes;
    }

    set id(id) {
        this.id = id;
    }

    set project(project) {
        this.project = project;
    }
}



