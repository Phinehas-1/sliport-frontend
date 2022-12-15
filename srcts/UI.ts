import { LocalStorageStore } from "./Storage";
import { Repository } from "./Repository";
import { ViewModel } from "./ViewModel";
const changeTableHeadingSortOrder = (column: HTMLElement) => {
    if (column.dataset.order === 'ASC') {
        column.dataset.order = 'DESC';
        return;
    }
    column.dataset.order = 'ASC';
}

export const getSortedReportForTotalsTable = (column: any) => {
    changeTableHeadingSortOrder(column);
    let tableBody = document.getElementById('totals-table-body');
    tableBody?.remove();

    // sort reports in ascending order from lowest to highest.
    if (column.dataset.order === 'ASC') {

        let reports: any = Object.values(new Repository(new LocalStorageStore()).getReports());
        reports.sort((a: any, b: any) => {
            switch (column.dataset.name) {
                case 'placement': return a.placement - b.placement;
                case 'videoShowing': return a.videoShowing - b.videoShowing;
                case 'hour': return a.hour - b.hour;
                case 'returnVisit': return a.returnVisit - b.returnVisit;
                case 'bibleStudy': return a.bibleStudy - b.bibleStudy;
            }
        });
        console.log(column.dataset.order)
        let viewModel = new ViewModel();
        viewModel.setUpReportsTableView(reports);
        return;
    }
    // sort reports in descending order from highest to lowest.
    let reports: any = Object.values(new Repository(new LocalStorageStore()).getReports());
    reports.sort((a: any, b: any) => {
        switch (column.dataset.name) {
            case 'placement': return b.placement - a.placement;
            case 'videoShowing': return b.videoShowing - a.videoShowing;
            case 'hour': return b.hour - a.hour;
            case 'returnVisit': return b.returnVisit - a.returnVisit;
            case 'bibleStudy': return b.bibleStudy - a.bibleStudy;
        }
    });
    let viewModel = new ViewModel();
    viewModel.setUpReportsTableView(reports);
}
