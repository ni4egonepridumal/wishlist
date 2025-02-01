import { BASE_URL } from "@/shared/api/base";
import { IWishList } from "@/shared/types/appTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const onePresentApi = createApi({
  reducerPath: "onePresentApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  // tagTypes: ["AddComment"],
  endpoints: (builder) => ({
    getOnePresent: builder.query<IWishList, string>({
      query: (id) => `/items/${Number(id)}`,
      // providesTags: (result, error, id) => [{ type: "AddComment", id }],
    }),
  }),
});

export const { useLazyGetOnePresentQuery } = onePresentApi;
