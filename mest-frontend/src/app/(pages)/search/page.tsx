"use client";
import { MovieType, SearchMovieDocument } from "@/__generated__/graphql";
import MovieList from "@/app/components/MovieList";
import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";

function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const searchValue =
    typeof searchParams.searchValue === "string"
      ? searchParams.searchValue
      : "";

  const { data, loading } = useQuery(SearchMovieDocument, {
    variables: { search: searchValue },
  });
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [pageState, setPageState] = useState(1);
  const moviesPerPage = 9;

  useEffect(() => {
    if (data?.searchMovie) setMovies(data?.searchMovie as MovieType[]);
  }, [data]);

  const maxPageLimit = Math.ceil(movies.length / moviesPerPage);

  const handleNextPageClick = () => {
    setPageState((prevPage) => Math.min(prevPage + 1, maxPageLimit));
  };

  const handlePrevPageClick = () => {
    setPageState((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (pageState - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const slicedMovies = movies.slice(startIndex, endIndex);

  return (
    <div className="space-y-5 flex flex-col max-w-5xl mx-auto my-4">
      <div className="join self-center">
        <button
          className="join-item btn"
          onClick={handlePrevPageClick}
          disabled={pageState === 1}
        >
          «
        </button>
        <div className="join-item btn">Page {pageState}</div>
        <button
          className="join-item btn"
          onClick={handleNextPageClick}
          disabled={pageState === maxPageLimit}
        >
          »
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-4">Search Results</h2>

      {slicedMovies.length === 0 && !loading && <div>No Results...</div>}

      {((slicedMovies && slicedMovies.length > 0) || loading) && (
        <>
          <MovieList data={slicedMovies as MovieType[]} loading={loading} />
        </>
      )}
    </div>
  );
}

export default Search;
