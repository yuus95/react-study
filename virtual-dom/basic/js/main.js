// status을 이용하여 어플리케이션 로직을 구현할 수 있다.
// 컴포넌트 내부에서만 이용할 수 있다.


// 리액트 컴포넌트를 이용하면 상태관리를 리액트에서 할 수 있다.
class App extends React.Component {
    constructor() {
        super();
        // 스테이트는 컴포넌트안에서만 만들 수 있다.
        this.state = {
            searchKeyword: "Hello",
        }
    }

// 리액트는 변경이 필요할 때만  랜더함수를 호출하여 값을 변경한다. 어떠한 변화가 일어났을 때 랜더함수를 호출하지 않으면
// 적용이 안된다.  --> 변수값을 변경한 뒤 강제로 forceUpdate를 쳐줘야 값이 변경된다.
//     handleChangeInput(event) {
//         this.state.searchKeyword = event.target.value;
//         this.forceUpdate()
//     }

    handleChangeInput(event) {
        const searchKeyword = event.target.value;

        if (searchKeyword.length <= 0) {
            return this.handleReset();
        }

        // 리액트에서 제공하는 메소드 상태값 변경하고 forceUpdate를 하지 않아도 데이터와 뷰가 변경된다.
        // setState는 비동기 방식으로 변경된다.
        this.setState({
            searchKeyword: searchKeyword
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('TODO: handleSubmit ', this.state.searchKeyword)
    }

    handleReset() {
        // setState는ㄴ 비동기이므로 콜백함수를 이용하여 동기처리
        this.setState(
            () => {
                return {searchKeyword: ""};
            },
            () => {
                console.log("TODO: handleReset", this.state.searchKeyword)
            }
        )
    }

    // 리엑트 앨리먼트를 반환하는 메소드
    render() {

        // 조건부 렌더링 - 엘리멘트 변수 방식
        // let resetButton = null;
        //
        // if (this.state.searchKeyword.length > 0) {
        //     resetButton = <button type="reset" className="btn-reset"></button>
        // }


        return (
            <>
                <header>
                    <h2 className="container">검색</h2>
                </header>
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
            </>
        );
    }
}


// 클래스에 있는 랜더를 사용하기 위해서는 객체화하여서 나타내야 한다. 리액트 돔이 가상돔을 그린다.
ReactDOM.render(<App/>, document.querySelector("#app"));
