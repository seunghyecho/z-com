"use client";

import Image from "next/image";
import { StyledLogoutButton } from "./LogoutButton.style";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface LogoutButtonProps {}

export default function LogoutButton({}: LogoutButtonProps) {
  const router = useRouter();

  const { data: me } = useSession();
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
