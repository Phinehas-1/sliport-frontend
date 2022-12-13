export class Publisher {
    constructor(public publisherName: string) { }

    getPublisherName(): string {
        return this.publisherName;
    }
}