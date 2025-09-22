import { baseUrl } from "@/helper/constants";
import { ADD_ERROR, SET_LOADER, UNSET_LOADER } from "@/store/ui/ui.events";
import { useEffect, useId, useState } from "react";
import useGlobalState from "./useGlobalState";
type TResponse<T> = {
  data: T;
  message: string;
  ok: boolean;
};
export type TFetchReturnValue<T> = {
  response: T;
  isLoading: boolean;
  fetch: () => Promise<T>;
};
type Options<T> = {
  body?: object;
  atCommand?: boolean;
  onSuccess?: (response: TResponse<T>) => void;
  onFail?: () => void;
  deps?: Array<unknown>;
  isCustomUrl?: boolean;
  method?: MethodTypes;
  noError?: boolean;
  header?: Headers;
  fetchOptions?: RequestInit;
  hasLoader?: boolean;
};
type ReturnValue<T, K> = T extends string
  ? TFetchReturnValue<TResponse<K>>
  : T extends Array<string>
    ? TFetchReturnValue<{ [M in keyof K]: TResponse<K[M]> }>
    : never;
export type MethodTypes = "GET" | "POST" | "PUT" | "DELETE";
export const useWikiFetch = <T, K>(
  urls: string | Array<string>,
  options: Options<K> = {},
): ReturnValue<T, K> => {
  const { dispatch } = useGlobalState();
  const dd = (typeof urls === "string" ? {} : []) as TResponse<K>;
  const [theData, setTheData] = useState(dd);
  const [isLoading, setIsLoading] = useState(false);
  const id = useId();
  const {
    method = "GET",
    atCommand,
    header,
    body,
    isCustomUrl = false,
    noError,
    deps = [],
    onSuccess,
    onFail,
    fetchOptions = {},
    hasLoader = true,
  } = options;
  urls = getFetchUrls(urls, isCustomUrl);
  let errorMessages: Array<string> = [];

  const fetchData = async (): Promise<unknown> => {
    try {
      setIsLoading(true);
      if (hasLoader) {
        dispatch({ type: SET_LOADER, payload: id });
      }
      const fetchPromises = urls.map(async (url) => {
        const res = await fetch(url, {
          body: header ? (body as FormData) : JSON.stringify(body),
          method,
          credentials: "include",
          headers: header ?? {
            "Content-Type": "application/json",
          },
          ...fetchOptions,
        });
        const result = await res.json();
        return result;
      });

      const res = await Promise.allSettled(fetchPromises);
      const allResponse = res.map((result) => {
        if (result.status === "rejected") {
          errorMessages = [...errorMessages, result.reason];
        }
        if (result.status === "fulfilled" && !result.value.ok) {
          errorMessages = [...errorMessages, result.value.message];
          throw new Error(result.value.message);
        }

        if (result.status === "fulfilled") {
          return result.value;
        }
      });
      const finalResult =
        allResponse.length === 1 ? allResponse[0] : allResponse;
      setTheData(finalResult);
      onSuccess?.(finalResult);
      return finalResult;
    } catch (error: any) {
      onFail?.();
      if (noError) {
        return;
      }
      dispatch({
        type: ADD_ERROR,
        payload: {
          message: errorMessages,
          details: error.stack,
        },
      });
    } finally {
      setIsLoading(false);
      if (hasLoader) {
        dispatch({ type: UNSET_LOADER, payload: id });
      }
    }
  };

  useEffect(() => {
    if (!atCommand && deps.every((dependency) => dependency)) {
      fetchData();
    }
  }, deps);

  return { response: theData, fetch: fetchData, isLoading } as ReturnValue<
    T,
    K
  >;
};
const getFetchUrls = (url: string | Array<string>, isCustomUrl: boolean) => {
  if (Array.isArray(url)) {
    return isCustomUrl ? url : url.map((item) => `${baseUrl}${item}`);
  }
  return isCustomUrl ? [url] : [`${baseUrl}${url}`];
};
