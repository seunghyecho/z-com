"use server";

import { redirect } from "next/navigation";
import { signIn } from "@/auth";

interface ValidateAndUseInputType {
  success: boolean;
  message: string | null;
}

export default async (
  prevState: ValidateAndUseInputType,
  formData: FormData
) => {
  // formData 검증
  // id : trim() 으로 빈값 검증

  if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
    return { message: "no_id" };
  }

  if (!formData.get("name") || !(formData.get("name") as string)?.trim()) {
    return { message: "no_name" };
  }

  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password" };
  }
  if (!formData.get("image")) {
    return { message: "no_image" };
  }

  let shouldRedirect = false;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "post",
        body: formData,
        credentials: "include",
      }
    );

    console.log("response.status", response.status);
    if (response.status === 403) {
      return { message: "user_exists" };
    }

    console.log("await response.json()", await response.json());
    shouldRedirect = true;

    // 회원 가입 성공 후 로그인 진행
    await signIn("credentials", {
      username: formData.get("id"),
      password: formData.get("password"),
      redirect: false,
    });
  } catch (err) {
    console.error(err);
  }

  if (shouldRedirect) {
    redirect("/home"); // try/catch문 안에서 쓰지 않음.
  }
};
