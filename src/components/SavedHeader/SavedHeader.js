import React from "react";
import { initialData } from "../../utils/initialData";
import './savedheader.css';

function SavedNewsHeader({username}){

    return(
        <section className="saved-header">
            <div className="saved-header__wrapper">
               <p className="saved-header__label">Saved Articles</p>
               <h2 className="saved-header__title">{username}, you have {initialData.length}  saved articles</h2> 
               <p className="saved-header__keywords">By keywords:
               <span className='saved-header__keyword'> {initialData[0].keyword}, {initialData[1].keyword}, and {initialData.length-2} more </span></p>
            </div>
        </section>
    )
}

export default SavedNewsHeader;