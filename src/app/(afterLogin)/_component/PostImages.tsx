import Link from "next/link";
import { StyledPostImages } from "./PostImages.style";

interface PostImagesProps {
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
}

export default function PostImages({ post }: PostImagesProps) {
  /**
   * 이미지 개수 4게 제한
   */
  if (!post.Images) return null;
  if (!post.Images.length) return null;

  if (post.Images.length === 1) {
    return (
      <StyledPostImages>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          className="postImageSection oneImage"
          style={{
            backgroundImage: `url(${post.Images[0].link})`,
            backgroundSize: "contain",
          }}
        />
      </StyledPostImages>
    );
  }
  if (post.Images.length === 2) {
    return (
      <StyledPostImages className="postImageSection twoImage">
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[0].link})`,
            backgroundSize: "cover",
          }}
        />

        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[1].link})`,
            backgroundSize: "cover",
          }}
        />
      </StyledPostImages>
    );
  }

  if (post.Images.length === 3) {
    return (
      <StyledPostImages className="postImageSection threeImage">
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[0].link})`,
            backgroundSize: "cover",
          }}
        />
        <div>
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
            style={{
              backgroundImage: `url(${post.Images[1].link})`,
              backgroundSize: "cover",
            }}
          />
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
            style={{
              backgroundImage: `url(${post.Images[2].link})`,
              backgroundSize: "cover",
            }}
          />
        </div>
      </StyledPostImages>
    );
  }

  if (post.Images.length === 4) {
    return (
      <StyledPostImages className="postImageSection fourImage">
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[0].link})`,
            backgroundSize: "cover",
          }}
        />
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[1].link})`,
            backgroundSize: "cover",
          }}
        />
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[2].link})`,
            backgroundSize: "cover",
          }}
        />
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[3].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[3].link})`,
            backgroundSize: "cover",
          }}
        />
      </StyledPostImages>
    );
  }
  return null;
}
