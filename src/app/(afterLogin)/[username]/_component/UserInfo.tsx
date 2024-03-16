"use client";

import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { RxAvatar } from "react-icons/rx";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import { getUser } from "@/app/(afterLogin)/[username]/_lib/getUser";
import { Session } from "@auth/core/types";
import { User } from "@/model/User";

interface UserInfoProps {
  username: string;
  session: Session | null;
}
export default function UserInfo({ username, session }: UserInfoProps) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const {
    data: user,
    error,
    isLoading,
  } = useQuery<User, Object, User, [_1: string, _2: string]>({
    queryKey: ["users", username],
    queryFn: getUser,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  const follow = useMutation({
    mutationFn: (userId: string) => {
      return fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/follow`,
        {
          method: "post",
          credentials: "include",
        }
      );
    },
    onMutate: (userId: string) => {
      const value: User[] | undefined = queryClient.getQueryData([
        "users",
        "followRecommends",
      ]);
      if (value) {
        console.log("follow", value, userId);
        const index: number = value.findIndex((v) => v.id === userId);
        if (index > -1) {
          const shallow: User[] = [...value];
          shallow[index] = {
            ...shallow[index],
            Followers: [{ id: session?.user?.email as string }], //추가
            _count: {
              ...shallow[index]._count,
              Followers: shallow[index]._count?.Followers + 1,
            },
          };
          queryClient.setQueryData(["users", "followRecommends"], shallow);
        }
      }

      const value2: User | undefined = queryClient.getQueryData([
        "users",
        userId,
      ]);
      if (value2) {
        const shallow = {
          ...value2,
          Followers: [{ id: session?.user?.email as string }], //추가
          _count: {
            ...value2._count,
            Followers: value2._count?.Followers + 1,
          },
        };
        queryClient.setQueryData(["users", userId], shallow);
      }
    },
    onError: (error, userId) => {
      const value: User[] | undefined = queryClient.getQueryData([
        "users",
        "followRecommends",
      ]);
      if (value) {
        console.error("follow error :", error);
        const index: number = value.findIndex((v) => v.id === userId);
        if (index > -1) {
          const shallow: User[] = [...value];
          shallow[index] = {
            ...shallow[index],
            Followers: shallow[index].Followers.filter(
              (v) => v.id !== session?.user?.email
            ), // 제거
            _count: {
              ...shallow[index]._count,
              Followers: shallow[index]._count?.Followers - 1,
            },
          };
          queryClient.setQueryData(["users", "followRecommends"], shallow);
        }
      }

      const value2: User | undefined = queryClient.getQueryData([
        "users",
        userId,
      ]);
      if (value2) {
        const shallow = {
          ...value2,
          Followers: value2.Followers.filter(
            (v) => v.id !== session?.user?.email
          ),
          _count: {
            ...value2._count,
            Followers: value2._count?.Followers - 1,
          },
        };
        queryClient.setQueryData(["users", userId], shallow);
      }
    },
  });
  const unfollow = useMutation({
    mutationFn: (userId: string) => {
      return fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}/follow`,
        {
          method: "delete",
          credentials: "include",
        }
      );
    },
    onMutate: (userId: string) => {
      const value: User[] | undefined = queryClient.getQueryData([
        "users",
        "followRecommends",
      ]);
      if (value) {
        console.log("unfollow", value, userId);
        const index: number = value.findIndex((v) => v.id === userId);
        if (index > -1) {
          const shallow: User[] = [...value];
          shallow[index] = {
            ...shallow[index],
            Followers: shallow[index].Followers.filter(
              (v) => v.id !== session?.user?.email
            ), // 제거
            _count: {
              ...shallow[index]._count,
              Followers: shallow[index]._count?.Followers - 1,
            },
          };
          queryClient.setQueryData(["users", "followRecommends"], shallow);
        }
      }

      const value2: User | undefined = queryClient.getQueryData([
        "users",
        userId,
      ]);
      if (value2) {
        const shallow = {
          ...value2,
          Followers: value2.Followers.filter(
            (v) => v.id !== session?.user?.email
          ),
          _count: {
            ...value2._count,
            Followers: value2._count?.Followers - 1,
          },
        };
        queryClient.setQueryData(["users", userId], shallow);
      }
    },
    onError: (error, userId: string) => {
      const value: User[] | undefined = queryClient.getQueryData([
        "users",
        "followRecommends",
      ]);
      if (value) {
        console.error("unfollow error :", error);
        const index: number = value.findIndex((v) => v.id === userId);
        if (index > -1) {
          const shallow = [...value];
          shallow[index] = {
            ...shallow[index],
            Followers: [{ id: session?.user?.email as string }], //추가
            _count: {
              ...shallow[index]._count,
              Followers: shallow[index]._count?.Followers + 1,
            },
          };
          queryClient.setQueryData(["users", "followRecommends"], shallow);
        }
      }

      const value2: User | undefined = queryClient.getQueryData([
        "users",
        userId,
      ]);
      if (value2) {
        const shallow = {
          ...value2,
          Followers: [{ id: session?.user?.email as string }], //추가
          _count: {
            ...value2._count,
            Followers: value2._count?.Followers + 1,
          },
        };
        queryClient.setQueryData(["users", userId], shallow);
      }
    },
  });

  if (error) {
    return (
      <>
        <div className="header">
          <BackButton />
          <h3 className="headerTitle">Profile</h3>
        </div>
        <div className="userZone">
          <div className="userImage">
            <RxAvatar size={"134px"} color="rgba(15,20,25, 0.1)" />
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

  if (!user) return null;

  const followed = user.Followers?.find((v) => v.id === session?.user?.email);

  const onFollow: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (!session?.user) {
      router.replace("/login");
    }

    if (followed) {
      unfollow.mutate(user.id);
    } else {
      follow.mutate(user.id);
    }
  };

  return (
    <>
      <div className="header">
        <BackButton />
        <h3 className="headerTitle">{user.nickname}</h3>
      </div>
      <div className="userZone">
        <div className="userImage">
          <img src={user.image} alt={user.id} />
        </div>
        <div className="userName">
          <h2>{user.nickname}</h2>
          <div>@{user.id}</div>
        </div>
        {session?.user?.email !== user.id && (
          <button
            className={`followButton ${followed && "followed"}`}
            onClick={onFollow}
          >
            {followed ? "Following" : "Follow"}
          </button>
        )}
      </div>
      <div>
        <span>{user._count.Followers} Follwers </span>
        <span> {user._count.Followings} Followings</span>
      </div>
    </>
  );
}
