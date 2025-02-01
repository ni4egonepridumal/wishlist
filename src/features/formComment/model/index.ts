import { BASE_URL } from "@/shared/api/base";
import { IComments, IWishList } from "@/shared/types/appTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IData {
  comments: IComments[];
  formData: IComments;
  id: string;
}

export const addCommentApi = createApi({
  reducerPath: "addCommentApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  // tagTypes: ["AddComment"],
  endpoints: (builder) => ({
    sentNewComment: builder.mutation<IWishList, IData>({
      query: ({ comments, formData, id }) => {
        const data = comments && [...comments, formData];
        return {
          url: `/items/${Number(id)}`,
          method: "PATCH",
          body: {
            comments: data,
          },
        };
      },
      // invalidatesTags: (result, error, { id }) => [{ type: "AddComment", id }],
    }),
  }),
});

export const { useSentNewCommentMutation } = addCommentApi;
