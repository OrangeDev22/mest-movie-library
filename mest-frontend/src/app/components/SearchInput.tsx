"use client";
import { debounce } from "lodash";
import React, { useState } from "react";

function SearchInput() {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (value: string) => {
    // Perform your search or other logic here
    console.log("Input changed:", value);
  };

  const debouncedHandleInputChange = debounce(handleInputChange, 500);

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
        <div className="py-2 px-4">Movies</div>
      </div>
    </div>
  );
}

export default SearchInput;
