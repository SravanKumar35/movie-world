import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { movieDetailAPI } from "../../api";

export const movieDetailHook = (id) => {
  const [movie, setMovie] = useState({});
  const router = useRouter();
  useEffect(() => {
    const getData = async (id) => {
      const { data } = await movieDetailAPI(id);
      setMovie(data);
    };
    if (id) {
      getData(id);
    }
  }, []);
  const back = () => {
    router.back();
  };
  console.log(movie);
  return { movie, back };
};
