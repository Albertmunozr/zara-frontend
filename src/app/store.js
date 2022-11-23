import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../features/api/apiSlice";
import cartReducer from "../features/cart/cartSlice";
import breadcrumbReducer from "../features/breadcrumbs/breadcrumbSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    breadcrumb: breadcrumbReducer,

    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
