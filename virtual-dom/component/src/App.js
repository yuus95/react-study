import React from "react";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm"

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchKeyword: "",
        }
    }

    search(searchKeyword) {
        console.log("TODO : searchKeyword " + searchKeyword)
    }

    reset() {
        console.log("TODO: reset start")
    }

    handleChangeInput(searchKeyword) {
        if (searchKeyword.length <= 0) {
            this.reset();
        }

        this.setState({searchKeyword});
    }

    render() {
        return (
            <>
                <Header title="검색"/>
                <SearchForm value={this.state.searchKeyword}
                            onSubmit={(searchKeyword) => this.search(searchKeyword)}
                            onReset={() => this.reset()}
                            onChange={(value) => this.handleChangeInput(value)}
                />
            </>
        )
            ;
    }
}
