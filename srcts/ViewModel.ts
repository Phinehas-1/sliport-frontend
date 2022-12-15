import { Publisher } from "./Publisher";
import { Report } from "./Report";

export class ViewModel {

    reportForm: HTMLFormElement = document.forms[0];
    totalsTable = document.getElementById('totals-table');

    setUpReportFormView(publishers: Publisher[]) {
        const selectDropdown: HTMLSelectElement = this.reportForm['publisher-name'];
        publishers.forEach(publisher => {
            let option: HTMLElement = document.createElement('OPTION');
            let value = document.createTextNode(publisher.publisherName);
            selectDropdown.appendChild(option);
            option.appendChild(value);
        });
    }

    setUpReportsTableView(reports: Report[]) {
        const table = document.getElementById('totals-table');
        let tableBody = document.createElement('TBODY');
        let tableBodyId = document.createAttribute('id');
        tableBodyId.value = 'totals-table-body';
        tableBody.setAttributeNode(tableBodyId);
        table?.appendChild(tableBody);

        reports.forEach(report => {
            let tableRow = document.createElement('TR');
            tableBody.appendChild(tableRow);
            let count: number = 1;
            let reportObjAsArray = Object.values(report);

            while (count < reportObjAsArray.length) {
                let tableData = document.createElement('TD');
                let value = document.createTextNode(reportObjAsArray[count]);
                tableData.appendChild(value);
                tableRow.appendChild(tableData);
                count++;
            }
        });
    }
}