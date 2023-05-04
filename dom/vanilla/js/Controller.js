const tag = "[Controller]";

export default class Controller {
    constructor(
        store,
        {
            searchFormView,
            searchResultView
        }
    ) {
        console.log(tag, "constructor");
        this.store = store;
        this.searchFormView = searchFormView;
        this.searchResultView = searchResultView;
        this.subscribeViewEvents();
    }

    subscribeViewEvents() {
        this.searchFormView
            .on("@submit", event => this.search(event.detail.value))
            .on("@reset", _ => this.reset())
    }

    search(keyword) {
        console.log(tag, "search", keyword);

        this.store.search(keyword);
        this.render();
    }

    reset() {
        console.log("@reset");
    }

    render() {
        if (this.store.searchKeyword.length > 0) {
            return this.renderSearchResult();
        }
    }

    renderSearchResult() {
        this.searchFormView.show(this.store.searchKeyword);
        this.searchResultView.show(this.store.searchResult);
    }
}
