import React from "react";

import sadface from '../../images/not-found_v1.svg';

function NothingFound(){
    return(
        <section className="nothing">
            <img className="nothing__image" src={sadface} alt='Nothing Found' />
            <h2 className="nothing__title">Nothing Found</h2>
            <p className="nothing__subtitle">Sorry, but nothing matched your search terms.</p>
        </section>
    )
}

export default NothingFound;