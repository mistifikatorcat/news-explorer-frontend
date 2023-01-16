import React from "react";
import './cardgrid.css';
import Card from "../Card/Card";
import { useLocation } from "react-router-dom";
import { nanoid } from "nanoid";



function CardGrid({foundArticles,  isLoggedIn, onSave, onDelete}){

  const [cardsShown, setCardsShown] = React.useState(3);


    return(
      <>
        <section className='grid'>
            <ul className="grid__gallery">
            {foundArticles.slice(0, cardsShown).map((card) => (
            <Card
              key={card._id || nanoid()}
              article={card}
            isLoggedIn={isLoggedIn}
            onDelete={onDelete}
            onSave={onSave}
    
            />
          )
          )} 
            </ul>
        </section>
        <button type="button" className="search-results__more" onClick={() => setCardsShown((prev) => (prev+=3))}>Show More</button>
        </>
    )
}

export default CardGrid;