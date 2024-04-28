import { QueryClient } from "@tanstack/react-query";
import { MessageForm } from "@/app/(afterLogin)/messages/[room]/_component/MessageForm";
import { getUserServer } from "@/app/(afterLogin)/[username]/_lib/getUserServer";
import { UserInfo } from "@/app/(afterLogin)/messages/[room]/_component/UserInfo";
import WebsocketComponent from "@/app/(afterLogin)/messages/[room]/_component/WebsocketComponent";
import { auth } from "@/auth";
import MessageList from "./_component/MessageList";

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

  return (
    <div id="chatroom" className="main">
      <WebsocketComponent />
      <UserInfo id={ids[0]} />
      <MessageList id={ids[0]} />
      <MessageForm id={ids[0]} />
    </div>
  );
}
