import React from "react";
import './searchResults.css';
import CardGrid from "../CardGrid/CardGrid";



function SearchResults({foundArticles, isLoggedIn, keyword, setKeyword, onSave, onDelete}){

React.useEffect(() => {
    setKeyword(keyword)
}, [keyword])

    return(
        <section className="search-results">
                <h2 className="search-results__title">Search Results</h2>
                <CardGrid 
                foundArticles={foundArticles}
                isLoggedIn={isLoggedIn}
                onSave={onSave}
                onDelete={onDelete}/>
        </section>
    )
}

export default SearchResults;