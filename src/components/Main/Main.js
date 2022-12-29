import React from "react";
import './main.css';
import SearchResults from "../SearchResults/SearchResults";
import PreLoader from '../Preloader/Preloader';
import About from "../About/About";
import NothingFound from "../NothingFound/NothingFound";


function Main({ isLoading, articles}){
    
    return(
        <main>
           {isLoading && (
            <PreLoader />
           )}
           {articles.length === 0 ? (
            <NothingFound />
           ) : (
           <SearchResults articles={articles} />
           )
           }
            <About />       
        </main>
    )
}

export default Main;