import React from 'react';
import {render} from "react-dom";

const List = ({data = [], onClick, renderItem}) => {
    return (
        <ul className="list">
            {data.map((item, index) => (
                <li key={item.id} onClick={() => onClick(item.keyword)}>
                    {renderItem(item, index)}
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

