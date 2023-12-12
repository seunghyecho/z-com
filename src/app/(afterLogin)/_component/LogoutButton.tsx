"use client";

import { StyledLogoutButton } from "./LogoutButton.style";

interface LogoutButtonProps {
  me?: any;
  onLogout: any;
}
export default function LogoutButton({ onLogout }: LogoutButtonProps) {
  const me = {
    id: "shcho",
    nickname: "shcho",
    image: "",
  };
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
