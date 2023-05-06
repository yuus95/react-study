const tag = "[Controller]";

export default class Controller {
    constructor(
        store,
        {
            searchFormView,
            searchResultView,
            tabView,
        }
    ) {
        console.log(tag, "constructor");
        this.store = store;
        this.searchFormView = searchFormView;
        this.searchResultView = searchResultView;
        this.tabView = tabView;

        this.subscribeViewEvents();
        this.render();
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
            this.tabView.hide();
            this.searchResultView.show(this.store.searchResult)
            return
        }
        this.tabView.show();
        this.searchResultView.hide();
    }

    renderSearchResult() {
        this.searchFormView.show(this.store.searchKeyword);
        this.searchResultView.show(this.store.searchResult);
    }
}
