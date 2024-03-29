import View from "./View.js";
import {delegate, qs} from "../helpers.js";

const tag = "[KeywordListView]";


export default class KeywordListView extends View {
    constructor(element = qs("#keyword-list-view"), template = new Template()) {
        super(element,);
        this.template = template;
        this.bindEvents()
    }

    bindEvents() {
        delegate(this.element, "click", "li", event => this.clickEvent(event))
    }

    clickEvent(event) {
        const value = event.target.dataset.keyword;
        this.emit("@click", {value})
    }

    show(data = []) {
        this.element.innerHTML = data.length > 0
            ? this.template.getList(data)
            : this.template.getEmptyMessage();

        super.show();
    }
}

class Template {

    getList(data = []) {
        return `
        <ul class = "list">
           ${data.map(item => this.getItem(item)).join("")}
        </ul>
        `

    }

    getItem({id, keyword}) {
        return `
        <li data-keyword = ${keyword} id = ${id}>
            ${keyword}
        </li>
        `
    }

    getEmptyMessage() {
        return `
        <div>
        추천 검색어 목록이 없습니다. 
        </div>
        `
    }
}
