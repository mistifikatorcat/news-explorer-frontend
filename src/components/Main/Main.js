import React from "react";
import './main.css';
import SearchResults from "../SearchResults/SearchResults";
import PreLoader from '../Preloader/Preloader';
import About from "../About/About";
import NothingFound from "../NothingFound/NothingFound";


function Main({ isLoading, isSearching,  isLoggedIn, foundArticles, savedArticles, searchData, setSearchData, onSave, onDelete, isServerError}){
    
    return(
        <main>
      
            <PreLoader />
         
           {foundArticles.length !== 0 ? (
           <SearchResults 
           savedArticles={savedArticles}
           foundArticles={foundArticles}
          isLoggedIn={isLoggedIn}
           searchData={searchData}
          setSearchData={setSearchData}
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