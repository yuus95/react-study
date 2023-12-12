import React from 'react'

const SearchResult = ({data}) => {

    return (<ul className="result">
        {data.map(({id,imageUrl,name}) => (
            <li key={id}>
                <img src={imageUrl}/>
                <p>{name}</p>
            </li>
            ))}
    </ul>)
}
export default SearchResult
