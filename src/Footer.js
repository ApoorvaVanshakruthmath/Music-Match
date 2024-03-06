// Footer.js
import React from "react";
import "./footer.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import IconButton from "@mui/material/IconButton";

function Footer({ onLike, onDislike }) {
  return (
    <div className="swipeButtons">
      <IconButton className="like" onClick={onLike}>
        <ThumbUpIcon fontSize="large" />
      </IconButton>
      <IconButton className="dislike" onClick={onDislike}>
        <ThumbDownIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Footer;
