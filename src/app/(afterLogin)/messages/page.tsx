import { Metadata } from "next";
import Room from "./_component/Room";

export const metadata: Metadata = {
  title: "Message / Z",
  description: "Send Message.",
};

export default function Home() {
  return (
    <div id="message" className="main">
      <div className="header">
        <h3 hidden>Message</h3>
      </div>
      <Room />
    </div>
  );
}
