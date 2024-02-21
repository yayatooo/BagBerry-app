"use client";
import { useQuery } from "react-query";
import { IoSearchSharp } from "react-icons/io5";
import { ChangeEvent, useState } from "react";
import searchParam from "../service/searchParam";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  const [searchQueryParams, setSearchQueryParams] = useState("");
  const router = useRouter();

  const { data: searchResult } = useQuery(
    ["search", searchQueryParams],
    () => searchParam(searchQueryParams),
    {
      enabled: !!searchQueryParams,
    }
  );

  const handleSearch = () => {
    setSearchQueryParams(searchQueryParams.trim());
    setSearchQueryParams("");
    router.push(`/search/${searchQueryParams}`);
  };

  console.log(searchResult);

  return (
    <div className="relative">
      <input
        type="text"
        value={searchQueryParams}
        onChange={(e) => setSearchQueryParams(e.target.value)}
        className="rounded-full border border-gray-500 px-6"
      />
      <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
        <IoSearchSharp className="text-gray-400" aria-hidden />
      </div>
      <button
        onClick={handleSearch}
        className=" px-2 bg-white text-gray-300 rounded-full text-sm font-normal ml-1"
      >
        search
      </button>
    </div>
  );
};

export default SearchBar;
