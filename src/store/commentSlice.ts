import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { initDetail, initArray } from "@const"

import { TComment, TSlice, TDto } from "@types"

import { commentService } from "@services/commentService"

import { pendingReducer, fulfilledReducer, rejectedReducer } from "@utils"

const { getComments } = commentService;

export const getCommentThunk = createAsyncThunk(
  "comment/comments",
  async ({ ...dto }: TDto, thunkAPI) => {
    try {
      const { data } = await getComments(dto);
      return data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить!')
    }
  }
)

const initialState: TSlice<TComment> = {
  detail: { ...initDetail },
  list: { ...initArray },
}

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCommentThunk.pending, pendingReducer('list'))
      .addCase(getCommentThunk.fulfilled, fulfilledReducer('list'))
      .addCase(getCommentThunk.rejected, rejectedReducer('list'))
  }
});

export default commentSlice.reducer;
