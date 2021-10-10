import React from "react";
import Header from "../header";
import CurrentPlaying from "./current-playing";
import PopularMovies from "./popular-movies";

const ListPage = () => {
  return (
    <div>
      <CurrentPlaying />
      <PopularMovies />
    </div>
  );
};

export default ListPage;
