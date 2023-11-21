import React from "react";

function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const searchValue =
    typeof searchParams.searchValue === "string"
      ? searchParams.searchValue
      : "";
  console.log("--serach", searchValue);
  return <div>Search</div>;
}

export default Search;
