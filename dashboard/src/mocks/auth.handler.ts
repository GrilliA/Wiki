import type {
  TSignupParams,
  TSignupResponseData,
} from "@/services/auth/auth.model";
import { http, HttpResponse } from "msw";

export const loginUser = http.post("/api/auth/login", async ({ request }) => {
  const { identifier } = (await request.json()) as any;

  if (identifier === "admin") {
    return HttpResponse.json({
      isSuccess: true,
      data: null,
      code: null,
    });
  }

  return HttpResponse.json({
    isSuccess: false,
    data: null,
    code: 100,
  });
});

export const registerUser = http.post<{}, TSignupParams, TSignupResponseData>(
  "/api/auth/register",
  async () => {
    return HttpResponse.json({
      isSuccess: true,
      data: null,
      code: null,
    });
  },
);
