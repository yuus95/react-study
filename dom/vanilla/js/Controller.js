const tag = "[Controller]";

export default class Controller {
    constructor(
        store,
        {
            searchFormView,
        }
    ) {
        console.log(tag, "constructor");
        this.store = store;
        this.searchFormView = searchFormView;
        this.subscribeViewEvents();
    }

    subscribeViewEvents() {
        this.searchFormView
            .on("@submit", event => this.search(event.detail.value))
            .on("@reset", _ => this.reset())
    }

    search(keyword) {
        console.log(keyword);
    }

    reset() {
        console.log("@reset");
    }
}
