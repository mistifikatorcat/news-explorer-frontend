import React from "react";
import './cardgrid.css';
import Card from "../Card/Card";
import { useLocation } from "react-router-dom";
import { nanoid } from "nanoid";



function CardGrid({foundArticles, savedArticles, isLoggedIn, onSave, onDelete}){

  const [cardsShown, setCardsShown] = React.useState(9);


    return(
      <>
        <section className='grid'>
            <ul className="grid__gallery">
            {foundArticles.slice(0, cardsShown).map((card, i) => (
            <Card
              key={card._id || nanoid()}
              article={card}
              image={card.urlToImage}
              date={card.publishedAt}
              title={card.title}
              text={card.text}
              source={card.source.name}
              keyword={card.keyword}
              link={card.link}
            isLoggedIn={isLoggedIn}
            onDelete={onDelete}
            onSave={onSave}
            savedArticles={savedArticles}
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