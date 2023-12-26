import BackButton from "@/app/(afterLogin)/_component/BackButton";
import Post from "@/app/(afterLogin)/_component/Post";
import { StyledSinglePost } from "./SinglePost.style";
import CommentForm from "./_component/CommentForm";

export default function SinglePost() {
  return (
    <StyledSinglePost className="main">
      <div className="header">
        <BackButton />
        <h3 className="headerTitle">게시하기</h3>
      </div>
      <Post />
      <CommentForm />
      <div>
        {/* 게시글에 대한 답글 */}
        <Post />
      </div>
    </StyledSinglePost>
  );
}
