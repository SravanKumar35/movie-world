import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { movieDetailAPI } from "../../api";

export const movieDetailHook = (id) => {
  const [movie, setMovie] = useState({});
  const router = useRouter();

  // getData is used to get the details of a movie
  const getData = async (id) => {
    const { data } = await movieDetailAPI(id);
    setMovie(data);
  };

  // this useEffect is called when the page renders
  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, []);

  const back = () => {
    router.back();
  };

  return { movie, back };
};
