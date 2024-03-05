"use client";

import ActionButton from "@/app/(afterLogin)/_component/ActionButton";
import { useQuery } from "@tanstack/react-query";
import { Post as IPost } from "@/model/Post";
import { getSinglePost } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost";
import { StyledImageZone } from "./ImageZone.style";

interface ImageZoneProps {
  id: string;
}
export default function ImageZone({ id }: ImageZoneProps) {
  const { data: post, error } = useQuery<
    IPost,
    Object,
    IPost,
    [_1: string, _2: string]
  >({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  if (!post?.Images[0]) {
    return null;
  }
  return (
    <StyledImageZone className="imageZone">
      <img src={post.Images[0].link} alt={post.content} />
      <div
        className="image"
        style={{ backgroundImage: `url(${post.Images[0].link})` }}
      />
      <div className="buttonZone">
        <div className="buttonInner">
          <ActionButton white post={post} />
        </div>
      </div>
    </StyledImageZone>
  );
}
