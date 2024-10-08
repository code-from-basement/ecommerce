import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Styles from "./StartsBar.module.css";

function StarsBar({ rate_average }: any) {
  const stars = rate_average;

  const ratingStars = Array.from({ length: 5 }, (_, index) => {
    let rate_average = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <StarRoundedIcon />
        ) : stars >= rate_average ? (
          <StarHalfRoundedIcon />
        ) : (
          <StarOutlineRoundedIcon />
        )}
      </span>
    );
  });

  return <div className={Styles.starsBar}>{ratingStars}</div>;
}

export default StarsBar;
