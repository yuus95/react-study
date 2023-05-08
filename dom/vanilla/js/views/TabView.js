import {delegate,  qs, qsAll} from "../helpers.js";
import View from "./View.js";

/**
 *  먼저 화면을 그리고 그다음 컨트롤러에 가서 화면을 사용할 수 있도록 구현한다.
 */


const tag = "[TabView]";

/**
 * 탭을 그리기 위한 탭 정보
 * @type {{KEYWORD: string, HISTORY: string}}
 */
export const TabType = {
    KEYWORD: 'KEYWORD',
    HISTORY: 'HISTORY',
}

/**
 * 출력용 레이블
 * @type {{[p: string]: string}}
 */
const TabLabel = {
    [TabType.KEYWORD]: "추천검색어",
    [TabType.HISTORY]: "최근검색어"

}


export default class TabView extends View {
    constructor() {
        console.log(tag, 'Tabview')
        super(qs('#tab-view'));
        this.template = new Template();
        this.bindEvents();
    }

    bindEvents() {
        delegate(this.element, "click", "li", (event) => this.handleClick(event));
    }

    handleClick(event) {
        console.log(tag, "handleClick", event.target.dataset.tab);

        const value = event.target.dataset.tab;
        this.emit("@change", { value });
    }

    show(selectedTab) {
        this.element.innerHTML = this.template.getList();
        qsAll("li", this.element).forEach((li) => {
            li.className = li.dataset.tab == selectedTab ? "active" : "";
        });

        super.show();
    }
}

class Template {
    getList() {
        return `
            <ul class="tabs">
               ${Object.values(TabType)
            .map((tabType) => ({tabType, tabLabel: TabLabel[tabType]}))
            .map(this._getTab)
            .join("")}
             </ul>
               `;
    }

    _getTab({tabType, tabLabel}) {
        return `
        <li data-tab = ${tabType}>
            ${tabLabel}
        </li>
        `
    }
}
