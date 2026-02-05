import type { HttpType } from "@/helper/constants";
import type { TApiError } from "@/state/apiErrorSlice/apiErrorSlice.model";
import type { ThunkDispatch } from "@reduxjs/toolkit";

export type TBaseQueryFn<
  Args = {
    payload?: object;
    method: "POST" | "GET" | "PUT" | "DELETE";
    url: string;
    type?: HttpType;
  },
  Result = {
    data: unknown;
  },
  Error = TApiError,
  DefinitionExtraOptions = {},
  Meta = {},
> = (
  args: Args,
  api: BaseQueryApi,
  extraOptions: DefinitionExtraOptions,
) => Promise<QueryReturnValue<Result, Error, Meta>>;

export interface BaseQueryApi {
  signal: AbortSignal;
  dispatch: ThunkDispatch<any, any, any>;
  getState: () => unknown;
}

export type QueryReturnValue<T = unknown, E = unknown, M = unknown> =
  | {
      error: E;
      data?: undefined;
      meta?: M;
    }
  | {
      error?: undefined;
      data: T;
      meta?: M;
    };
