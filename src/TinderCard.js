// TinderCard.js
import React, { useState } from "react";
import "./TinderCard.css";

const TinderCard = ({ user, onLike, onDislike }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLike = () => {
    onLike(user.id);
  };

  const handleDislike = () => {
    onDislike(user.id);
  };

  return (
    <div
      className={`tinder-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardFlip}
    >
      <div className="card">
        <div className="card-front">
          <img
            src={user.photo}
            alt={user.name}
            className={`card-image ${isFlipped ? "hidden" : ""}`}
          />
          <h2 className={`card-name ${isFlipped ? "hidden" : ""}`}>
            {user.name}
          </h2>
        </div>
        <div className="card-back">
          <h2 className={`card-name ${isFlipped ? "" : "hidden"}`}>
            {user.name}'s Favorite Songs
          </h2>
          <ul className={`card-songs ${isFlipped ? "" : "hidden"}`}>
            {user.favoriteSongs.map((song, index) => (
              <li key={index} className="card-song">
                {song}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="swipe-buttons">
        <button className="like-button" onClick={handleLike}>
          Like
        </button>
        <button className="dislike-button" onClick={handleDislike}>
          Dislike
        </button>
      </div>
    </div>
  );
};

export default TinderCard;
