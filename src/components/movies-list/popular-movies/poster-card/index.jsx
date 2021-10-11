import React from "react";
import { Rating } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import { Star } from "@material-ui/icons";
import Link from "next/link";
import styles from "./styles.module.scss";

const base_image_url = "https://image.tmdb.org/t/p/original";
const useStyles = makeStyles({
  yellow: {
    color: "#ffe234",
  },
});

const languages = {
  en: "English",
  hi: "Hindi",
  te: "Telugu",
  ta: "Tamil",
  pa: "Punjabi",
  bn: "Bengali",
  ml: "Malayalam",
  kn: "Kannada",
};

const PosterCard = ({ movie }) => {
  const classess = useStyles();
  return (
    <Link href={`/${movie?.id}`}>
      <div className={styles.main}>
        <img
          className={styles.poster}
          src={
            movie?.poster_path
              ? `${base_image_url}/${movie?.poster_path}`
              : "/poster.png"
          }
        />
        <div className={styles.movie_details}>
          <div className={styles.movie_title}>
            <span>{movie?.title}</span>
          </div>
          <div className={styles.rating}>
            <Rating
              name="read-only"
              className={classess.yellow}
              size="small"
              value={movie?.vote_average / 2}
              readOnly
              precision={0.1}
              emptyIcon={
                <Star style={{ color: "#c0c0c0" }} fontSize="inherit" />
              }
            />
            <div className={styles.rating_value}>
              <span>{movie?.vote_average / 2}/5</span>
            </div>
          </div>

          {languages[movie?.original_language] && (
            <div className={styles.language}>
              <span>{languages[movie?.original_language]}</span>
            </div>
          )}

          <div className={styles.year}>
            <span>{movie?.release_date?.slice(0, 4)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PosterCard;
