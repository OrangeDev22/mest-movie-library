"use client";
import { MovieType, SearchMovieDocument } from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieList from "../components/MovieList";

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
  const moviesPerPage = 9; // Updated to display 9 movies per page

  useEffect(() => {
    if (data?.searchMovie) setMovies(data?.searchMovie as MovieType[]);
  }, [data]);

  // Calculate the maximum page limit based on the total number of movies and movies per page
  const maxPageLimit = Math.ceil(movies.length / moviesPerPage);

  const handleNextPageClick = () => {
    setPageState((prevPage) => Math.min(prevPage + 1, maxPageLimit));
  };

  const handlePrevPageClick = () => {
    setPageState((prevPage) => Math.max(prevPage - 1, 1));
  };

  console.log("--data", data);

  // Calculate the start and end index for the current page
  const startIndex = (pageState - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const slicedMovies = movies.slice(startIndex, endIndex);

  return (
    <div className="space-y-5 flex flex-col max-w-5xl mx-auto my-4">
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>

      {slicedMovies.length === 0 && !loading && <div>No Results...</div>}

      {((slicedMovies && slicedMovies.length > 0) || loading) && (
        <>
          <MovieList
            data={slicedMovies as MovieType[]}
            loading={loading}
            rootClassName="grid md:grid-cols-3 gap-8 items-center justify-items-center w-full h-full"
          />
          <div className="flex justify-between mt-4">
            <button onClick={handlePrevPageClick} disabled={pageState === 1}>
              Previous Page
            </button>
            <button
              onClick={handleNextPageClick}
              disabled={pageState === maxPageLimit}
            >
              Next Page
            </button>
          </div>
          {/* You can use the pageState to conditionally render different data or trigger other actions */}
        </>
      )}
    </div>
  );
}

export default Search;
