import type { TBaseQueryFn } from "@/model/baseQuery.model";
import {
  baseUrl,
  HttpType,
  imageCompressionOptions,
  tokenKey,
} from "./constants";
import { addApiError } from "@/state/apiErrorSlice/apiErrorSlice";
import { addLoader, removeLoader } from "@/state/uiSlice/uiSlice";
import { toFormData } from "./toFormData";
import imageCompression from "browser-image-compression";

export const normalizeBaseQuery: TBaseQueryFn = async (args, { dispatch }) => {
  const { url, payload, method, type } = args;
  try {
    dispatch(addLoader());

    let body;
    if (type === HttpType.File) {
      const { files, ...rest } = payload;
      const compressedFiles = await imageCompression(
        files,
        imageCompressionOptions,
      );

      body = toFormData({
        ...rest,
        files: compressedFiles,
      });
    } else {
      body = JSON.stringify(payload);
    }

    const auth = localStorage.getItem(tokenKey);
    let headers = new Headers();

    if (auth) {
      headers.append("Authorization", `Bearer ${auth}`);
    }

    if (!type) {
      headers.append("Content-type", "application/json; charset=UTF-8");
    }

    const response = await fetch(`${baseUrl}${url}`, {
      body,
      method,
      headers: headers,
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
