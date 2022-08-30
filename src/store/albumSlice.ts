import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initDetailAlbum, initArrayAlbum } from "@const"

import { TAlbum, TSlice, TDto } from "@types"

import { albumService } from "@services/albumService"

import { pendingReducer, fulfilledReducer, rejectedReducer } from "@utils"

const { getAlbums } = albumService;

export const getAlbumThunk = createAsyncThunk(
  "album/albums",
  async ({ ...dto }: TDto, thunkAPI) => {
    try {
      const { data } = await getAlbums(dto);

      return data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState: TSlice<TAlbum> = {
  detail: { ...initDetailAlbum },
  list: { ...initArrayAlbum },
}

const albumSlice = createSlice({
  name: "album",
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
      .addCase(getAlbumThunk.pending, pendingReducer('list'))
      .addCase(getAlbumThunk.fulfilled, fulfilledReducer('list'))
      .addCase(getAlbumThunk.rejected, rejectedReducer('list'))
  }
});

export const { updatePage } = albumSlice.actions;

export default albumSlice.reducer;
