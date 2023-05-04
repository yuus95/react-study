// 태그의 용도는? 콘솔 로그에서 폴더의 위치를 파악하기 위해
import Store from "./Store.js";
import storage from "./storage.js";
import SearchFormView from "./views/SearchFormView.js";
import Controller from "./Controller.js";

const tag = "[main]";

document.addEventListener("DOMContentLoaded", main);

function main() {
    console.log(tag, "main");
    //
    const store = new Store(storage);
    const views = {
        searchFormView: new SearchFormView()
    }

    new Controller(store, views);

}
