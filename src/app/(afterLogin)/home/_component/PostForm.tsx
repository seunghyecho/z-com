"use client";

import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useRef,
  useState,
} from "react";
import { IoMdImages } from "react-icons/io";
import TextareaAutosize from "react-textarea-autosize";
import { Session } from "@auth/core/types";
import { StyledPostForm } from "./PostForm.style";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  me: Session | null;
};

export default function PostForm({ me }: Props): JSX.Element {
  const imageRef = useRef<HTMLInputElement>(null); // input useRef error로 인한 타입스크립트 처리
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState<
    Array<{ dataUrl: string; file: File } | null>
  >([]);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (e: FormEvent) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("content", content);

      preview.forEach((p) => {
        p && formData.append("images", p.file);
      });

      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
        method: "post",
        credentials: "include",
        body: formData,
      });
    },
    onMutate: () => {
      return 123;
    },
    onSuccess: async (response, variable, context) => {
      const newPost = await response?.json();
      setContent("");
      setPreview([]);

      if (queryClient.getQueryData(["posts", "recommends"])) {
        queryClient.setQueryData(["posts", "recommends"], (prevData: any) => {
          // 리액트의 불변성 법칙, 첫 페이지의 첫 게시글로 노출
          const shallow = {
            ...prevData,
            pages: [...prevData.pages],
          };
          shallow.pages[0] = [...shallow.pages[0]];
          shallow.pages[0].unshift(newPost);
          return shallow;
        });
      }
      if (queryClient.getQueryData(["posts", "followings"])) {
        queryClient.setQueryData(["posts", "followings"], (prevData: any) => {
          const shallow = {
            ...prevData,
            pages: [...prevData.pages],
          };
          shallow.pages[0] = [...shallow.pages[0]];
          shallow.pages[0].unshift(newPost);
          return shallow;
        });
      }
    },
    onError: (error) => {
      console.error(error);
    },
  });
  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };
  const onClickUploadButton = () => {
    imageRef.current?.click(); // current가 null 일 경우 ? 예외 처리
  };
  const onRemoveFiles = (e: any, index: number) => {
    e.stopPropagation();
    setPreview((prevPreview) => {
      const prev = [...prevPreview];
      prev[index] = null;
      return prev;
    });
  };
  const onUploadFiles: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.files) {
      Array.from(e.target.files).forEach((file: File, index: number) => {
        const reader = new FileReader();

        reader.onload = () => {
          setPreview((prevPreviews) => {
            const prev = [...prevPreviews];

            prev[index] = {
              dataUrl: reader.result as string,
              file,
            };

            return prev;
          });
        };
        reader.readAsDataURL(file); // 이미지 데이터를 문자열로, img src 속성 에 사용
      });
    }
  };

  if (!me?.user) return <></>;

  return (
    <StyledPostForm className="postForm" onSubmit={mutation.mutate}>
      <div className="postUserSection">
        <div className="postUserImage">
          <img src={me?.user.image as string} alt={me?.user.email as string} />
        </div>
      </div>

      <div className="postInputSection">
        <TextareaAutosize
          name=""
          id=""
          value={content}
          onChange={onChange}
          placeholder="What's up"
        />
        <div
          style={{
            display: "flex",
          }}
        >
          {preview.map(
            (p, index) =>
              p && (
                <div onClick={(e) => onRemoveFiles(e, index)} key={index}>
                  <img
                    src={p.dataUrl}
                    alt={"Preview"}
                    style={{
                      width: "100%",
                      objectFit: "contain",
                      maxHeight: "100px",
                    }}
                  />
                </div>
              )
          )}
        </div>

        <div className="postButtonSection">
          <div className="footerButtons">
            <div className="footerButtonLeft">
              <input
                type="file"
                name="imageFiles"
                multiple
                hidden
                ref={imageRef}
                onChange={onUploadFiles}
              />
              <button
                className="uploadButton"
                type="button"
                onClick={onClickUploadButton}
              >
                <IoMdImages size={20} />
              </button>
            </div>
            <button className="actionButton" type="submit" disabled={!content}>
              글쓰기
            </button>
          </div>
        </div>
      </div>
    </StyledPostForm>
  );
}
