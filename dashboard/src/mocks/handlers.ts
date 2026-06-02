import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/auth/login/data", () => {
    return HttpResponse.json({
      id: "abc-123",
      firstName: "John",
      lastName: "Maverick",
    });
  }),
];
