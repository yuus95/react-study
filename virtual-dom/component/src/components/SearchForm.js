import React from "react";


export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKeyword: "",
        }
    }

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

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}
                  onReset={() => this.handleReset()}>
                {/*중괄호를 이용하여 자바스크립트 변수를 넣을 수 있다.*/}
                <input type="text"
                       name="form-input" placeholder="검색어를 입력하세요" autoFocus
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
        );
    }

}
