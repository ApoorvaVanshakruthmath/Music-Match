// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import TinderCard from "./TinderCard";
import Footer from "./Footer";
import VideoComponent from "./VideoComponent";
import ProfileComponent from "./ProfileComponent"; // Import ProfileComponent
import "./App.css";

const initialUsers = [
  {
    id: 1,
    name: "Munawar Faruqui",
    photo: "me.jpg",
    favoriteSongs: ["Noor", "Kajal", "Azmaish"],
  },
  {
    id: 2,
    name: "Billie Eilish",
    photo: "billlie.jpeg",
    favoriteSongs: ["Happier Than Ever", "Lovely", "Bad Guy"],
  },
  {
    id: 3, // Ensure unique IDs
    name: "Another User",
    photo: "he.jpg",
    favoriteSongs: ["Song1", "Song2", "Song3"],
  },
];

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [videoPlayed, setVideoPlayed] = useState(false);

  const handleVideoEnd = () => {
    setVideoPlayed(true);
  };

  const handleLike = () => {
    setCurrentUserIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  const handleDislike = () => {
    setCurrentUserIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  const handleProfileSubmit = (newUser) => {
    // Update the users state with the new user
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={!videoPlayed && <VideoComponent onEnd={handleVideoEnd} />}
        />
        <Route
          path="/app/*"
          element={
            videoPlayed && (
              <Layout>
                <TinderCard
                  user={users[currentUserIndex]}
                  onLike={handleLike}
                  onDislike={handleDislike}
                />
                <Footer onLike={handleLike} onDislike={handleDislike} />
              </Layout>
            )
          }
        />
        <Route
          path="/ProfileComponent"
          element={<ProfileComponent onProfileSubmit={handleProfileSubmit} />}
        />
      </Routes>
    </Router>
  );
};

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default App;
