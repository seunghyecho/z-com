import { Metadata } from "next";
import { auth } from "@/auth";
import Room from "@/app/(afterLogin)/messages/_component/Room";
import { getRooms } from "@/app/(afterLogin)/messages/_lib/getRooms";

export const metadata: Metadata = {
  title: "Message / Z",
  description: "Send Message.",
};

export default async function Home() {
  const session = await auth();
  const rooms = session?.user?.email
    ? await getRooms(session?.user?.email)
    : [];

  return (
    <div id="message" className="main">
      <div className="header">
        <h3>Message</h3>
      </div>
      {rooms.map((room) => (
        <Room key={room.room} room={room} />
      ))}
    </div>
  );
}
