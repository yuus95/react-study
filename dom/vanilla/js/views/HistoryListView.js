import KeywordListView from "./KeywordListView.js";
import {formatRelativeDate, qs} from "../helpers.js";

const tag = "[HistoryListview]";


export default class HistoryListView extends KeywordListView {
    constructor() {
        super(qs("#history-list-view"), new Template());
    }
}


class Template {
    getList(data = []) {
        return `
        <ul class = "list">
           ${data.map(item => this._getItem(item)).join("")}
        </ul>
        `

    }

    _getItem({ keyword, date }) {
        return `
      <li data-keyword="${keyword}">
        ${keyword}
        <span class="date">${formatRelativeDate(date)}</span>
        <button class="btn-remove"></button>
      </li>
    `;
    }

    getEmptyMessage() {
        return `
        <div>
        최근 검색어 목록이 없습니다. 
        </div>
        `
    }
}
