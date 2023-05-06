import {qs} from "../helpers.js";
import View from "./View.js";

/**
 *  먼저 화면을 그리고 그다음 컨트롤러에 가서 화면을 사용할 수 있도록 구현한다.
 */


const tag = "[TabView]";

/**
 * 탭을 그리기 위한 탭 정보
 * @type {{KEYWORD: string, HISTORY: string}}
 */
const TabType = {
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
    }

    show() {
        this.element.innerHTML = this.template.getList();
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
