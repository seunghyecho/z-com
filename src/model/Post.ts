import { PostImage } from "./PostImage";
import { User } from "./User";

export interface Post {
  postId: number;
  User: User;
  Images: PostImage[];
  createdAt: Date;
  content: string;
}
