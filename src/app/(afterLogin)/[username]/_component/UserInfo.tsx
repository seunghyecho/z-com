"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import { getUser } from "@/app/(afterLogin)/[username]/_lib/getUser";
import { User } from "@/model/User";

interface UserInfoProps {
  username: string;
}
export default function UserInfo({ username }: UserInfoProps) {
  const router = useRouter();
  const { data: session } = useSession();
  const {
    data: me,
    error,
    isLoading,
  } = useQuery<User, Object, User, [_1: string, _2: string]>({
    queryKey: ["users", username],
    queryFn: getUser,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  console.log(me);
  console.dir(error);

  const onClickFollow = () => {
    if (!session?.user) {
      router.replace("/login");
    }
  };

  if (error) {
    return (
      <>
        <div className="header">
          <BackButton />
          <h3 className="headerTitle">Profile</h3>
        </div>
        <div className="userZone">
          <div className="userImage">
            <img src={undefined} alt={undefined} />
          </div>
          <div className="userName">
            <h2>{username}</h2>
            <div>@{username}</div>
          </div>
        </div>
        <div className="noData">No data</div>
      </>
    );
  }

  if (!me) return null;

  return (
    <>
      <div className="header">
        <BackButton />
        <h3 className="headerTitle">{me.nickname}</h3>
      </div>
      <div className="userZone">
        <div className="userImage">
          <img src={me.image} alt={me.id} />
        </div>
        <div className="userName">
          <h2>{me.nickname}</h2>
          <div>@{me.id}</div>
        </div>

        <button className="followButton" onClick={onClickFollow}>
          Follow
        </button>
      </div>
    </>
  );
}
