"use client";

import Image from "next/image";
import { StyledLogoutButton } from "./LogoutButton.style";
import { me } from "@/app/const/common";

interface LogoutButtonProps {}

export default function LogoutButton({}: LogoutButtonProps) {
  const onLogout = () => {};

  return (
    <StyledLogoutButton className="logoutButton" onClick={onLogout}>
      <div className="logoutUserImage">
        <img src={me.image} alt={me.id} />
      </div>
      <div className="logoutUserName">
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </StyledLogoutButton>
  );
}
