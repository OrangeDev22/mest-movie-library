"use client";
import { SearchMovieDocument } from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";
import { debounce } from "lodash";
import React, { useState } from "react";

function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const { data, refetch } = useQuery(SearchMovieDocument, {
    variables: { search: searchValue },
  });
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = async (value: string) => {
    if (value) await refetch({ search: value });
  };

  const debouncedHandleInputChange = debounce(handleInputChange, 500);
  console.log("--data", data);

  return (
    <div
      className="w-full bg-dark-silver p-2 rounded-lg max-w-xl relative"
      onClick={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <input
        type="text"
        placeholder="Search Movie..."
        className="w-full text-white bg-dark-silver outline-none"
        onChange={(e) => debouncedHandleInputChange(e.target.value)}
      />

      {/* Dropdown */}
      <div
        className={`absolute bg-dark-silver w-full left-0 z-40 rounded-b-lg ${
          isFocused ? "" : "hidden"
        }`}
      >
        <div>
          <div className="py-2 px-4">Movies</div>
          {data && data.searchMovie.length > 0 && (
            <div className="w-full mt-1 py-3 max-h-96 overflow-y-auto">
              {data?.searchMovie.map(({ id, title }) => (
                <div key={id} className="px-4">
                  {title}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
