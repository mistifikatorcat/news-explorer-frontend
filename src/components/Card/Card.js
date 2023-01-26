import React from "react";
import { useLocation } from "react-router-dom";
import "./card.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Card({
  cards,
  article,
  isLoggedIn,
  onSave,
  onDelete,
  savedArticles,
  image,
  title,
  text,
  source,
  keyword,
  link,
  id,
  onLoginClick,
}) {
  const location = useLocation();
  const currentLocation = location.pathname;
  const isSavedPage = currentLocation === "/saved-articles";
  const currentUser = React.useContext(CurrentUserContext);

  const [isCardSaved, setIsCardSaved] = React.useState(false);
  const [bookmark, setBookmark] = React.useState(false);
  const [renderedCard, setRenderedCard] = React.useState({});

  React.useEffect(() => {
    if (isSavedPage) {
      setRenderedCard({
        image: cards.urlToImage,
        title: cards.title,
        text: cards.text,
        source: cards.source,
        link: cards.link,
        id: cards._id,
      });
    } else {
      setRenderedCard({
        image: article.urlToImage,
        date: article.publishedAt,
        title: article.title,
        text: article.text,
        source: article.source,
        link: article.link,
        id: article._id,
      });
    }
  }, [article, savedArticles]);

  React.useEffect(() => {
    if
( isLoggedIn && savedArticles && savedArticles.some((card) => card.link === renderedCard.link)
){
  setIsCardSaved(true)
}},[])

  const getDate = () => {
    if (!isSavedPage) {
      const articleDate = new Date(article.publishedAt);

      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const month = months[articleDate.getMonth()];
      const day = articleDate.getDay();
      const year = articleDate.getFullYear();
      const fullDate = month + " " + day + "," + year;
      return fullDate;
    } else {
      const articleDate = new Date(cards.date);

      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const month = months[articleDate.getMonth()];
      const day = articleDate.getDay();
      const year = articleDate.getFullYear();
      const fullDate = month + " " + day + "," + year;
      return fullDate;
    }
  };

  function handleSave(e) {
    e.preventDefault();
    setIsCardSaved((state) => !state);
    if (isCardSaved) {
      onDelete(savedArticles.find((card) => card.link === article.url))
      console.log('deleting card ' + article.url)
    } else {
      onSave(article)
      console.log('saving card ' + article.url)
    }
  }

  const handleRemove = (e) => {
    e.preventDefault();
    onDelete(article);
  };

  return (
    <li className="grid__gallery-card">
      <a className="grid__gallery-card-link" href={link} target="_blank">
        <div className="card">
          <div
            className="card__image"
            style={{ backgroundImage: `url(${image || cards.image})` }}
          />
          {isSavedPage ? (
            <button
              type="button"
              className=" card__button card__delete"
              aria-label="Delete article"
              onClick={handleRemove}
            />
          ) : isLoggedIn ? (
            <button
              type="button"
              className={
                isCardSaved
                  ? "card__button card__save_true"
                  : "card__button card__save"
              }
              aria-label="Save article"
              onClick={handleSave}
            />
          ) : (
            <button
              type="button"
              className=" card__button card__save"
              aria-label="Save article"
              onClick={onLoginClick}
            />
          )}
          {isLoggedIn ? (
            <div className="card__hint card__hint-save">
              <p className="card__hint-text">
                {isSavedPage ? "Remove from saved" : "Save article"}
              </p>
            </div>
          ) : (
            <div className="card__hint card__hint-save">
              <p className="card__hint-text">'Sign in to save articles'</p>
            </div>
          )}

          {currentLocation === "/saved-articles" && (
            <div className="card__hint card__hint-keyword">
              <p className="card__hint-text">{keyword || cards.keyword}</p>
            </div>
          )}

          <div className="card__info">
            <p className="card__date">{getDate()}</p>
            <h3 className="card__title">{title}</h3>
            <p className="card__text">{text}</p>
            <p className="card__source">{source || cards.source}</p>
          </div>
        </div>
      </a>
    </li>
  );
}

export default Card;