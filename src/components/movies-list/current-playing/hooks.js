import { useEffect, useState } from "react";
import { nowPlayingAPI } from "../../../api";
import { Mobile } from "../../../common-hooks/mobile";

export const useHook = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = Mobile();
  const getData = async (page) => {
    const { data: { results = [], total_pages = 0 } = {} } =
      await nowPlayingAPI(page);
    setData(results);
    setTotalPages(total_pages);
    console.log("popular movies", results);
  };

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return { data, totalPages, currentPage, handlePageChange, isMobile };
};
