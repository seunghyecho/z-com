import { User } from "@/model/User";

export interface Message {
  messageId: number;
  senderId: string;
  receiverId: string;
  room: string;
  content: string;
  createdAt: Date;
}
