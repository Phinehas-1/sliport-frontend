export class LocalStorageStore {
    constructor() {
        this.localStorage = window.localStorage;
        this.publishers_string = this.localStorage.getItem('publishers');
        this.publishers = [];
        this.reports_string = this.localStorage.getItem('reports');
        this.reports = [];
        if (!this.localStorage.getItem("reports")) {
            this.localStorage.setItem("reports", JSON.stringify(this.reports));
        }
        if (!this.localStorage.getItem("publishers")) {
            this.localStorage.setItem("publishers", JSON.stringify(this.publishers));
        }
    }
    isConnected() {
        return true;
    }
    savePublisher(publisher) {
        var _a;
        if (!this.isConnected()) {
            return false;
        }
        this.publishers = JSON.parse((_a = this.publishers_string) !== null && _a !== void 0 ? _a : "[]");
        this.publishers.push(publisher);
        this.localStorage.setItem("publishers", JSON.stringify(this.publishers));
        return true;
    }
    getPublishers() {
        var _a;
        return JSON.parse((_a = this.publishers_string) !== null && _a !== void 0 ? _a : "[]");
    }
    saveReport(report) {
        var _a;
        if (!this.isConnected()) {
            return false;
        }
        this.reports = JSON.parse((_a = this.reports_string) !== null && _a !== void 0 ? _a : "[]");
        console.log(this.reports);
        this.reports.push(report);
        console.log(this.reports);
        this.localStorage.setItem("reports", JSON.stringify(this.reports));
        return true;
    }
    getReports() {
        var _a;
        return JSON.parse((_a = this.reports_string) !== null && _a !== void 0 ? _a : "[]");
    }
}
