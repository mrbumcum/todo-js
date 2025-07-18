class Project {
    constructor(title, desc = "") {
        this.title = title;
        this.desc = desc;

    }
    get title() {
        return this.title;
    }

    get desc() {
        return this.desc;
    }

    set title(title) {
        this.title = title;
    }

    set desc(desc) {
        this.desc = desc;
    }
}

