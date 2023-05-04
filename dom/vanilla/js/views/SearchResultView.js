import View from "./View.js";
import {qs} from "../helpers.js";

const tag = "[SearchResultView]"


export default class SearchResultView extends View {
    constructor() {
        console.log(tag, "SearchFormView");
        super(qs("#search-result-view"))

        this.template = new Template();
    }

    show(data = []) {
        this.element.innerHTML =
            data.length > 0
                ? this.template.getList(data)
                : this.template.getEmptyMessage();

        super.show();
    }
}

class Template {
    getEmptyMessage() {
        return `
      <div class="empty-box">
        검색결과가 없습니다
      </div>
    `;
    }

    // 2
    getList(data = []) {
        return `<ul class="result">${data.map(this._getItem).join("")}</ul>`
    }

    // 3
    _getItem({name, imageUrl}) {
        return `
      <li>
        <img src="${imageUrl}" />
        <p>${name}</p>
      </li>
    `
    }

}
