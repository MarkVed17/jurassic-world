import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  sortBy: "Old to New",
  most: "Trending",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    filterSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    filterMost: (state, action) => {
      state.most = action.payload;
    },
  },
});

const { filterSortBy, filterMost } = filtersSlice.actions;

const filtersReducer = filtersSlice.reducer;

export { filterSortBy, filterMost, filtersReducer };
