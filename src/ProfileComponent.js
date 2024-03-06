// ProfileComponent.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileComponent.css";

const ProfileComponent = ({ onProfileSubmit }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [favoriteSongs, setFavoriteSongs] = useState("");

  const handleSubmit = () => {
    // Validate the input data before proceeding
    if (name && photo && favoriteSongs) {
      // Split the favorite songs string into an array
      const songsArray = favoriteSongs.split(",").map((song) => song.trim());

      // Create a new user object
      const newUser = {
        id: Date.now(), // Use a unique identifier (timestamp in this case)
        name,
        photo,
        favoriteSongs: songsArray,
      };

      // Pass the new user to the parent component
      onProfileSubmit(newUser);

      // Navigate to the main app page
      navigate("/app");
    } else {
      // Handle validation error (e.g., show an error message)
      console.error("Invalid input. Please fill in all fields.");
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-photo">
        {photo ? (
          <img src={photo} alt="Profile" />
        ) : (
          <div className="default-photo"></div>
        )}
      </div>
      <div className="profile-details">
        <h2 className="proh">Create Your Profile</h2>
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            placeholder="
           Provide the url"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </label>
        <label>
          Favorite Songs:
          <input
            type="text"
            placeholder="List your top-3"
            value={favoriteSongs}
            onChange={(e) => setFavoriteSongs(e.target.value)}
          />
        </label>
        <button className="probtn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProfileComponent;
