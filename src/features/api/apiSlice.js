import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://front-test-api.herokuapp.com/api",
    refetchOnMountOrArgChange: 3600, //1 hora en caché
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/product",
    }),
    getProductById: builder.query({
      query: (id) => `/product/${id}`,
    }),
    addToCart: builder.mutation({
      query: (newItem) => ({
        url: "/cart",
        method: "POST",
        body: newItem,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddToCartMutation,
} = productApi;
