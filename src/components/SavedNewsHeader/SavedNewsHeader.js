import React from "react";
import { initialData } from "../../utils/initialData";
import './savednewsheader.css';

function SavedNewsHeader({username}){

    return(
        <section className="savedNewsHeader">
            <div className="savedNewsHeader__wrapper">
               <p className="savedNewsHeader__label">Saved Articles</p>
               <h2 className="savedNewsHeader__title">{username}, you have {initialData.length}  saved articles</h2> 
               <p className="savedNewsHeader__keywords">By keywords:
               <span className='savedNewsHeader__keyword'> {initialData[0].keyword}, {initialData[1].keyword}, and {initialData.length-2} more </span></p>
            </div>
        </section>
    )
}

export default SavedNewsHeader;