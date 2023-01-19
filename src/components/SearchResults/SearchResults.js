import React from "react";
import './searchResults.css';
import CardGrid from "../CardGrid/CardGrid";



function SearchResults({foundArticles, savedArticles, isLoggedIn, searchData, setSearchData, onSave, onDelete}){

React.useEffect(() => {
    setSearchData(searchData)
}, [searchData])

    return(
        <section className="search-results">
                <h2 className="search-results__title">Search Results</h2>
                <CardGrid 
                savedArticles={savedArticles}
                foundArticles={foundArticles}
                isLoggedIn={isLoggedIn}
                onSave={onSave}
                onDelete={onDelete}/>
        </section>
    )
}

export default SearchResults;