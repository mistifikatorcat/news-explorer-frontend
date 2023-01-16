import React from "react";
import {useLocation} from 'react-router-dom';
import './card.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Card({
 article,
 isLoggedIn,
 onSave,
 onDelete
 }){

  const location = useLocation();
  const currentLocation = location.pathname;
  const isSavedPage = currentLocation === '/saved-articles';
  const currentUser = React.useContext(CurrentUserContext);

  const [isCardSaved, setIsCardSaved] = React.useState(false);


  React.useEffect(() => {
   (currentUser.savedArticles && currentUser.savedArticles.some((card) => card.link === article.url))
    && setIsCardSaved(true);
  }, [])

  const getDate = () => {
    const date = new Date(article.publishedAt || article.date)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const month = months[date.getMonth()];
    const day = date.getDay();
    const year = date.getFullYear();
    const fullDate = month + ' ' + day + ',' + year;
    return fullDate;
  }

  const handleSave = (e) => {
    e.preventDefault();
    setIsCardSaved((current) => !current);
    if (isCardSaved){
      onDelete(currentUser.savedArticles.find((card) => card.link === article.url))
    }
    else{
      onSave(article)
    }
  }

  const handleRemove = (e) => {
    e.preventDefault();
    onDelete(article);
  }

    return(
        <li className="grid__gallery-card">
          <a className="grid__gallery-card-link" href={article.url || article.link} target='_blank'>
            <div className="card">
            <div
          className="card__image"
          style={{backgroundImage: `url(${article.image || article.urlToImage})`}}
        />
        {isSavedPage ? (
          <button
          type="button"
          className=" card__button card__delete"
          aria-label="Delete article"
          onClick={handleRemove}
          />
        ) 
        : (
          <button
          type="button"
          className=" card__button card__save"
          aria-label="Save article"
          onClick={handleSave}
        />
        ) }
        {
          isLoggedIn ? (
            <div className="card__hint card__hint-save">
          <p className="card__hint-text">
            {isSavedPage ? (
              'Remove from saved'
            ) : (
              'Save article'
            )}
          </p>
        </div>
          )
          :
          (
            <div className="card__hint card__hint-save">
            <p className="card__hint-text">
                'Sign in to save articles'
            </p>
          </div>
          )
        }

        {currentLocation === '/saved-articles' && (
          <div className="card__hint card__hint-keyword">
            <p className="card__hint-text">{article.keyword}</p>
            </div>
        )}
        
        <div className="card__info">
          <p className="card__date">{getDate()}</p>
          <h3 className="card__title">{article.title}</h3>
          <p className="card__text">{article.text || article.description}</p>
          <p className="card__source">{article.source || article.source.name}</p>
        </div>
            </div>
            </a>
        </li>
    )
}

export default Card;