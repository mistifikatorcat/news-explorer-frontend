import React from "react";


function SavedNewsHeader({articles,  username}){

    return(
        <section className="savedNewsHeader">
            <div className="savedNewsHeader__wrapper">
               <p className="savedNewsHeader__label">Saved Articles</p>
               <h2 className="savedNews__title">{username}, you have {articles.length}  saved articles</h2> 
               <p className="savedArticles__keywords">By keywords: {articles[0].keyword}, {articles[1].keyword}, and {articles.length-2} more</p>
            </div>
        </section>
    )
}

export default SavedNewsHeader;