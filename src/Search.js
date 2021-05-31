import React, { useState } from 'react'

const Search = ({onSearch, onKeyPress}) => {

    const [search, setSearch] = useState('');

    const onInputChange = (value) => {
        setSearch(value);
        onSearch(value);
    }

    return (
        <input
            type="text"
            className=""
            value={search}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyPress={onKeyPress}
        />
    )
}

export default Search
