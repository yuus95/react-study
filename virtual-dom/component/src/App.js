import React from "react";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js"
import SearchResult from "./components/SearchResult.js";
import Store from "./store.js"
import Tabs, {TabType} from "./components/Tabs.js"
import KeywordList from "./components/KeywordList.js";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchKeyword: "",
            searchResult: [],
            submitted: false,
            selectedTab: TabType.KEYWORD

        }
    }

    search(searchKeyword) {
        const searchResult = Store.search(searchKeyword);
        const submitted = true
        this.setState({searchResult,submitted});
    }

    reset() {
        const submitted = false;
        this.setState({submitted,
            searchResult:[]})
    }

    handleChangeInput(searchKeyword) {
        if (searchKeyword.length <= 0) {
            this.reset();
        }

        this.setState({searchKeyword});
    }

    // 특정 컴포넌트의 스테이트를 다른 근처 컴포넌트에서도 사용할 경우,
    // 부모 컴포넌트로 끌어올리는게 올바른 방법이다.
    render() {
        const {searchKeyword, submitted, searchResult,selectedTab} = this.state;

        return (
            <>
                <Header title="검색"/>
                <SearchForm value={searchKeyword}
                            onSubmit={(searchKeyword) => this.search(searchKeyword)}
                            onReset={() => this.reset()}
                            onChange={(value) => this.handleChangeInput(value)}
                />

                {submitted ?
                    <SearchResult data={searchResult}/> :
                    <Tabs selectedTab= {selectedTab} onChange={(selectedTab) => {this.setState({selectedTab})}}/>}

                {selectedTab === TabType.KEYWORD && <KeywordList />}
                {selectedTab === TabType.HISTORY && <> TODO: 최근검색어 </>}
            </>
        )
            ;
    }
}
