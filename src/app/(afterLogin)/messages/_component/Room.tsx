"use client";

import { faker } from "@faker-js/faker";
import { StyledRoom } from "./Room.style";
import { useRouter } from "next/navigation";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // 한국어 가져오기

dayjs.extend(relativeTime);
dayjs.locale("ko");

export default function Room() {
  const router = useRouter();
  const user = {
    id: "id222",
    nickname: "nickname222",
    Messages: [
      {
        roomId: 222,
        content: "content222",
        createdAt: new Date(),
      },
    ],
  };

  const onClick = () => {
    router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
  };
  return (
    <StyledRoom className="room" onClickCapture={onClick}>
      <div className="roomUserImage">
        <img src={faker.image.avatar()} alt="" />
      </div>
      <div className="roomChatInfo">
        <div className="roomUserInfo">
          <b>{user.nickname}</b>
          <span>@{user.id}</span>
          <span className="postDate">
            {dayjs(user.Messages?.at(-1)?.createdAt).fromNow(true)}
          </span>
        </div>
        <div className="roomLastChat">{user.Messages?.at(-1)?.content}</div>
      </div>
    </StyledRoom>
  );
}
