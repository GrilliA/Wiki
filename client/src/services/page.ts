import { createApi } from "@reduxjs/toolkit/query/react";
import { normalizeBaseQuery } from "@/helper/normalizeBaseQuery";
import { addToken } from "@/state/uiSlice/uiSlice";
import { tokenKey } from "@/helper/constants";

export const pageApi = createApi({
  reducerPath: "pageApi",
  baseQuery: normalizeBaseQuery,
  endpoints: (builder) => ({
    pages: builder.query({
      query: () => {
        return {
          url: "/event-pages?populate=*",
          method: "GET",
        };
      },
    }),
    singlePage: builder.query({
      query: ({ id }) => {
        return {
          url: `/event-pages/${id}?populate=*`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { usePagesQuery, useSinglePageQuery } = pageApi;
