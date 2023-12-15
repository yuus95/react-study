import React from "react";
import List from "./List";
import Store from "../store.js"
import {formatRelativeDate} from "../helpers.js"

export default class HistoryList extends List {

    componentDidMount() {
        this.fetch();
    }

    fetch() {
        const data = Store.getHistoryList();
        this.setState({data})
    }

    removeHistory(event, keyword) {
        event.stopPropagation(); // 이벤트 전파 막기
        console.log("removeHistory")
        Store.removeHistory(keyword)
        this.fetch();
    }

    renderItem(item, index) {
        return (
            <>
                <span className="number">{index} </span>
                <span>{item.keyword}</span>
                <span className="date">{formatRelativeDate(item.date)}</span>
                <button className="btn-remove" onClick={(event) => this.removeHistory(event, item.keyword)}/>
            </>
        )
    }
}
