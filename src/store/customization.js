import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isOpen: [],
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 12,
  opened: true,
  isLoading: false,
  hasError: false,
  topNews: {},
  allNews: {},
  headlineNews: {},
  sources: {},
  news: {},
  similarNews: {},
};

export const topNews = createAsyncThunk(
  "customization/fetchTopNews",
  async (
    limit = null,
    locale = null,
    categories = null,
    search = null,
    sort = null
  ) => {
    let param = "";
    if (limit) param += `&limit=${limit}`;
    if (locale) param += `&locale=${locale}`;
    if (categories) param += `&categories=${categories}`;
    if (search) param += `&search=${search}`;
    if (sort) param += `&sort=${sort}`;
    const { data } = await axios.get(
      `https://api.thenewsapi.com/v1/news/top?api_token=${process.env.REACT_APP_NEWS_KEY}${param}`
    );
    return data;
  }
);

export const allNews = createAsyncThunk(
  "customization/fetchAllNews",
  async (
    limit = null,
    locale = null,
    categories = null,
    search = null,
    sort = null
  ) => {
    let param = "";
    if (limit) param += `&limit=${limit}`;
    if (locale) param += `&locale=${locale}`;
    if (categories) param += `&categories=${categories}`;
    if (search) param += `&search=${search}`;
    if (sort) param += `&sort=${sort}`;
    const { data } = await axios.get(
      `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.REACT_APP_NEWS_KEY}${param}`
    );
    return data;
  }
);

export const similarNews = createAsyncThunk(
  "customization/fetchSimilarNews",
  async (
    uuid,
    limit = null,
    locale = null,
    categories = null,
    search = null,
    sort = null
  ) => {
    let param = "";
    if (limit) param += `&limit=${limit}`;
    if (locale) param += `&locale=${locale}`;
    if (categories) param += `&categories=${categories}`;
    if (search) param += `&search=${search}`;
    if (sort) param += `&sort=${sort}`;
    const { data } = await axios.get(
      `https://api.thenewsapi.com/v1/news/similar/${uuid}?api_token=${process.env.REACT_APP_NEWS_KEY}${param}`
    );
    return data;
  }
);

export const newsByUuid = createAsyncThunk(
  "customization/fetchByUuidNews",
  async (uuid) => {
    const { data } = await axios.get(
      `https://api.thenewsapi.com/v1/news/${uuid}?api_token=${process.env.REACT_APP_NEWS_KEY}`
    );
    return data;
  }
);

export const sources = createAsyncThunk(
  "customization/fetchSources",
  async () => {
    const { data } = await axios.get(
      `https://api.thenewsapi.com/v1/news/sources?api_token=${process.env.REACT_APP_NEWS_KEY}`
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
        state.topNews = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(topNews.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        console.log("Fail to get user data");
      });
    builder
      .addCase(allNews.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
        console.log("Loading ...");
      })
      .addCase(allNews.fulfilled, (state, action) => {
        state.allNews = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(allNews.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        console.log("Fail to get user data");
      });
    // builder
    //   .addCase(allNews.pending, (state) => {
    //     state.isLoading = true;
    //     state.hasError = false;
    //     console.log("Loading ...");
    //   })
    //   .addCase(allNews.fulfilled, (state, action) => {
    //     state.headlineNews = action.payload;
    //     state.isLoading = false;
    //     state.hasError = false;
    //   })
    //   .addCase(allNews.rejected, (state) => {
    //     state.isLoading = false;
    //     state.hasError = true;
    //     console.log("Fail to get user data");
    //   });
    builder
      .addCase(sources.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
        console.log("Loading ...");
      })
      .addCase(sources.fulfilled, (state, action) => {
        state.sources = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(sources.rejected, (state) => {
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
export const selectTopNews = (state) => state.customization.topNews;
export const selectAllNews = (state) => state.customization.allNews;
// export const selectHeadlineNews = (state) => state.customization.headlineNews;
export const selectSources = (state) => state.customization.sources;

export default customizationSlice.reducer;
