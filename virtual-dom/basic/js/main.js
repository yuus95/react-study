const element = (
    <>
        <header>
            <h2 className="container">검색</h2>
        </header>
        <form id="search-form-view">
            <input type="text" name="form-input" placeholder="검색어를 입력하세요"/>
            <button type="reset" className="btn-reset"></button>
        </form>
    </>
);

ReactDOM.render(element, document.querySelector("#app"));
