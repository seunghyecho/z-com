"use client";

import { StyledLogoutButton } from "./LogoutButton.style";

interface LogoutButtonProps {}

export const me = {
  id: "shcho",
  nickname: "shcho",
  image: "",
};
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
