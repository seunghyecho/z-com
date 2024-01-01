import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/api/login", () => {
    // return 응답
    return HttpResponse.json(
      {
        userId: 1,
        nickname: "shcho",
        id: "shcho",
        image: "/next.svg",
      },
      {
        headers: {
          "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
        },
      }
    );
  }),

  http.post("/api/logout", () => {
    // return 응답
    return new HttpResponse(null, {
      headers: {
        "Set-Cookie": "connect.sid=;HttpOnly;Path=/",
      },
    });
  }),
];
