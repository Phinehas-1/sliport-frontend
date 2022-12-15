export class Report {
    constructor(public readonly monthOfReporting: string, public readonly publisherName: string, public readonly placement: number, public readonly videoShowing: number, public readonly hour: number, public readonly returnVisit: number, public readonly bibleStudy: number) { }

    getMonthOfReporting(): string {
        return this.monthOfReporting;
    }

    getPublisherName(): string {
        return this.publisherName;
    }

    getPlacement(): number {
        return this.placement;
    }

    getVideoShowing(): number {
        return this.videoShowing;
    }

    getHour(): number {
        return this.hour;
    }

    getReturnVisit(): number {
        return this.returnVisit;
    }

    getBibleStudy(): number {
        return this.bibleStudy;
    }
}