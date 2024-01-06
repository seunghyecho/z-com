import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/api/login", () => {
    console.log("login");
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

  http.post("/api/users", async () => {
    console.log("회원 가입");

    // return HttpResponse.text(JSON.stringify("user_exists"), {
    //   status: 403,
    // });

    return HttpResponse.text(JSON.stringify("ok"), {
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/;Max-age=0",
      },
    });
  }),
];
