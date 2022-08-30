import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { initDetail, initArray } from "@const"

import { todoService } from "@services/todoService"

import { TTodo, TSlice, TDto } from "@types"

import { pendingReducer, fulfilledReducer, rejectedReducer } from "@utils"

const { getTodos } = todoService

export const getTodoThunk = createAsyncThunk(
  "todo/todos",
  async ({ ...dto }: TDto, thunkAPI) => {
    try {
      const { data } = await getTodos(dto);
      return data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить!')
    }
  }
)

const initialState: TSlice<TTodo> = {
  detail: { ...initDetail },
  list: { ...initArray },
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTodoThunk.pending, pendingReducer('list'))
      .addCase(getTodoThunk.fulfilled, fulfilledReducer('list'))
      .addCase(getTodoThunk.rejected, rejectedReducer('list'))
  }
});

export default todoSlice.reducer;
