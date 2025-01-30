import { BASE_URL } from "@/shared/api/base";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IWishList {
  id: number;
  name: string;
  description: string;
  isReserved: boolean;
  price: string;
  comments: IComments[];
  references_img: string[];
  links: string[];
  warning?: boolean;
}

interface IComments {
  name: string;
  comment: string;
}

export const onePresentApi = createApi({
  reducerPath: "onePresentApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getOnePresent: builder.query<IWishList, string>({
      query: (id) => `/items/${Number(id)}`,
    }),
  }),
});

export const { useLazyGetOnePresentQuery, useGetOnePresentQuery } =
  onePresentApi;
