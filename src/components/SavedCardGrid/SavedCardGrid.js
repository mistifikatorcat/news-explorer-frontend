import React from "react";
import Card from "../Card/Card";
import { nanoid } from "nanoid";




function SavedCardGrid({savedArticles, onDelete, cards }){
   
  const [cardsShown, setCardsShown] = React.useState(9);


    return (
        <>
        <section className="grid grid_saved">
            <ul className="grid__gallery">
            {savedArticles.slice(0, cardsShown).map((card, i) => (
            <Card
              key={card._id || nanoid()}
              cards={card}
              image={card.urlToImage}
              date={card.date}
              title={card.title}
              text={card.text}
              source={card.source.name}
              keyword={card.source.name}
              link={card.link}
            onDelete={onDelete}
            />
          )
          )} 
            </ul>
        </section>
        <button type="button" className="search-results__more" onClick={() => setCardsShown((prev) => (prev+=3))}>Show More</button>
        </>
    )
}

export default SavedCardGrid;