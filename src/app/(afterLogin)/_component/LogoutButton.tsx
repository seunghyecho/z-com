"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Session } from "@auth/core/types";
import { StyledLogoutButton } from "./LogoutButton.style";
import { useQueryClient } from "@tanstack/react-query";
interface LogoutButtonProps {
  me: Session;
}

export default function LogoutButton({ me }: LogoutButtonProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const onLogout = () => {
    // 쿼리 캐시 삭제
    queryClient.invalidateQueries({
      queryKey: ["posts"],
    });
    queryClient.invalidateQueries({
      queryKey: ["users"],
    });
    signOut({ redirect: false }).then(() => {
      //  connect.sid 쿠키 삭제를 위한 로그아웃 api 연동
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/logout`, {
        method: "post",
        credentials: "include",
      });
      router.replace("/");
    });
  };

  if (!me?.user) {
    return null;
  }

  return (
    <StyledLogoutButton onClick={onLogout}>
      <div className="logoutUserImage">
        <img src={me.user?.image as string} alt={me.user?.email as string} />
      </div>
      <div className="logoutUserName">
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </StyledLogoutButton>
  );
}
