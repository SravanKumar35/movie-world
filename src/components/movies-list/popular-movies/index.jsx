import React, { useEffect } from "react";
import { popularAPI } from "../../../api";

const PopularMovies = () => {
  useEffect(() => {
    const getData = async (page) => {
      const popularMovies = await popularAPI(page);
      console.log("popular movies", popularMovies);
    };
    getData(1);
  }, []);
  return (
    <div>
      <span>PopularMovies</span>
    </div>
  );
};

export default PopularMovies;
