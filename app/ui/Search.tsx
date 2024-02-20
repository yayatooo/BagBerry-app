"use client";
import { useQuery } from "react-query";
import { IoSearchSharp } from "react-icons/io5";
import { ChangeEvent, useState } from "react";
import searchParam from "../service/searchParam";

const Search = () => {
  const [searchQueryParams, setSearchQueryParams] = useState("");

  const { data: searchResult } = useQuery(
    ["search", searchQueryParams],
    () => searchParam(searchQueryParams),
    {
      enabled: !!searchQueryParams,
    }
  );

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQueryParams(event.target.value.trim());
  };

  console.log(searchResult);

  return (
    <div className="relative">
      <input
        type="text"
        value={searchQueryParams}
        onChange={handleSearchInputChange}
        className="rounded-full border border-gray-500 px-6"
      />
      <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
        <IoSearchSharp className="text-gray-400" aria-hidden />
      </div>
    </div>
  );
};

export default Search;
