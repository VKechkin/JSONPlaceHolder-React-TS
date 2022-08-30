import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { initDetail, initArray } from "@const"

import { TUser, TSlice, TDto } from "@types"

import { userService } from "@services/userService"

import { pendingReducer, fulfilledReducer, rejectedReducer } from "@utils"

const { getUsers } = userService;

export const getUserThunk = createAsyncThunk(
  "user/users",
  async ({ ...dto }: TDto, thunkAPI) => {
    try {
      const { data } = await getUsers(dto);
      return data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить!')
    }
  }
)

const initialState: TSlice<TUser> = {
  detail: { ...initDetail },
  list: { ...initArray },
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserThunk.pending, pendingReducer('list'))
      .addCase(getUserThunk.fulfilled, fulfilledReducer('list'))
      .addCase(getUserThunk.rejected, rejectedReducer('list'))
  }
});

export default userSlice.reducer;
