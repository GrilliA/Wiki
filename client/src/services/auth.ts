import { createApi } from "@reduxjs/toolkit/query/react";
import { normalizeBaseQuery } from "@/helper/normalizeBaseQuery";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: normalizeBaseQuery,
  endpoints: (builder) => ({
    currentUser: builder.query({
      query: () => {
        return {
          url: "/users/me",
          method: "GET",
        };
      },
    }),
    login: builder.mutation<any, any>({
      query: (payload) => {
        return {
          url: "/auth/local",
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useCurrentUserQuery } = authApi;
