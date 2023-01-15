import React from "react";
import './searchForm.css';
function SearchForm({setKeyword, searchArticles}){

  const [search, setSearch] = React.useState("");


  function handleSubmit(e){
    e.preventDefault(e);
    setKeyword(search);
    searchArticles(search);
  }

  function handleChange(e){
    setSearch(e.target.value);
  }

    return(
        <section className="search-form">
            <div className="search-form__wrapper">
                <h1 className="search-form__title">What's going on in the world?</h1>
                <p className="search-form__subtitle">Find the latest news on any topic and save them in your personal account.</p>
                <form className="search-form__searchbar" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="text"
          name="search-input"
          id="search-input"
          placeholder="Enter Topic"
          onChange={handleChange}
          value={search || ''}
          required
        />
        <button type="submit" className="search-form__submit">Search</button>
                </form>
            </div>
        </section>
    )
}

export default SearchForm;