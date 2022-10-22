import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isOpen: [],
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 12,
  opened: true,
  isLoading: false,
  hasError: false,
  news: {},
};

export const topNews = createAsyncThunk(
  "customization/fetchNews",
  async (limit) => {
    const { data } = await axios.get(
      `https://api.thenewsapi.com/v1/news/top?api_token=BAFhU4bACvj3DKk1J4bAPsrfcFSRA13SE21oCSvF&locale=id&limit=${limit}`
    );
    return data;
  }
);

const customizationSlice = createSlice({
  name: "customization",
  initialState,
  reducers: {
    MENU_OPEN: (state, action) => {
      state.isOpen = [action.payload];
    },
    SET_MENU: (state, action) => {
      state.opened = action.payload;
    },
    SET_FONT_FAMILY(state, action) {
      state.fontFamily = action.payload;
    },
    SET_BORDER_RADIUS: (state, action) => {
      state.borderRadius = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(topNews.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
        console.log("Loading ...");
      })
      .addCase(topNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(topNews.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        console.log("Fail to get user data");
      });
  },
});

export const { MENU_OPEN, SET_MENU, SET_FONT_FAMILY, SET_BORDER_RADIUS } =
  customizationSlice.actions;

export const selectOpenState = (state) => state.customization.opened;
export const selectLoadingState = (state) => state.customization.isLoading;
export const selectErrorState = (state) => state.customization.hasError;
export const selectNews = (state) => state.customization.news;

export default customizationSlice.reducer;
