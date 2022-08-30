import { combineReducers, configureStore } from "@reduxjs/toolkit";

import postSlice from "@store/postSlice";
import albumSlice from "@store/albumSlice";
import commentSlice from "@store/commentSlice";
import photoSlice from "@store/photoSlice";
import todoSlice from "@store/todoSlice";
import userSlice from "@store/userSlice";

const rootReducer = combineReducers({
  post: postSlice,
  album: albumSlice,
  comment: commentSlice,
  photo: photoSlice,
  todo: todoSlice,
  user: userSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
