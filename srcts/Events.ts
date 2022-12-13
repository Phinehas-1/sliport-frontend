import { Repository } from "./Repository";
import { LocalStorageStore } from "./Storage";
import { ViewModel } from "./ViewModel";

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
        console.log('Could not save the publisher.');
        return;
    }
    console.log(`Publisher : ${document.forms[1]['publisher-name'].value} was added.`);
});


// save a report on submit of the 'enter-publisher-report' form
setUpEventListener(document.forms[0], 'submit', (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!repo.addReport(document.forms[0])) {
        console.log('Could not save the report.');
        return;
    }
    console.log(`Report for : ${document.forms[0]['publisher-name'].value} was added.`);
});

// populate the 'publisher-name-select' field of the 'enter-publish-report' form after page reload 
window.addEventListener('DOMContentLoaded', () => {
    viewModel.setUpPublisherFormView(repo.getPublishers());
})
