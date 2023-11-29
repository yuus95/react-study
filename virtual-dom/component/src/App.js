import React from "react";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm"

export default class App extends React.Component {

    search(searchKeyword) {
        console.log("TODO : searchKeyword" + searchKeyword)
    }

    reset() {
        console.log("TODO: reset start")
    }

    render() {
        return (
            <>
                <Header title="검색"/>
                <SearchForm onSubmit={(searchKeyword) => this.search(searchKeyword)}
                            onReset={() => this.reset()}/>
            </>
        )
            ;
    }
}
