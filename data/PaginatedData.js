export const PaginatedData = class {
    constructor({
                    list = [],
                    currentPage = 0,
                    nbListItemsToDisplay = 10,
                    nbPaginationItemsToDisplay = 5
                } = {}) {

        this.list = list
        this.currentPage = currentPage
        this.nbListItemsToDisplay = nbListItemsToDisplay
        this.nbPaginationItemsToDisplay = nbPaginationItemsToDisplay

        this.listElement = document.createElement("ul")
        document.body.appendChild(this.listElement)

        this.paginationElement = document.createElement("ul")
        document.body.appendChild(this.paginationElement)

        this.renderList()
        this.renderPagination()
    }

    renderList() {
        this.listElement.innerHTML = `
            ${this.list.map(listItem => `<li>${listItem}</li>`).join("")}
        `
    }

    paginationData() {

    }

    range(from, to, step = 1) {
        let i = from;
        const range = [];

        while (i <= to) {
            range.push(i);
            i += step;
        }

        return range;
    }

    renderPagination() {

    }

    goToPage(page) {
        this.currentPage = page
        this.renderList()
        this.renderPagination()
    }
}
