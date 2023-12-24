import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";
import { StyledPostForm } from "./PostForm.style";
import { IoMdImages } from "react-icons/io";

export const me = {
  id: "shcho",
  nickname: "shcho",
  image: "",
};
export default function PostForm({}) {
  const imageRef = useRef<HTMLInputElement>(null); // input useRef error로 인한 타입스크립트 처리

  const [content, setContent] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setContent(e.target.value);
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  const onClickUploadButton = () => {
    imageRef.current?.click(); // current가 null 일 경우 ? 예외 처리
  };
  return (
    <StyledPostForm className="postForm" onSubmit={onSubmit}>
      <div className="postUserSection">
        <div className="postUserImage">
          <img src={me.image} alt={me.image} />
        </div>
      </div>
      <div className="postInputSection">
        <textarea
          name=""
          id=""
          value={content}
          placeholder="무슨 일이 일어나고 있나요?"
        ></textarea>
        <div className="postButtonSection">
          <div className="footerButtons">
            <div className="footerButtonLeft">
              <input
                type="file"
                name="imageFiles"
                multiple
                hidden
                ref={imageRef}
              />
              <button className="uploadButton" onClick={onClickUploadButton}>
                <IoMdImages size={20} />
              </button>
            </div>
            <button className="actionButton">게시하기</button>
          </div>
        </div>
      </div>
    </StyledPostForm>
  );
}
