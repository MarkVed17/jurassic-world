import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterMost } from "../features";

const ExplorePageFilter = () => {
  const [filtersToggle, setFiltersToggle] = useState("Latest");
  
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-2 mx-auto my-4">
      <p className="font-bold text-lg text-black m-auto dark:text-white">
        Most
      </p>
      <button
        id="dropdownDefault"
        className="flex gap-1 align-center ml-auto width-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium font-light rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={(e) => {
          if (e.target.innerText === "Trending") {
            dispatch(filterMost("Trending"));
            setFiltersToggle("Latest");
          } else {
            dispatch(filterMost("Latest"));
            setFiltersToggle("Trending");
          }
        }}
      >
        {filtersToggle}
        {filtersToggle === "Trending" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export { ExplorePageFilter };
