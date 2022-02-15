import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiHelperFunction } from "../Api";


const initialState = {
  status: "idle",
  data: "",
};

export const fetchData = createAsyncThunk("api", async (data) => {
  const response = await ApiHelperFunction({
    urlPath: `/coins`,
    method: "GET",
  });
  let resData = response;
  console.log(resData);

  return resData;
});



export const DataSlice = createSlice({
  name: "coinData",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "idle";

        state.data = action?.payload?.data;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});

// export const { removeAll } = SecurityQualitySlice.actions;

export default DataSlice.reducer;
