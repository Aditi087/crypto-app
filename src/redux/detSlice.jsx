import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiHelperFunction } from "../Api";


const initialState = {
  status: "idle",
  data: "",
};

export const fetchDetails = createAsyncThunk("api", async (id) => {
  const response = await ApiHelperFunction({
    urlPath: `/coin/${id}`,
    method: "GET",
  });
  let resData = response;
  console.log(resData);

  return resData;
});



export const DetSlice = createSlice({
  name: "coinDetails",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.status = "idle";

        state.data = action?.payload?.data;
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});

// export const { removeAll } = SecurityQualitySlice.actions;

export default DetSlice.reducer;
