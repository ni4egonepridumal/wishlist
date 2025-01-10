import { BASE_URL } from "@/shared/api/base";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IWishList {
  id: number;
  name: string;
  description: string;
  isReserved: boolean;
  price: string;
  comments: string[];
  references_img: string[];
  links: string[];
}

export const wishListApi = createApi({
  reducerPath: "wishListApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getWishList: builder.query<IWishList[], void>({
      query: () => "/items",
    }),
  }),
});

export const { useGetWishListQuery } = wishListApi;
