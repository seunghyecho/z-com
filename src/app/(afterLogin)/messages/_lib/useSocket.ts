import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

// 커스텀 훅 간에 공유할 데이터는 useSocket() 훅 바깥에다가 선언.
let socket: Socket | null;
export default function useSocket(): [Socket | null, () => void] {
  const { data: session } = useSession();
  // const [socket, setSocket] = useState<Socket | null>(null);
  const disconnect = useCallback(() => {
    socket?.disconnect();
    // setSocket(null);
    socket = null;
  }, []);

  useEffect(() => {
    // 중복 연결을 맺지 않도록 조건 처리
    if (!socket) {
      socket = io(`${process.env.NEXT_PUBLIC_BASE_URL}/messages`, {
        transports: ["websocket"],
      });
      socket.on("connect_error", (err) => {
        console.error(err);
        console.log(`connect_error due to ${err.message}`);
      });
      //   setSocket(socketResult);
    }
  }, []);

  useEffect(() => {
    // socket 연결됐을 때 로그인 시켜주기
    if (socket?.connected && session?.user?.email) {
      socket?.emit("login", { id: session?.user?.email });
    }
  }, [session]);

  return [socket, disconnect];
}
