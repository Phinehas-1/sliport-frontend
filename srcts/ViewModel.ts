import { Publisher } from "./Publisher";

export class ViewModel {

    reportForm: HTMLFormElement = document.forms[0];

    setUpPublisherFormView(publishers: Publisher[]) {
        this.reportForm.reset();
        const selectDropdown: HTMLSelectElement = this.reportForm['publisher-name'];
        publishers.forEach(publisher => {
            let option: HTMLElement = document.createElement('OPTION');
            let value = document.createTextNode(publisher.publisherName);
            selectDropdown.appendChild(option);
            option.appendChild(value);
        });
    }
}