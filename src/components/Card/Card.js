import React from "react";
import {useLocation} from 'react-router-dom';
import './card.css';

function Card({keyword, title, text, source, date, image}){

  const location = useLocation();
  const currentLocation = location.pathname;

    return(
        <li className="grid__gallery-card">
            <div className="card">
            <div
          className="card__image"
          style={{backgroundImage: `url(${image})`}}
        />
        {currentLocation === '/saved-articles' ? (
          <button
          type="button"
          className=" card__button card__delete"
          aria-label="Delete article"
          />
        ) 
        : (
          <button
          type="button"
          className=" card__button card__save"
          aria-label="Save article"
        />
        ) }

        <div className="card__hint card__hint-save">
          <p className="card__hint-text">
            {currentLocation === 'saved-articles' ? (
              'Remove from saved'
            ) : (
              'Sign in to save articles'
            )}
          </p>
        </div>

        {currentLocation === '/saved-articles' && (
          <div className="card__hint card__hint-keyword">
            <p className="card__hint-text">{keyword}</p>
            </div>
        )}
        
        <div className="card__info">
          <p className="card__date">{date}</p>
          <h3 className="card__title">{title}</h3>
          <p className="card__text">{text}</p>
          <p className="card__source">{source}</p>
        </div>
            </div>
        </li>
    )
}

export default Card;