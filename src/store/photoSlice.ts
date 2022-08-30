import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TPhoto, TSlice, TDto } from "@types"

import { initDetailPhotos, initArrayPhotos } from "@const"

import { photoService } from "@services/photoService"

import { pendingReducer, fulfilledReducer, rejectedReducer } from "@utils"

const { getPhotos } = photoService;

export const getPhotoThunk = createAsyncThunk(
  "photo/photos",
  async ({ ...dto }: TDto, thunkAPI) => {
    try {
      const { data } = await getPhotos(dto);
      return data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить!')
    }
  }
)

const initialState: TSlice<TPhoto> = {
  detail: { ...initDetailPhotos },
  list: { ...initArrayPhotos },
}

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    updatePage(state, action: PayloadAction<number>) {
      if (state.list.dto != null) {
        state.list.dto.page = action.payload;
      }
    },
    openAlbum(state, action: PayloadAction<TPhoto[]>) {
      if (state.list.dto != null) {
        state.list.result = action.payload;
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getPhotoThunk.pending, pendingReducer('list'))
      .addCase(getPhotoThunk.fulfilled, fulfilledReducer('list'))
      .addCase(getPhotoThunk.rejected, rejectedReducer('list'))
  }
});

export const { updatePage, openAlbum } = photoSlice.actions;

export default photoSlice.reducer;
