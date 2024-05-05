import { User } from "@/model/User";

export interface Room {
  Receiver: User;
  room: string;
  Sender: User;
  content: string;
  createdAt: Date;
}
