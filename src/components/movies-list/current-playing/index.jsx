import React, { useEffect } from "react";
import { nowPlayingAPI } from "../../../api";

const CurrentPlaying = () => {
  useEffect(() => {
    const getData = async (page) => {
      const currentPlaying = await nowPlayingAPI(page);
      console.log("current-playing", currentPlaying);
    };
    getData(1);
  }, []);

  return (
    <div>
      <span>CurrentPlaying</span>
    </div>
  );
};

export default CurrentPlaying;
