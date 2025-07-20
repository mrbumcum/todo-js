import { format, parseISO, isDate, isPast, isExists, isFuture,isValid } from "date-fns";

export class Todo {
    constructor(
        title,
        desc = "",
        priority = "medium",
        notes = "",
        project = "default",
        dueDate = format(new Date(), 'yyyy-MM-dd')
    ) {
        this.title = title;
        this.desc = desc;
        this.priority = priority;
        this.notes = notes;
        this.completed = false;
        this.id = crypto.randomUUID();
        this.project = project;
        this.dueDate = dueDate;
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

    get dueDate() {
        return this.dueDate;
    }

    set title(title) {
        this.title = title;
    }

    set desc(desc) {
        this.desc = desc;
    }

    set priority(priority) {
        if (priority == 'low' || priority == 'medium' || priority == 'high') {
            this.priority = priority;
        }
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

    set dueDate(dueDate) {
        let parsedDate = parseISO(dueDate)

        if (
            !isExists(parsedDate) ||
            !isValid(parsedDate) ||
            isPast(parsedDate)
        ) {
            parsedDate = format(new Date(), 'yyyy-MM-dd');
        }

        else {
            this.dueDate = parsedDate;
        }
    }
}



