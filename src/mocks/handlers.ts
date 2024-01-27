import { faker } from "@faker-js/faker";
import { http, HttpResponse, StrictResponse } from "msw";

function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);

  // 지난 주부터 오늘까지 랜덤 날짜 하나 선택됨
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}

const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

const User = [
  { id: "shCho", nickname: "shCho", image: faker.image.avatar() },
  { id: "shCho111", nickname: "sh Cho111", image: faker.image.avatar() },
  { id: "shCho222", nickname: "sh Cho222", image: faker.image.avatar() },
  { id: "shCho333", nickname: "sh Cho333", image: faker.image.avatar() },
  { id: "shCho444", nickname: "sh Cho444", image: faker.image.avatar() },
  { id: "shCho555", nickname: "sh Cho555", image: faker.image.avatar() },
];

export const handlers = [
  http.post("/api/login", () => {
    console.log("login :");
    // return 응답
    return HttpResponse.json(HttpResponse.json(User[0]), {
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
      },
    });
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

  http.get("/api/postRecommends", ({ request }) => {
    const url = new URL(request.url);
    const cursor = parseInt(url.searchParams.get("cursor") as string) || 0;
    return HttpResponse.json([
      {
        postId: cursor + 1,
        User: User[0],
        content: `${cursor} Z.com is so marvelous. `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 2,
        User: User[0],
        content: `${cursor} Z.com is so marvelous. `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 3,
        User: User[0],
        content: `${cursor} Z.com is so marvelous. `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 4,
        User: User[0],
        content: `${cursor} Z.com is so marvelous. `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 5,
        User: User[0],
        content: `${cursor} Z.com is so marvelous. `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: cursor + 6,
        User: User[0],
        content: `${cursor + 6} Z.com is so marvelous. `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    ]);
  }),

  http.get("/api/postFollowings", async () => {
    await delay(3000);
    return HttpResponse.json([
      {
        postId: 1,
        User: User[0],
        content: `${1} Stop folloing me `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[0],
        content: `${2} Stop folloing me `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: User[0],
        content: `${3} Stop folloing me `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[0],
        content: `${4} Stop folloing me `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: User[0],
        content: `${5} Stop folloing me `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 6,
        User: User[0],
        content: `${6} Stop folloing me `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    ]);
  }),

  http.get("/api/search/:tag", ({ params }) => {
    const { tag } = params;
    return HttpResponse.json([
      {
        postId: 1,
        User: User[0],
        content: `${1} Search Result : ${tag} `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[0],
        content: `${2} Search Result : ${tag} `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: User[0],
        content: `${3} Search Result : ${tag} `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[0],
        content: `${4} Search Result : ${tag} `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: User[0],
        content: `${5} Search Result : ${tag} `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 6,
        User: User[0],
        content: `${6} Search Result : ${tag} `,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    ]);
  }),

  http.get("/api/users/:userId/posts", ({ request, params }) => {
    const { userId } = params;
    return HttpResponse.json([
      {
        postId: 1,
        User: User[0],
        content: `${1} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[0],
        content: `${2} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: User[0],
        content: `${3} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[0],
        content: `${4} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: User[0],
        content: `${5} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    ]);
  }),

  http.get("/api/users/:userId", ({ request, params }): StrictResponse<any> => {
    const { userId } = params;
    const found = User.find((v) => v.id === userId);
    if (found) {
      return HttpResponse.json(found);
    }
    return HttpResponse.json(
      { message: "no_such_user" },
      {
        status: 404,
      }
    );
  }),

  http.get("/api/posts/:postId", ({ request, params }): StrictResponse<any> => {
    const { postId } = params;
    if (parseInt(postId as string) > 10) {
      return HttpResponse.json(
        { message: "no_such_post" },
        {
          status: 404,
        }
      );
    }
    return HttpResponse.json({
      postId,
      User: User[0],
      content: `${1} 게시글 아이디 ${postId}의 내용`,
      Images: [
        { imageId: 1, link: faker.image.urlLoremFlickr() },
        { imageId: 2, link: faker.image.urlLoremFlickr() },
        { imageId: 3, link: faker.image.urlLoremFlickr() },
      ],
      createdAt: generateDate(),
    });
  }),

  http.get("/api/posts/:postId/comments", ({ request, params }) => {
    const { postId } = params;
    return HttpResponse.json([
      {
        postId: 1,
        User: User[0],
        content: `${1} 게시글 ${postId}의 답글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[0],
        content: `${2} 게시글 ${postId}의 답글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: User[0],
        content: `${3} 게시글 ${postId}의 답글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[0],
        content: `${4} 게시글 ${postId}의 답글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: User[0],
        content: `${5} 게시글 ${postId}의 답글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    ]);
  }),

  http.get("/api/followRecommends", ({ request }) => {
    return HttpResponse.json(User);
  }),

  http.get("/api/trends", ({ request }) => {
    return HttpResponse.json([
      { tagId: 1, title: "제로초", count: 1264 },
      { tagId: 2, title: "원초", count: 1264 },
      { tagId: 3, title: "투초", count: 1264 },
      { tagId: 4, title: "쓰리초", count: 1264 },
      { tagId: 5, title: "포초", count: 1264 },
      { tagId: 6, title: "파이브초", count: 1264 },
      { tagId: 7, title: "식스초", count: 1264 },
      { tagId: 8, title: "세븐초", count: 1264 },
      { tagId: 9, title: "나인초", count: 1264 },
    ]);
  }),
];
