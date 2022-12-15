var _a, _b, _c, _d, _e;
import { getSortedReportForTotalsTable } from "./UI";
import { ViewModel } from "./ViewModel";
import { Repository } from "./Repository";
import { LocalStorageStore } from "./Storage";
const elements = [];
const repo = new Repository(new LocalStorageStore());
const viewModel = new ViewModel();
const setUpEventListener = (element, event, callback) => {
    element.addEventListener(event, callback);
    elements.push(element);
};
// add a publisher on submit of the 'add-publisher' form
setUpEventListener(document.forms[1], 'submit', (e) => {
    e.preventDefault();
    if (!repo.addPublisher(document.forms[1])) {
        document.forms[1].reset();
        console.log('Could not save the publisher.');
        return;
    }
    document.forms[1].reset();
    console.log(`Publisher : ${document.forms[1]['publisher-name'].value} was added.`);
});
// save a report on submit of the 'enter-publisher-report' form
setUpEventListener(document.forms[0], 'submit', (e) => {
    e.preventDefault();
    if (!repo.addReport(document.forms[0])) {
        document.forms[0].reset();
        console.log('Could not save the report.');
        return;
    }
    document.forms[0].reset();
    console.log(`Report for : ${document.forms[0]['publisher-name'].value} was added.`);
});
// populate the 'publisher-name-select' field of the 'enter-publish-report' form after page reload 
window.addEventListener('DOMContentLoaded', () => {
    viewModel.setUpReportFormView(repo.getPublishers());
    viewModel.setUpReportsTableView(repo.getReports());
});
(_a = document.getElementById('placement_header')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
    getSortedReportForTotalsTable(e.target);
});
(_b = document.getElementById('video-showing_header')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (e) => {
    getSortedReportForTotalsTable(e.target);
});
(_c = document.getElementById('hour_header')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', (e) => {
    getSortedReportForTotalsTable(e.target);
});
(_d = document.getElementById('return-visit_header')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', (e) => {
    getSortedReportForTotalsTable(e.target);
});
(_e = document.getElementById('bible-study_header')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', (e) => {
    getSortedReportForTotalsTable(e.target);
});
