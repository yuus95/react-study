import React from 'react';
import Header from './components/Header.js'
import SearchFrom from './components/SearchForm.js'


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchKeyword: ""
        }
    }

    handleChangeInput(searchKeyword) {
        if (searchKeyword.length <= 0) {
            this.reset();
        }

        this.setState({searchKeyword});
    }

    render() {
        const {searchKeyword} = this.state
        return (
            <>
                <Header title="검색"/>
                <SearchFrom value={searchKeyword} onChange={searchKeyword => this.handleChangeInput(searchKeyword)}/>
            </>
        );
    }
}
