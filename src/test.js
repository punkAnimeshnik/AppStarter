export default class Post {
    constructor(title) {
        this.title = title
        this.date = new Date();
    }
    Ret() {
        return JSON.stringify({
                title: this.title,
                date: this.date.toJSON()
            })
    }
}


