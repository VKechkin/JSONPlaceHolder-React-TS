import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initDetail, initArray } from "@const"

import { TPost, TSlice, TDto } from "@types"

import { postService } from "@services/postService"

import { pendingReducer, fulfilledReducer, rejectedReducer } from "@utils"

import { IUpdateParams } from "@interfaces"

const { getPosts, deletePost, updatePost } = postService;

export const getPostsThunk = createAsyncThunk(
  "post/posts",
  async ({ ...dto }: TDto, thunkAPI) => {
    try {
      const { data } = await getPosts(dto);

      return data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить!')
    }
  }
)

export const deletePostThunk = createAsyncThunk(
  "post/deletePost",
  async (id: number, thunkAPI) => {
    try {
      const response = await deletePost(id);

      return response;
    }
    catch (error) {
      return thunkAPI.rejectWithValue('Не удалось удалить!')
    }
  }
)

export const updatePostThunk = createAsyncThunk(
  "post/updatePost",
  async ({ request, config }: IUpdateParams, thunkAPI) => {
    try {
      const response = await updatePost(request, config);

      return response;
    }
    catch (error) {
      return thunkAPI.rejectWithValue('Не удалось обновить!')
    }
  }
)

const initialState: TSlice<TPost> = {
  detail: { ...initDetail },
  list: { ...initArray },
}

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    updatePage(state, action: PayloadAction<number>) {
      if (state.list.dto != null) {
        state.list.dto.page = action.payload;
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getPostsThunk.pending, pendingReducer('list'))
      .addCase(getPostsThunk.fulfilled, fulfilledReducer('list'))
      .addCase(getPostsThunk.rejected, rejectedReducer('list'))
  }
});

export const { updatePage } = postSlice.actions;

export default postSlice.reducer;
