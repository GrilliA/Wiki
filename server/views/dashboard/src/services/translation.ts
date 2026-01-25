import { createApi } from "@reduxjs/toolkit/query/react";
import { normalizeBaseQuery } from "@/helper/normalizeBaseQuery";
import { getLocale } from "@/helper/getLocale";

export const translationApi = createApi({
  reducerPath: "translationApi",
  baseQuery: normalizeBaseQuery,
  endpoints: (builder) => ({
    translations: builder.query({
      query: () => {
        const locale = getLocale();
        return {
          url: `/translations?locale=${locale}`,
          method: "GET",
        };
      },
      transformResponse: (data) => {
        const translations = data?.data ?? [];
        const normalizedTranslations = translations.reduce((acc, item) => {
          return { ...acc, [item.key]: item.value };
        }, {});

        return {
          data: normalizedTranslations,
          locale: translations?.[0]?.locale,
        };
      },
    }),
  }),
});

export const { useTranslationsQuery } = translationApi;
