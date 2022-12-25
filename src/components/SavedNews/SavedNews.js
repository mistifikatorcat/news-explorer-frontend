import React from "react";
import SavedHeader from '../SavedHeader/SavedHeader';
import CardGrid from '../CardGrid/CardGrid';


function SavedNews ({username, articles}) {
    return(
        <>
        <SavedHeader username={username} />
        <CardGrid articles={articles} />
        </>
    )

}

export default SavedNews;