import { useEffect, useState } from "react";
import { castAPI } from "../../../api";

export const castHook = (id) => {
  const [cast, setCast] = useState([]);

  const getData = async (id) => {
    const { data: { cast = [] } = {} } = await castAPI(id);
    setCast(cast);
  };

  useEffect(() => {
    if (id) getData(id);
  }, []);

  return { cast };
};
