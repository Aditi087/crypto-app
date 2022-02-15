import { configureStore } from "@reduxjs/toolkit";

import DataSliceReducer from './DataSlice';
import DetSliceReducer from './detSlice';
import SearchSliceReducer from './searchSlice'



export const store = configureStore({
  reducer: {
    dataSlice: DataSliceReducer,
    detSlice: DetSliceReducer,
    searchSlice: SearchSliceReducer,
    
  },
});