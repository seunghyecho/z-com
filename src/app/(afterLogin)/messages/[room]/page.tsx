import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // 한국어 가져오기

dayjs.extend(relativeTime);
dayjs.locale("ko");

import { QueryClient } from "@tanstack/react-query";
import { MessageForm } from "@/app/(afterLogin)/messages/[room]/_component/MessageForm";
import { getUserServer } from "@/app/(afterLogin)/[username]/_lib/getUserServer";
import { UserInfo } from "@/app/(afterLogin)/messages/[room]/_component/UserInfo";
import WebsocketComponent from "@/app/(afterLogin)/messages/[room]/_component/WebsocketComponent";
import { auth } from "@/auth";

interface ChatRoomProps {
  params: { room: string };
}

export default async function ChatRoom({ params }: ChatRoomProps) {
  const session = await auth();
  const queryClient = new QueryClient();

  const ids = params.room.split("-").filter((f) => f !== session?.user?.email);
  if (!ids[0]) return null;
  await queryClient.prefetchQuery({
    queryKey: ["users", ids[0]],
    queryFn: getUserServer,
  });

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
    <div id="chatroom" className="main">
      <WebsocketComponent />
      <UserInfo id={ids[0]} />
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
      <MessageForm id={ids[0]} />
    </div>
  );
}
