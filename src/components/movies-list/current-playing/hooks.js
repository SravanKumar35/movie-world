import { useEffect, useState } from "react";
import { nowPlayingAPI } from "../../../api";
import { Mobile } from "../../../common-hooks/mobile";

export const useHook = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = Mobile();

  // This function makes an API call and sets the state for current playing
  const getData = async (page) => {
    const { data: { results = [], total_pages = 0 } = {} } =
      await nowPlayingAPI(page);
    setData(results);
    setTotalPages(total_pages);
  };

  // getData is invoked whenever the page is changed
  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  // this hndler is called when the page changes and updates the states varible
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return { data, totalPages, currentPage, handlePageChange, isMobile };
};
