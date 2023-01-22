import React from "react";
import SavedHeader from '../SavedHeader/SavedHeader';
import SavedCardGrid from '../SavedCardGrid/SavedCardGrid';


function SavedNews ({savedArticles, onDelete, username, cards}) {
    return(
        <>
        <SavedHeader savedArticles={savedArticles} username={username} />

        <SavedCardGrid 
        savedArticles={savedArticles}
        onDelete={onDelete} 
        cards={cards}
        />
        </>
    )

}

export default SavedNews;