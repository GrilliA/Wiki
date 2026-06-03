import { createApi } from "@reduxjs/toolkit/query/react";
import { normalizeBaseQuery } from "@/helper/normalizeBaseQuery";
import type { TLoginParams, TLoginResponseData } from "./auth.model";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: normalizeBaseQuery,
  endpoints: (builder) => ({
    currentUser: builder.query({
      query: () => {
        return {
          url: "/users/me?populate=*",
          method: "GET",
        };
      },
      providesTags: ["CurrentUser"],
    }),
    updateUser: builder.mutation<any, any>({
      query: (payload) => {
        const { userId, data } = payload;
        return {
          url: `/users/${userId}`,
          method: "PUT",
          payload: data,
        };
      },
      invalidatesTags: ["CurrentUser"],
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
    login: builder.mutation<TLoginResponseData, TLoginParams>({
      query: (payload) => {
        return {
          url: "/auth/login",
          method: "POST",
          payload,
        };
      },
    }),
  }),
});

export const {
  useUpdateUserMutation,
  useRegisterMutation,
  useLoginMutation,
  useCurrentUserQuery,
} = authApi;
