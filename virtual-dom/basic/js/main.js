import store from "./js/store.js";
import {formatRelativeDate} from "./js/helpers.js";

// status을 이용하여 어플리케이션 로직을 구현할 수 있다.
// 컴포넌트 내부에서만 이용할 수 있다.

// 버블링이란??


const TabType = {
    KEYWORD: 'KEYWORD',
    HISTORY: 'HISTORY',
}

/**
 * 출력용 레이블
 * @type {{[p: string]: string}}
 */
const TabLabel = {
    [TabType.KEYWORD]: "추천검색어",
    [TabType.HISTORY]: "최근검색어"
}


// 리액트 컴포넌트를 이용하면 상태관리를 리액트에서 할 수 있다.
// 변수값이 변경되었을 때, 화면를 동시에 변경할 수 있다.
class App extends React.Component {
    constructor() {
        super();
        // 스테이트는 컴포넌트안에서만 만들 수 있다.
        this.state = {
            searchKeyword: "Hello",
            searchResult: [],
            submitted: false,
            selectedTab: TabType.KEYWORD,
            keywordList: [],
            historyList: []
        }
    }

    // 컴포넌트가 마운트된 직후, 트리에 삽입된 직후에 호출한다.
    // 화면이 만들어지기 전에 호출이 필요하다면 해당 함수를 사용해야 한다. 대신 render함수를 2번 호출하는 부분이라 성능이랑 연관이 있음.
    componentDidMount() {
        const keywordList = store.getKeywordList();
        const historyList = store.getHistoryList();
        this.setState({
            keywordList,
            historyList
        });
    }

// 리액트는 변경이 필요할 때만  랜더함수를 호출하여 값을 변경한다. 어떠한 변화가 일어났을 때 랜더함수를 호출하지 않으면
// 적용이 안된다.  --> 변수값을 변경한 뒤 강제로 forceUpdate를 쳐줘야 값이 변경된다.
//     handleChangeInput(event) {
//         this.state.searchKeyword = event.target.value;
//         this.forceUpdate()
//     }
    handleChangeInput(event) {
        const searchKeyword = event.target.value;

        if (searchKeyword.length <= 0 && this.state.submitted) {
            return this.handleReset();
        }

        // 리액트에서 제공하는 메소드,  상태값을 변경하고 forceUpdate를 하지 않아도 데이터와 뷰가 변경된다.
        // setState는 비동기 방식으로 변경된다.¡
        this.setState({
            searchKeyword: searchKeyword
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('TODO: handleSubmit ', this.state.searchKeyword)
        this.search(this.state.searchKeyword)
    }

    search(searchKeyword) {
        const searchResult = store.search(searchKeyword)
        this.setState({
            searchKeyword,
            searchResult,
            submitted: true
        })
    }

    handleReset() {
        // setState는 비동기이므로 콜백함수를 이용하여 동기처리
        this.setState(
            {
                searchKeyword: "",
                submitted: false,
            }
            // () => {
            //     return {searchKeyword: "",
            //         submitted: false};
            // },
            // () => {
            //     console.log("TODO: handleReset", this.state.searchKeyword)
            // }
        )
    }

    handleClickRemoveHistory(event, keyword) {
        event.stopPropagation();
        store.removeHistory(keyword);
        const historyList = store.getHistoryList();
        this.setState({historyList})
    }

    // 리엑트 앨리먼트를 반환하는 메소드
    render() {

        const keywordList = (
            <>
                <ul className="list">
                    {this.state.keywordList.map(({id, keyword}, index) => {
                        return (
                            <li key={id} onClick={() => this.search(keyword)}>
                                <span className="number">{index + 1}</span>
                                <span>{keyword}></span>
                            </li>
                        )
                    })}
                </ul>
            </>
        )

        const historyList = (
            <ul className="list">
                {this.state.historyList.map(({id, keyword, date}) => (
                    <li key={id} onClick={() => this.search(keyword)}>
                        <span>{keyword}</span>
                        <span className="date">{formatRelativeDate(date)}</span>
                        <button className="btn-remove" onClick={(event) => this.handleClickRemoveHistory(event, keyword)}/>
                    </li>
                ))}
            </ul>
        )

        // 조건부 렌더링 - 엘리멘트 변수 방식
        // let resetButton = null;
        //
        // if (this.state.searchKeyword.length > 0) {
        //     resetButton = <button type="reset" className="btn-reset"></button>
        // }

        // 엘리멘탈 변수를 이용하여 리팩토링 진행 (컴포넌트마다 분리)
        const searchForm = (
            <form onSubmit={event => this.handleSubmit(event)}
                  onReset={() => this.handleReset()}>
                {/*중괄호를 이용하여 자바스크립트 변수를 넣을 수 있다.*/}
                <input type="text"
                       name="form-input"
                       placeholder="검색어를 입력하세요" autoFocus
                       value={this.state.searchKeyword}
                       onChange={event => this.handleChangeInput(event)}
                />

                {/*<button type="reset" className="btn-reset"></button>*/}

                {/* 조건부 렌더링 삼항 연산 방식*/}
                {/*{this.state.searchKeyword.length > 0 ?*/}
                {/*    <button type="reset" className="btn-reset"></button> :*/}
                {/*    null}*/}

                {/* && 연산을 사용하는 방식*/}
                {this.state.searchKeyword.length > 0 && <button type="reset" className="btn-reset"></button>}
            </form>
        )

        const searchResult = (
            (this.state.searchResult.length > 0
                ? (<ul>
                    {this.state.searchResult.map(item => {
                        return (
                            <li key={item.id}>
                                <img src={item.imageUrl} alt={item.name}/>
                                <p>{item.name}</p>
                            </li>
                        )
                    })}
                </ul>)

                : (<div className="empty-box"> 검색 결과가 없습니다.</div>))
        )

        const tabs = (
            <>
                <ul className="tabs">
                    {Object.values(TabType).map((tabType) => {
                        return (<li key={tabType}
                                    className={this.state.selectedTab === tabType ? 'active' : ''}
                                    onClick={() => this.setState({selectedTab: tabType})}>
                            {TabLabel[tabType]}
                        </li>)
                    })}
                </ul>
                {/* 화면을 분기 처리할 땐 삼항자 연산 + && */}
                {this.state.selectedTab === TabType.KEYWORD && keywordList}
                {this.state.selectedTab === TabType.HISTORY && historyList}
            </>
        );

        return (
            <>
                <header>
                    <h2 className="container">검색</h2>
                </header>
                <div className="container">
                    {searchForm}
                    <div className="content">
                        {this.state.submitted == true ? searchResult : tabs}
                    </div>
                </div>
            </>
        );
    }
}


// 클래스에 있는 랜더를 사용하기 위해서는 객체화하여서 나타내야 한다. 리액트 돔이 가상돔을 그린다.
ReactDOM.render(<App/>, document.querySelector("#app"));
