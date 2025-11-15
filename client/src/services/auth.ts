import { createApi } from "@reduxjs/toolkit/query/react";
import { normalizeBaseQuery } from "@/helper/normalizeBaseQuery";
import { addToken } from "@/state/uiSlice/uiSlice";
import { tokenKey } from "@/helper/constants";

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
    register: builder.mutation<any, any>({
      query: (payload) => {
        return {
          url: "/auth/local/register",
          method: "POST",
          payload,
        };
      },
    }),
    login: builder.mutation<any, any>({
      query: (payload) => {
        return {
          url: "/auth/local",
          method: "POST",
          payload,
        };
      },
      async onQueryStarted(_, mutationLifeCycleApi) {
        const { data } = await mutationLifeCycleApi.queryFulfilled;
        mutationLifeCycleApi.queryFulfilled;
        if (data?.jwt) {
          localStorage.setItem(tokenKey, data?.jwt);
          mutationLifeCycleApi.dispatch(addToken(data?.jwt));
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useCurrentUserQuery } =
  authApi;
