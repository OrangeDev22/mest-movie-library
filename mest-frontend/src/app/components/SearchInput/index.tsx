"use client";
import { SearchMovieDocument } from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";
import { debounce } from "lodash";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/outline";
import Loader from "../Loader";

function SearchInput() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { data, refetch, loading, error } = useQuery(SearchMovieDocument, {
    variables: { search: "" },
    skip: !isFocused,
  });
  console.log("--data", data);
  console.log("--error", error);
  const handleInputChange = async (value: string) => {
    if (value !== undefined) await refetch({ search: value });
  };

  const debouncedHandleInputChange = debounce(handleInputChange, 300);

  const handleSearchSelect = (id: number) => {
    router.push(`/movie/${id}`);
    setSearchValue("");
  };

  return (
    <div className="md:relative w-full max-w-lg mx-auto">
      {/* Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search Movie..."
          className="w-full p-2 text-sm text-white bg-dark-silver rounded-lg outline-none focus:ring-2 focus:ring-primary"
          value={searchValue}
          onClick={() => setIsFocused(true)}
          onChange={(e) => {
            setSearchValue(e.target.value);
            debouncedHandleInputChange(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && searchValue) {
              router.push(`/search?searchValue=${searchValue}`);
              setIsFocused(false);
            }
          }}
        />

        {/* Close Button (X Icon) */}
        {searchValue && (
          <button
            className="absolute top-2 right-2 text-neutral-400 hover:text-white"
            onClick={() => {
              setSearchValue("");
              setIsFocused(false);
            }}
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        )}
      </div>
      {/* Dropdown */}
      {isFocused && searchValue && (
        <div className="absolute left-0 max-h-[400px] md:h-auto md:left-auto z-50 w-full mt-1 bg-dark-silver border border-neutral-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {loading && <Loader size="md" />}
          {data?.searchMovie.movies.length === 0 ? (
            <div className="px-4 py-2 text-sm text-neutral-400">
              No results found
            </div>
          ) : (
            data?.searchMovie.movies.map(
              ({ id, title, poster_path, vote_average }, index) => (
                <div
                  key={id}
                  className={`flex items-start gap-4 px-4 py-2 cursor-pointer hover:bg-neutral-400 ${
                    index % 2 === 0 ? "bg-neutral-800" : "bg-neutral-900"
                  }`}
                  onMouseDown={() => handleSearchSelect(+id)}
                >
                  {/* Poster */}
                  <img
                    src={poster_path}
                    alt={title}
                    className="w-12 h-18 object-cover rounded-md"
                  />

                  {/* Movie Details */}
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium text-white">{title}</p>

                    {/* Responsive Ratings */}
                    <div className="flex items-center gap-1 text-sm text-gray-300">
                      <div className="flex gap-1 items-center">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.round(vote_average / 2)
                                ? "text-yellow-400"
                                : "text-gray-600"
                            }`}
                          />
                        ))}
                        <span>{vote_average.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )
          )}
        </div>
      )}

      {/* Overlay for dismissing dropdown */}
      {isFocused && (
        <div
          className="fixed inset-0 z-40 bg-transparent"
          onClick={() => {
            setSearchValue("");
            setIsFocused(false);
          }}
        />
      )}
    </div>
  );
}

export default SearchInput;
