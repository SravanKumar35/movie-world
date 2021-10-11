import { useRouter } from "next/dist/client/router";
import React from "react";
import DetailPage from "../../src/components/movie-detail";

const MovieDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <DetailPage id={id} key={id} />
    </div>
  );
};

export default MovieDetail;
