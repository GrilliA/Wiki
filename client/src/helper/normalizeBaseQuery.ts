import type { TBaseQueryFn } from "@/model/baseQuery.model";
import { baseUrl } from "./constants";
import { addApiError } from "@/state/apiErrorSlice/apiErrorSlice";
import { addLoader, removeLoader } from "@/state/uiSlice/uiSlice";

export const normalizeBaseQuery: TBaseQueryFn = async (args, { dispatch }) => {
  const { url, payload, method } = args;
  try {
    dispatch(addLoader());
    const response = await fetch(`${baseUrl}${url}`, {
      body: JSON.stringify(payload),
      method,
    });

    const data = await response.json();

    if (!response.ok) {
      const error = data?.error;
      dispatch(
        addApiError({
          status: error?.status,
          message: error?.message,
        }),
      );
    }

    return {
      data,
    };
  } catch (error) {
    dispatch(
      addApiError({
        status: 500,
        message: "generic",
      }),
    );

    return {
      error,
    };
  } finally {
    dispatch(removeLoader());
  }
};
