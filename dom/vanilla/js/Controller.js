import {TabType} from "./views/TabView.js";

const tag = "[Controller]";

export default class Controller {
    constructor(
        store,
        {
            searchFormView,
            searchResultView,
            tabView,
            keywordListView,
        }
    ) {
        console.log(tag, "constructor");
        this.store = store;
        this.searchFormView = searchFormView;
        this.searchResultView = searchResultView;
        this.tabView = tabView;
        this.keywordListView = keywordListView;

        this.subscribeViewEvents();
        this.render();
    }

    /**
     * 검색뷰와 검색결과뷰의 행위를 연동 시키기 위해 새로운 이벤트를 정의
     */
    subscribeViewEvents() {
        this.searchFormView
            .on("@submit", event => this.search(event.detail.value))
            .on("@reset", _ => this.reset())

        this.tabView.on("@change", (event) => this.changeTab(event.detail.value));
        this.keywordListView.on("@click", (event) => this.search(event.detail.value));
    }

    search(keyword) {
        console.log(tag, "search", keyword);

        this.store.search(keyword);
        this.render();
    }

    reset() {
        this.store.search("");
        this.render();
    }

    render() {
        if (this.store.searchKeyword.length > 0) {
            return this.renderSearchResult();
        }


        this.tabView.show(this.store.selectedTab);
        this.searchResultView.hide();

        if (this.store.selectedTab == TabType.KEYWORD) {
            this.keywordListView.show(this.store.keywordList())
        } else if (this.store.selectedTab == TabType.HISTORY) {
            console.log("History")
            this.keywordListView.hide();
        }
    }

    renderSearchResult() {
        this.tabView.hide();
        this.keywordListView.hide();

        this.searchFormView.show(this.store.searchKeyword);
        this.searchResultView.show(this.store.searchResult);
    }

    changeTab(tab) {
        console.log(tag, "change tab", tab);
        this.store.selectedTab = tab;
        this.render();
    }
}
