// VideoComponent.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import "./VideoComponent.css";

const VideoComponent = ({ onEnd }) => {
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleButtonClick = () => {
    setShowLoginForm(true);
  };

  const handleLogin = (username) => {
    // Handle the login logic here (you might want to add more)
    console.log(`User logged in: ${username}`);

    // Simulate successful login and navigate
    navigate("/app");
    onEnd();
  };

  // Check if the video can play automatically
  useEffect(() => {
    const video = document.querySelector("video");

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay started
        })
        .catch((error) => {
          // Autoplay was prevented, handle the error here
          console.error("Autoplay prevented:", error);
        });
    }

    return () => video.pause();
  }, []);

  return (
    <div>
      <video autoPlay muted loop playsInline>
        <source src="start.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        {showLoginForm ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <button onClick={handleButtonClick}>Login/Signup</button>
        )}
      </div>
    </div>
  );
};

export default VideoComponent;
