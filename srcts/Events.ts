import { getSortedReportForTotalsTable } from "./UI";
import { ViewModel } from "./ViewModel";
import { Repository } from "./Repository";
import { LocalStorageStore } from "./Storage";

const elements: HTMLElement[] = [];
const repo = new Repository(new LocalStorageStore());
const viewModel = new ViewModel();


const setUpEventListener = (element: HTMLElement, event: string, callback: any) => {
    element.addEventListener(event, callback);
    elements.push(element);
}

// add a publisher on submit of the 'add-publisher' form
setUpEventListener(document.forms[1], 'submit', (e: { preventDefault: () => void; }) => {
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
setUpEventListener(document.forms[0], 'submit', (e: { preventDefault: () => void; }) => {
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
})

document.getElementById('placement_header')?.addEventListener('click', (e) => {
   getSortedReportForTotalsTable(e.target) 
});
document.getElementById('video-showing_header')?.addEventListener('click', (e) => {
    getSortedReportForTotalsTable(e.target)
});
document.getElementById('hour_header')?.addEventListener('click', (e) => {
    getSortedReportForTotalsTable(e.target)
});
document.getElementById('return-visit_header')?.addEventListener('click', (e) => {
    getSortedReportForTotalsTable(e.target)
});
document.getElementById('bible-study_header')?.addEventListener('click', (e) => {
    getSortedReportForTotalsTable(e.target)
});


