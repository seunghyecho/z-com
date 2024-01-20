"use client";

import SinglePost from "@/app/(afterLogin)/[username]/status/[id]/_component/SinglePost";
import Comments from "@/app/(afterLogin)/[username]/status/[id]/_component/Comments";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import { StyledCommentZone } from "./CommentZone.style";

interface CommentZoneProps {
  id: string;
}
export default function CommentZone({ id }: CommentZoneProps) {
  return (
    <StyledCommentZone className="commentZone">
      <SinglePost id={id} />
      <CommentForm />
      {/* @ts-expect-error */}
      <Comments id={id} />
    </StyledCommentZone>
  );
}
