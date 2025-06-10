import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import blogReducer from "./slices/blogSlice"

const store = configureStore({
  reducer: {
     counterSotre: counterReducer ,
     blog:blogReducer,
    },
});


export default store;