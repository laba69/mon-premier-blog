export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(title: string, content: string ) {
        this.title = title;
        this.content = content;
        this.created_at = new Date();
        this.loveIts = 0;
    }

}
