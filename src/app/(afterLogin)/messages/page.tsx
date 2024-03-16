import { Metadata } from "next";
import Room from "./_component/Room";

export const metadata: Metadata = {
  title: "Message / Z",
  description: "Send Message.",
};

export default function Home() {
  return (
    <div id="message">
      <div className="header">
        <h3>Message</h3>
      </div>
      <Room />
    </div>
  );
}
