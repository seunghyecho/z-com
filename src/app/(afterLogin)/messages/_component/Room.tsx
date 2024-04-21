"use client";

import { StyledRoom } from "./Room.style";
import { useRouter } from "next/navigation";
import { Room } from "@/model/Room";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // 한국어 가져오기

dayjs.extend(relativeTime);
dayjs.locale("ko");

interface RoomProps {
  room: Room;
}
export default function Room({ room }: RoomProps) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/messages/${room.room}`);
  };
  return (
    <StyledRoom className="room" onClickCapture={onClick}>
      <div className="roomUserImage">
        <img src={room.Receiver.image} alt="" />
      </div>
      <div className="roomChatInfo">
        <div className="roomUserInfo">
          <b>{room.Receiver.nickname}</b>
          <span>@{room.Receiver.id}</span>
          <span className="postDate">
            {/* 방의 가장 마지막 메세지 날짜 */}
            {dayjs(room.createdAt).fromNow(true)}
          </span>
        </div>
        <div className="roomLastChat">{room.content}</div>
      </div>
    </StyledRoom>
  );
}
