import { DataStore } from "./Storage";
import { Publisher } from "./Publisher";
import { Report } from "./Report";

export class Repository {

    constructor(private readonly dataStore: DataStore) {
        if (!this.dataStore.isConnected) {
            throw new Error('Could not connect to the data store.');
        }
    }

    addPublisher(publisherForm: HTMLFormElement): boolean {
        let publisher = new Publisher(publisherForm['publisher-name'].value);
        return this.dataStore.savePublisher(publisher);
    }

    getPublishers(): Publisher[] {
        return this.dataStore.getPublishers();
    }

    addReport(reportForm: HTMLFormElement): boolean {
        let report = new Report(reportForm['month-reporting'].value, reportForm['publisher-name'].value, reportForm['placement'].value, reportForm['video-showing'].value, reportForm['hour'].value, reportForm['return-visit'].value, reportForm['bible-study'].value);
        return this.dataStore.saveReport(report);
    }

    getReports(): Report[] {
        return this.dataStore.getReports();
    }
}