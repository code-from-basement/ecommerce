import React from "react";
import Styles from "./StartsBar.module.css";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";

function StarsBar() {
  const stars = 3.5;
  const ratingStars = Array.from({ length: 5 }, (item, index) => {
    let number = index + 0.5;
    return <span key={index}>{stars >= index + 1 ? <StarRoundedIcon /> : stars >= number ? <StarHalfRoundedIcon /> : <StarOutlineRoundedIcon />}</span>;
  });

  return <div className={Styles.starsBar}>{ratingStars}</div>;
}

export default StarsBar;
