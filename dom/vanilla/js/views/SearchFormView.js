import View from "./View.js";
import {on, qs} from "../helpers.js";


const tag = "[SearchFormView]";

export default class SearchFormView extends View {
    constructor() {
        console.log(tag, "constructor");

        super(qs("#search-form-view"));

        this.inputElement = qs("[type=text]", this.element);
        this.resetElement = qs("[type=reset]", this.element);

        /**
         * Reset 버튼은 처음에 필요없으니간 숨김처리;
         */
        this.showResetButton(false);

        /**
         * bindEvents
         * 해당 뷰에 필요한 이벤트들을 정의할 수 있는 함수를 실행한다.
         */
        this.bindEvents();
    }

    showResetButton(visible = true) {
        console.log("showResetButton");
        this.resetElement.style.display = visible ? "block" : "none";
    }

    bindEvents() {

        /*
         해당 뷰에 있는 특정 속성에 이벤트를 걸기 위해 사용한다.
         */
        on(this.inputElement, "keyup", event => this.handleKeyup(event));
        this.on("submit", (event) => this.handleSubmit(event));
        this.on("reset", () => this.handleReset());

    }

    handleKeyup() {
        const {value} = this.inputElement;
        this.showResetButton(value.length > 0);
    }

    handleSubmit(event) {
        event.preventDefault();

        const {value} = this.inputElement;
        this.emit("@submit", {value});
    }

    handleReset() {
        this.emit("@reset");
    }

}
