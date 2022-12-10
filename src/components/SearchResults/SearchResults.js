import React from "react";
import './searchResults.css';
import CardGrid from "../CardGrid/CardGrid";



function SearchResults({articles}){
    return(
        <section className="searchResults">
                <h2 className="searchResults__title">Search Results</h2>
                <CardGrid articles={articles}/>
                <button type="button" className="searchResults__more">Show More</button>
        </section>
    )
}

export default SearchResults;