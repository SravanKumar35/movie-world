import { useEffect, useState } from "react";
import { popularAPI } from "../../../api";

export const useHook = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const getData = async (page) => {
    const { data: { results = [], total_pages = 0 } = {} } = await popularAPI(
      page
    );
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

  return { data, totalPages, currentPage, handlePageChange };
};
