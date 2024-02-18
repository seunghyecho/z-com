"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Session } from "@auth/core/types";
import { StyledLogoutButton } from "./LogoutButton.style";
interface LogoutButtonProps {
  me: Session;
}

export default function LogoutButton({ me }: LogoutButtonProps) {
  const router = useRouter();

  const onLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.replace("/");
    });
  };

  if (!me?.user) {
    return null;
  }

  return (
    <StyledLogoutButton className="logoutButton" onClick={onLogout}>
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
