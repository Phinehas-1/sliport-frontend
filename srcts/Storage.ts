import { Report } from "./Report";
import { Publisher } from "./Publisher";

export interface DataStore {
    isConnected(): boolean,
    savePublisher(publisher: Publisher): boolean,
    getPublishers(): Publisher[],
    saveReport(report: Report): boolean,
    getReports(): Report[]
}

export class LocalStorageStore implements DataStore {
    private localStorage = window.localStorage;
    private publishers_string: string | null = this.localStorage.getItem('publishers');
    private publishers: Publisher[] = [];
    private reports_string: string | null = this.localStorage.getItem('reports');
    private reports: Report[] = [];

    constructor() {
        if (!this.localStorage.getItem("reports")) {
            this.localStorage.setItem("reports", JSON.stringify(this.reports));
        }
        if (!this.localStorage.getItem("publishers")) {
            this.localStorage.setItem("publishers", JSON.stringify(this.publishers));
        }
    }

    isConnected(): boolean {
        return true;
    }

    savePublisher(publisher: Publisher): boolean {
        if (!this.isConnected()) {
            return false;
        }
        this.publishers = JSON.parse(this.publishers_string ?? "[]");
        this.publishers.push(publisher);
        this.localStorage.setItem("publishers", JSON.stringify(this.publishers));
        return true;
    }

    getPublishers(): Publisher[] {
        return JSON.parse(this.publishers_string ?? "[]");
    }

    saveReport(report: Report): boolean {
        if (!this.isConnected()) {
            return false;
        }
        this.reports = JSON.parse(this.reports_string ?? "[]");
        console.log(this.reports);
        this.reports.push(report);
        console.log(this.reports);
        this.localStorage.setItem("reports", JSON.stringify(this.reports));
        return true;
    }

    getReports(): Report[] {
        return JSON.parse(this.reports_string ?? "[]");
    }
}