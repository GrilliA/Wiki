import { createApi } from "@reduxjs/toolkit/query/react";
import { normalizeBaseQuery } from "@/helper/normalizeBaseQuery";

export const translationApi = createApi({
  reducerPath: "translationApi",
  baseQuery: normalizeBaseQuery,
  endpoints: (builder) => ({
    translations: builder.query({
      query: () => {
        return {
          url: "/translations",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useTranslationsQuery } = translationApi;
