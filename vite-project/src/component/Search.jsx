import React from 'react'

const Search = (props) => {
    return (
        <div className="search" >
            <div>
                <img src="vite-project/public/icons8-search-94.png" alt="search-icon"/>
            <input
                type="text"
                placeholder="Search movies"
                className="search-input"
                value={props.searchterm}

                onChange={event => props.setSearchTerm(event.target.value)}
                    />
            </div>
        </div>
    )
}
export default Search
