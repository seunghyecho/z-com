"use client";

import useSocket from "@/app/(afterLogin)/messages/_lib/useSocket";

export default function WebsocketComponent() {
  useSocket();
  return null;
}
