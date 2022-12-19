import React from "react";
import './cardgrid.css';
import Card from "../Card/Card";
import { useLocation } from "react-router-dom";



function CardGrid({articles}){

  const location = useLocation();
  const currentLocation = location.pathname;
  const isSaved = currentLocation === '/saved-articles';

    return(
        <section className={` grid ${isSaved ? 'grid_saved' : ' '}`}>
            <ul className="grid__gallery">
            {articles.map((card) => (
            <Card
              key={card._id}
              keyword={card.keyword}
              title={card.title}
              text={card.text}
              source={card.source}
              date={card.date}
              image={card.image}
            //   onCardClick={props.onCardClick}
            //   onLikeClick={props.onLikeClick}
            //   onDeleteClick={props.onDeleteClick}
            />
          )
          )} 
            </ul>
        </section>
    )
}

export default CardGrid;