import React from "react";
import './cardgrid.css';
import Card from "../Card/Card";
import { nanoid } from "nanoid";



function CardGrid({foundArticles, savedArticles, isLoggedIn, onSave, onMore, onDelete}){

  const [cardsShown, setCardsShown] = React.useState(3);


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
              keyword={card.source.name}
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
        <button type="button" className="search-results__more" onClick={onMore}>Show More</button>
        </>
    )
}

export default CardGrid;