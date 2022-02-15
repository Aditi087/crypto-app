import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiHelperFunction } from "../Api";


const initialState = {
  status: "idle",
  data: [],
};

export const fetchSearch = createAsyncThunk("api", async () => {
  const response = await ApiHelperFunction({
    urlPath: `/coins`,
    method: "GET",
  });
  let resData = response;
  console.log(resData);

  return resData;
});



export const SearchSlice = createSlice({
  name: "coinSearch",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.status = "idle";
        

        state.data = action?.payload?.data;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});

// export const { removeAll } = SecurityQualitySlice.actions;

export default SearchSlice.reducer;
