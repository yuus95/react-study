import React from 'react'

const SearchForm = ({value, onSubmit, onReset, onChange}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchKeyword = value;
        onSubmit(searchKeyword);
    }

    const handleReset = () => {
        onReset();
    }

    const handleChangeInput = (event) => {
        onChange(event.target.value);
    }

    return (
        <form
            onSubmit={handleSubmit}
            onReset={handleReset}>
            <input type="text"
                   name="form-input"
                   value={value}
                   placeholder="검색어를 입력하세요"
                   onChange={value => handleChangeInput(value)}/>

            {value.length > 0 && <button type = "reset" className="btn-reset"></button> }
        </form>
    )
}

export default SearchForm
