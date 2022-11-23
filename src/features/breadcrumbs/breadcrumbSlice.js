import { createSlice } from "@reduxjs/toolkit";

export const breadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState: "",
  reducers: {
    getProductName: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { getProductName } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;
