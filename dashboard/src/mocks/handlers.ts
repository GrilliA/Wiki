import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/api/auth/login", async ({ request }) => {
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
  }),
];
