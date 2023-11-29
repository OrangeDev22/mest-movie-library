"use client";
import { SearchMovieDocument } from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";
import { debounce } from "lodash";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchInput() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [userHasSearched, setUserHasSearched] = useState(false);
  const { data, refetch } = useQuery(SearchMovieDocument, {
    variables: { search: "" },
  });
  const [isFocused, setIsFocused] = useState(false);
  const [userTyping, setUserTyping] = useState(false);

  const handleInputChange = async (value: string) => {
    if (!userHasSearched) setUserHasSearched(true);
    if (value !== undefined) await refetch({ search: value });
    if (userTyping) setUserTyping(false);
  };

  const handleClose = () => {
    setUserHasSearched(false);
    setIsFocused(false);
  };

  const debouncedHandleInputChange = debounce(handleInputChange, 500);

  return (
    <div
      className="w-full bg-dark-silver p-2 rounded-lg max-w-xl relative"
      onClick={() => setIsFocused(true)}
      onBlur={() => {
        handleClose();
      }}
    >
      <input
        type="text"
        placeholder="Search Movie..."
        className="w-full text-white bg-dark-silver outline-none"
        onChange={(e) => {
          setSearchValue(e.target.value);
          if (!userTyping) setUserTyping(true);
          debouncedHandleInputChange(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            router.push(`/search?searchValue=${searchValue}`);
          }
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleClose();
          }
        }}
      />

      {/* Dropdown */}
      <div
        className={`absolute bg-dark-silver w-full left-0 z-40 rounded-b-lg ${
          isFocused ? "" : "hidden"
        }`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="rounded-b-lg">
          <div className="py-2 px-4">Movies</div>

          {userHasSearched && data?.searchMovie.length === 0 && !userTyping && (
            <div className="px-4">No Result...</div>
          )}

          {data && data.searchMovie.length > 0 && (
            <div className="w-full mt-1 py-3 max-h-96 overflow-y-auto">
              {data?.searchMovie.map(
                ({ id, title, poster_path, vote_average }, index) => (
                  <div
                    className={`p-4 hover:bg-neutral-400 cursor-pointer flex gap-2 ${
                      index % 2 === 0 ? "bg-neutral-800" : "bg-neutral-900"
                    }`}
                    key={id}
                    onMouseDown={() => {
                      router.push(`/movie/${id}`);
                      handleClose();
                    }}
                  >
                    <img
                      src={poster_path}
                      alt="movie_poster"
                      className="w-12 h-18 rounded-lg"
                    />
                    <div className="flex flex-col space-y-2">
                      <p>{title}</p>
                      <div className="flex gap-2 items-center">
                        <svg
                          key={index}
                          className={"w-4 h-4 text-gray-300"}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span>{vote_average.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
