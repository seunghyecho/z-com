import { NextResponse } from "next/server";
import { auth } from "./auth";

export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect("http://localhost:3000/i/flow/login");
  }
}
// middleware 를 적용할 라우트
export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
};
