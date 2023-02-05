import React from "react";
import './searchResults.css';
import CardGrid from "../CardGrid/CardGrid";



function SearchResults({articles}){
    return(
        <section className="search-results">
                <h2 className="search-results__title">Search Results</h2>
                <CardGrid articles={articles}/>
                <button type="button" className="search-results__more">Show More</button>
        </section>
    )
}

export default SearchResults;