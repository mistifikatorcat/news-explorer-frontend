import React from "react";
import './cardgrid.css';
import Card from "../Card/Card";



function CardGrid({articles}){
    return(
        <section className="grid">
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