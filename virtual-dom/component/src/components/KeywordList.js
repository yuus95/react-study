import React from 'react';
import List from './List.js';
import store from '../store.js'

export default class KeywordList extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            keywordList: []
        })
    }

    componentDidMount() {
        const keywordList = store.getKeywordList();
        this.setState({keywordList})
    }

    render() {
        return (
            <List data={this.state.keywordList} onClick={this.props.onClick}/>
        )
    }
}
