import React from "react";
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import CardGrid from '../CardGrid/CardGrid';


function SavedNews ({username, articles}) {
    return(
        <>
        <SavedNewsHeader username={username} />
        <CardGrid articles={articles} />
        </>
    )

}

export default SavedNews;