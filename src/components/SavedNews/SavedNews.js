import React from "react";
import SavedHeader from '../SavedHeader/SavedHeader';
import SavedCardGrid from '../SavedCardGrid/SavedCardGrid';


function SavedNews ({savedArticles, onDelete, username}) {
    return(
        <>
        <SavedHeader savedArticles={savedArticles} username={username} />

        <SavedCardGrid 
        savedArticles={savedArticles}
        onDelete={onDelete} />

        </>
    )

}

export default SavedNews;