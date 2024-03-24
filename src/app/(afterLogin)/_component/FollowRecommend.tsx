"use client";

import Link from "next/link";
import { MouseEventHandler } from "react";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { StyledFollowRecommend } from "./FollowRecommend.style";
import { User } from "@/model/User";

interface Props {
  user: User;
}
export default function FollowRecommend({ user }: Props) {
  const { data: session } = useSession();
  const followed: boolean = !!user.Followers?.find(
    (v) => v.id === session?.user?.email
  ); // 내가 팔로우 했는지 여부
  const queryClient = useQueryClient();

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
  const onFollow: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (followed) {
      unfollow.mutate(user?.id);
    } else {
      follow.mutate(user?.id);
    }
  };

  return (
    <StyledFollowRecommend className="followRecommend">
      <Link href={`/${user.id}`} className="container">
        <div className="userLogoSection">
          <div className="userLogo">
            <img src={user?.image} alt={user?.id} />
          </div>
          <div className="userInfo">
            <div className="title">{user?.id}</div>
            <div className="count">@{user?.nickname}</div>
          </div>
        </div>
        <div className="followButtonSection">
          <button className={followed ? "following" : ""} onClick={onFollow}>
            {followed ? "팔로잉" : "팔로우"}
          </button>
        </div>
      </Link>
    </StyledFollowRecommend>
  );
}
