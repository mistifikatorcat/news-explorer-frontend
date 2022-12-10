import React from "react";
import './searchForm.css';
function SearchForm(){
    return(
        <section className="searchForm">
            <div className="searchForm__wrapper">
                <h1 className="searchForm__title">What's going on in the world?</h1>
                <p className="searchForm__subtitle">Find the latest news on any topic and save them in your personal account.</p>
                <form className="searchForm__searchbar">
        <input
          className="searchForm__input"
          type="text"
          name="search-input"
          id="search-input"
          placeholder="Enter Topic"
        //   onChange={onName}
          required
        />
        <button type="submit" className="searchForm__submit">Search</button>
                </form>
            </div>
        </section>
    )
}

export default SearchForm;