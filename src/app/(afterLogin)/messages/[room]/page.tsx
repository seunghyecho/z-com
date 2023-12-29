"use client";

import { faker } from "@faker-js/faker";
import Link from "next/link";
import BackButton from "../../_component/BackButton";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // 한국어 가져오기

dayjs.extend(relativeTime);
dayjs.locale("ko");
import { StyledChatRoom } from "./ChatRoom.style";

export default function ChatRoom() {
  const user = {
    id: "id222",
    nickname: "nickname222",
    image: faker.image.avatar(),
  };

  const messages = [
    {
      messageId: 222,
      id: "id222",
      content: "content222",
      createdAt: new Date(),
    },
    {
      messageId: 222,
      id: "shcho",
      content: "content111",
      createdAt: new Date(),
    },
  ];
  return (
    <StyledChatRoom>
      <div className="header">
        <BackButton />
        <div>
          <h2>{user.nickname}</h2>
        </div>
      </div>
      <Link href={user.nickname} className="userInfo">
        <img src={user.image} alt="" />
        <div>
          <b>{user.nickname}</b>
        </div>
        <div>@{user.id}</div>
      </Link>
      <div className="list">
        {messages.map((m) => {
          if (m.id === "shcho") {
            return (
              <div key={m.messageId} className="message myMessage">
                <div className="content">{m.content}</div>
                <div className="date">
                  {dayjs(m.createdAt).format("YYYY-MM-DD A HH:mm")}
                </div>
              </div>
            );
          }

          return (
            <div className="message yourMessage">
              <div className="content">{m.content}</div>
              <div className="date">
                {dayjs(m.createdAt).format("YYYY-MM-DD A HH:mm")}
              </div>
            </div>
          );
        })}
      </div>
    </StyledChatRoom>
  );
}
