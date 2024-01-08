import { faker } from "@faker-js/faker";
import { http, HttpResponse } from "msw";

function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);

  // 지난 주부터 오늘까지 랜덤 날짜 하나 선택됨
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}

const User = [
  { id: "shcho111", nickname: "sh Cho111", image: faker.image.avatar() },
  { id: "shcho222", nickname: "sh Cho222", image: faker.image.avatar() },
];

export const handlers = [
  http.post("/api/login", () => {
    console.log("login :");
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
    console.log("logout :");
    // return 응답
    return new HttpResponse(null, {
      headers: {
        "Set-Cookie": "connect.sid=;HttpOnly;Path=/",
      },
    });
  }),

  http.post("/api/users", async () => {
    console.log("회원 가입 :");

    // return HttpResponse.text(JSON.stringify("user_exists"), {
    //   status: 403,
    // });

    return HttpResponse.text(JSON.stringify("ok"), {
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/;Max-age=0",
      },
    });
  }),

  http.get("/api/postRecommends", () => {
    return HttpResponse.json([
      {
        postId: 1,
        User: User[0],
        content: `${1} Z.com is so marvelous. `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[0],
        content: `${2} Z.com is so marvelous. `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: User[0],
        content: `${3} Z.com is so marvelous. `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[0],
        content: `${4} Z.com is so marvelous. `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: User[0],
        content: `${5} Z.com is so marvelous. `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 6,
        User: User[0],
        content: `${6} Z.com is so marvelous. `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    ]);
  }),
];
