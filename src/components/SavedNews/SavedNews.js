import React from "react";
import SavedHeader from '../SavedHeader/SavedHeader';
import SavedCardGrid from '../SavedCardGrid/SavedCardGrid';


function SavedNews ({savedArticles, onDelete}) {
    return(
        <>
        <SavedHeader savedArticles={savedArticles} />

        <SavedCardGrid 
        savedArticles={savedArticles}
        onDelete={onDelete} />

        </>
    )

}

export default SavedNews;