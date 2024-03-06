// Header.js
import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/ProfileComponent");
  };
  return (
    <div className="header-container">
      <IconButton
        className="header-icons"
        fontSize="large"
        style={{ color: "#fff" }}
        onClick={handleProfile}
      >
        <FaceIcon fontSize="large" />
      </IconButton>

      <IconButton
        className="header-icons"
        fontSize="small"
        style={{ color: "#fff" }}
        onClick={handleLogout}
      >
        <ExitToAppIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
