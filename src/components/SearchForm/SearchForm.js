import React from "react";
import './searchForm.css';
function SearchForm(){
    return(
        <section className="search-form">
            <div className="search-form__wrapper">
                <h1 className="search-form__title">What's going on in the world?</h1>
                <p className="search-form__subtitle">Find the latest news on any topic and save them in your personal account.</p>
                <form className="search-form__searchbar">
        <input
          className="search-form__input"
          type="text"
          name="search-input"
          id="search-input"
          placeholder="Enter Topic"
        //   onChange={onName}
          required
        />
        <button type="submit" className="search-form__submit">Search</button>
                </form>
            </div>
        </section>
    )
}

export default SearchForm;