import { User } from "@/model/User";

export interface Room {
  Receiver: User;
  room: string;
  content: string;
  createdAt: Date;
}
