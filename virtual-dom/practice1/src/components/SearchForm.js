import React from 'react';


const SearchForm = ({value, onChange}) => {
    const handleChangeInput = (event) => {
        onChange(event.target.value)
    }

    return (
        <form>
            <input type="text"
                   name="form-input"
                   value={value}
                   onChange={event => handleChangeInput(event)}
                   placeholder="검색어를 입력하세요"/>
        </form>
    )
}

export default SearchForm;
