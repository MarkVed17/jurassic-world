import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterSortBy } from "../features";

const FeedPageFilter = () => {
  const [filtersToggle, setFiltersToggle] = useState("New to Old");
  
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-2 ml-auto">
      <p className="font-bold text-lg text-black m-auto dark:text-white">
        Sort by
      </p>
      <button
        id="dropdownDefault"
        className="flex gap-1 align-center ml-auto width-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium font-light rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={(e) => {
          if (e.target.innerText === "New to Old") {
            dispatch(filterSortBy("New to Old"));
            setFiltersToggle("Old to New");
          } else {
            dispatch(filterSortBy("Old to New"));
            setFiltersToggle("New to Old");
          }
        }}
      >
        {filtersToggle}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
        </svg>
      </button>
    </div>
  );
};

export { FeedPageFilter };
