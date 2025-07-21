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
        this._title = title;
        this._desc = desc;
        this._priority = priority;
        this._notes = notes;
        this._completed = false;
        this._id = crypto.randomUUID();
        this._project = project;
        this._dueDate = dueDate;
    }

    get title() {
        return this._title;
    }

    get desc() {
        return this._desc;
    }

    get priority() {
        return this._priority;
    }

    get notes() {
        return this._notes;
    }

    get id() {
        return this._id;
    }

    get project() {
        return this._project;
    }

    get dueDate() {
        return this._dueDate;
    }

    set title(title) {
        this._title = title;
    }

    set desc(desc) {
        this._desc = desc;
    }

    set priority(priority) {
        if (priority == 'low' || priority == 'medium' || priority == 'high') {
            this._priority = priority;
        }
    }

    set notes(notes) {
        this._notes = notes;
    }

    set id(id) {
        this._id = id;
    }

    set project(project) {
        this._project = project;
    }

    set dueDate(dueDate) {
        let parsedDate = parseISO(dueDate)

        if (
            !isExists(parsedDate) ||
            !isValid(parsedDate) ||
            isPast(parsedDate)
        ) {
            this._dueDate = format(new Date(), 'yyyy-MM-dd');
        }

        else {
            this._dueDate = parsedDate;
        }
    }
}



