import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from "../../common/Constants";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./Store";

const initialState = {
    requestListUserDetail: {
      page: DEFAULT_PAGE_INDEX,
      results: DEFAULT_PAGE_SIZE,
      sortField: '',
      asc: false,
    },
  };

export const listUserDetail = createSlice({
  name: "UserDetail",
  initialState,
  reducers: {
    setRequestListUserDetail: (state, action) => {
      state.requestListUserDetail = action.payload;
    },
  },
});


export const { setRequestListUserDetail } = listUserDetail.actions;
export const requestListUserDetail = (state: RootState) => state.UserDetail.requestListUserDetail;

export default listUserDetail.reducer;