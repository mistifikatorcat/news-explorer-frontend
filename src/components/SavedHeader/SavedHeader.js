import React from "react";

import "./savedheader.css";

function SavedNewsHeader({ savedArticles, username }) {
  const keyword = savedArticles.map((card) => card.keyword);

  const keywords = [...new Set(keyword)];

  return (
    <section className="saved-header">
      <div className="saved-header__wrapper">
        <p className="saved-header__label">Saved Articles</p>
        <h1 className="saved-header__title">
          {username}, you have {savedArticles.length} saved articles
        </h1>
        <p className="saved-header__keywords">
          By keywords:{" "}
          <span className="saved-header__keyword">
            {keywords.length <= 2
              ? keywords.join(",")
              : keywords.slice(0, 2).join(",") +
                " and " +
                (keywords.length - 2) +
                " more"}
          </span>
        </p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;
