import { Repository } from "./Repository";
import { LocalStorageStore } from "./Storage";
import { ViewModel } from "./ViewModel";
const elements = [];
const repo = new Repository(new LocalStorageStore());
const viewModel = new ViewModel();
const setUpEventListener = (element, event, callback) => {
    element.addEventListener(event, callback);
    elements.push(element);
};
setUpEventListener(document.forms[1], 'submit', (e) => {
    e.preventDefault();
    if (!repo.addPublisher(document.forms[1])) {
        console.log('Could not save the publisher.');
        return;
    }
    console.log(`Publisher : ${document.forms[1]['publisher-name'].value} was added.`);
});
setUpEventListener(document.forms[0], 'submit', (e) => {
    e.preventDefault();
    let store = new LocalStorageStore();
    let repo = new Repository(store);
    if (!repo.addReport(document.forms[0])) {
        console.log('Could not save the report.');
        return;
    }
    console.log(`Report for : ${document.forms[0]['publisher-name'].value} was added.`);
});
// populate the 'publisher-name-select' field of the 'enter-publish-report' form after page reload 
window.addEventListener('DOMContentLoaded', () => {
    console.log('Body loaded');
    let viewModel = new ViewModel();
    viewModel.setUpPublisherFormView(repo.getPublishers());
});
