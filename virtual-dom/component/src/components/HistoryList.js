import React from "react";
import List from "./List.js";
import Store from "../store.js"
import {formatRelativeDate} from "../helpers.js"

export default class HistoryList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = ({historyList: []})
    }

    componentDidMount() {
        const historyList = Store.getHistoryList();
        this.setState({historyList})
    }

    fetch() {
        const historyList = Store.getHistoryList();
        this.setState({historyList})
    }

    removeHistory(event, keyword) {
        Store.removeHistory(keyword)
        this.fetch();
    }

    render() {
        return (
            <>
                <List data={this.state.historyList} onClick={this.props.onClick}
                      onRemove={(keyword) => this.removeHistory(keyword)}/>
            </>
        );
    }
}

//
// export default class HistoryList extends List {
//
//     componentDidMount() {
//         this.fetch();
//     }
//
//     fetch() {
//         const data = Store.getHistoryList();
//         this.setState({data})
//     }
//
//     removeHistory(event, keyword) {
//         event.stopPropagation(); // 이벤트 전파 막기
//         console.log("removeHistory")
//         Store.removeHistory(keyword)
//         this.fetch();
//     }
//
//     renderItem(item, index) {
//         return (
//             <>
//                 <span className="number">{index} </span>
//                 <span>{item.keyword}</span>
//                 <span className="date">{formatRelativeDate(item.date)}</span>
//                 <button className="btn-remove" onClick={(event) => this.removeHistory(event, item.keyword)}/>
//             </>
//         )
//     }
// }
