// 태그의 용도는? 콘솔 로그에서 폴더의 위치를 파악하기 위해
import Store from "./Store.js";
import storage from "./storage.js";
import SearchFormView from "./views/SearchFormView.js";
import Controller from "./Controller.js";
import SearchResultView from "./views/SearchResultView.js";
import TabView from "./views/TabView.js";
import KeywordListView from "./views/KeywordListView.js";

const tag = "[main]";

document.addEventListener("DOMContentLoaded", main);

/**
 * 왜 main 함수를 모듈러 설정할까?
 *  요즘은 프론트 프로젝트도 규모가 커지고 있다. 규모가 커지면 자바스크립트 파일도 무거워진다.
 *  그렇게되면 파일마다 다른 js 파일을 참조할 때 마다 해당 파일의 모든 코드를 참조하게 되는데 이를 방지하고자
 *  모듈을 사용한다.  파일이 커질 경우 여러가지의 파일로 나뉘어 저장할 수 있는데 이 때 나뉘어진 파일들을 모듈이라고 한다.
 *  나뉘어진 모듈들 중에서 특정 모듈 파일만 가져와서 사용할 수 있도록 구현한다.
 *
 * 결론 : 요즘은 모듈을 사용하여 자바스크립트를 사용하였기 때문에 대세를 맞춰서 모듈로 진행한 듯 하다.
 */
function main() {
    console.log(tag, "main");
    //
    const store = new Store(storage);
    const views = {
        searchFormView: new SearchFormView(),
        searchResultView: new SearchResultView(),
        tabView: new TabView(),
        keywordListView: new KeywordListView(),
    }

    new Controller(store, views);

}
