import {emit, on} from "../helpers.js";

const tag = "[View]";

export default class View {
    constructor(element) {
        console.log(tag, "constructor")

        if (!element) throw "no element";

        this.element = element;
        this.originalDisplay = this.element.style.display || "";
        return this;
    }

    hide() {
        this.element.style.display = "none";
        return this;
    }

    show() {
        this.element.style.display = this.originalDisplay;
        return this;
    }

    /**
     * 해당 폼에서 발생하는 모든 이벤트를 에서 이벤트 함수를 걸기 위해 사용
     * @param eventName
     * @param handler
     * @returns {View}
     */
    on(eventName, handler) {
        on(this.element, eventName, handler);
        return this;
    }

    emit(eventName, data) {
        emit(this.element, eventName, data);
        return this;
    }
}
