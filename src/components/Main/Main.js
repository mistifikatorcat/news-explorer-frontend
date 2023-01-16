import React from "react";
import './main.css';
import SearchResults from "../SearchResults/SearchResults";
import PreLoader from '../Preloader/Preloader';
import About from "../About/About";
import NothingFound from "../NothingFound/NothingFound";


function Main({ isLoading, isSearching,  isLoggedIn, foundArticles, keyword, setKeyword, onSave, onDelete, isServerError}){
    
    return(
        <main>
           {(isLoading) && (isSearching) (
            <PreLoader />
           )}
           {foundArticles.length !== 0 ? (
           <SearchResults 
           foundArticles={foundArticles}
          isLoggedIn={isLoggedIn}
           keyword={keyword}
          setKeyword={setKeyword}
          onSave={onSave}
           onDelete={onDelete} />
           ) : (
           <NothingFound 
           isServerError={isServerError}/>
           )
           }
            <About />       
        </main>
    )
}

export default Main;