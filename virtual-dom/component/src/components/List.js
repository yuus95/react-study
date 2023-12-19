import React from 'react';
import {render} from "react-dom";
import {formatRelativeDate} from "../helpers";
import Store from "../store";

const List = ({data = [], onClick, hasIndex, hasDate, onRemove}) => {

    const handleClickRemove = (event, keyword) => {
        event.stopPropagation(); // 이벤트 전파 막기
        onRemove(keyword)
    }

    return (

        <ul className="list">
            {data.map((item, index) => (
                <li key={item.id} onClick={() => onClick(item.keyword)}>
                    {hasIndex && <span className="number">{index + 1}</span>}
                    <span>{item.keyword}</span>
                    {hasDate && <span className="date">{formatRelativeDate(item.date)}</span>}
                    {!!onRemove && <button className="btn-remove"
                                           onClick={(event) => handleClickRemove(event, item.keyword)}/>}
                </li>
            ))
            }
        </ul>
    )
}

export default List;

// class List extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             data: []
//         }
//     }
//
//     renderItem(item, index) {
//         console.log("Hello Render Item")
//     }
//
//     render() {
//         return (
//             <ul className="list">
//                 {this.state.data.map((item, index) => (
//                     <li key={item.id} onClick={() => this.props.onClick(item.keyword)}>
//                         {this.renderItem(item, index)}
//                     </li>
//                 ))
//                 }
//             </ul>
//         )
//     }
// }

