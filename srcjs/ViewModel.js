export class ViewModel {
    constructor() {
        this.reportForm = document.forms[0];
    }
    setUpPublisherFormView(publishers) {
        this.reportForm.reset();
        const selectDropdown = this.reportForm['publisher-name'];
        publishers.forEach(publisher => {
            let option = document.createElement('OPTION');
            let value = document.createTextNode(publisher.publisherName);
            selectDropdown.appendChild(option);
            option.appendChild(value);
        });
    }
}
