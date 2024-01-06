import { redirect } from "next/dist/server/api-utils";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  pages: {
    signIn: "/i/flow/login",
    newUser: "/i/flow/signup",
  },
  // callbacks: {
  //   async authorized({ request, auth }) {
  //     if (!auth) {
  //       return NextResponse.redirect(`http://localhost:3000/i/flow/login`);
  //     }
  //     return true;
  //   },
  // },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log("credentials", credentials);
        const authResponse = await fetch(`${process.env.AUTH_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: credentials.username,
            password: credentials.password,
          }),
        });

        console.log("authResponse", authResponse);
        // let setCookie = authResponse.headers.get("Set-Cookie");
        // console.log("set-cookie", setCookie);
        // if (setCookie) {
        //   const parsed = cookie.parse(setCookie);
        //   cookies().set("connect.sid", parsed["connect.sid"], parsed); // 브라우저에 쿠키를 심어주는 것
        // }

        // 로그인 실패
        if (!authResponse.ok) {
          return null;
        }

        // 로그인 성공
        const user = await authResponse.json();
        console.log("user", user);
        return {
          email: user.id,
          name: user.nickname, // 닉네임 값 우회
          image: user.image,
          ...user,
        };
      },
    }),
  ],
});
