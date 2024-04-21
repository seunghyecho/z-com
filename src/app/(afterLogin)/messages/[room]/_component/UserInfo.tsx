"use client";

import { getUser } from "@/app/(afterLogin)/[username]/_lib/getUser";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { StyledUserInfo } from "./UserInfo.style";

interface UserInfoProps {
  id: string;
}
export const UserInfo = ({ id }: UserInfoProps) => {
  const { data: user } = useQuery({
    queryKey: ["users", id],
    queryFn: getUser,
  });
  if (!user) return <></>;
  return (
    <StyledUserInfo>
      <div className="header">
        <BackButton />
        <div>
          <h2>{user.nickname}</h2>
        </div>
      </div>
      <Link href={user.image} className="userInfo">
        <img src={user.image} alt="" />
        <div>
          <b>{user.nickname}</b>
        </div>
        <div>@{user.id}</div>
      </Link>
    </StyledUserInfo>
  );
};
