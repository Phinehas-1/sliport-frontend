export class ViewModel {
    constructor() {
        this.reportForm = document.forms[0];
        this.totalsTable = document.getElementById('totals-table');
    }
    setUpReportFormView(publishers) {
        const selectDropdown = this.reportForm['publisher-name'];
        publishers.forEach(publisher => {
            let option = document.createElement('OPTION');
            let value = document.createTextNode(publisher.publisherName);
            selectDropdown.appendChild(option);
            option.appendChild(value);
        });
    }
    setUpReportsTableView(reports) {
        const table = document.getElementById('totals-table');
        let tableBody = document.createElement('TBODY');
        let tableBodyId = document.createAttribute('id');
        tableBodyId.value = 'totals-table-body';
        tableBody.setAttributeNode(tableBodyId);
        table === null || table === void 0 ? void 0 : table.appendChild(tableBody);
        reports.forEach(report => {
            let tableRow = document.createElement('TR');
            tableBody.appendChild(tableRow);
            let count = 1;
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
