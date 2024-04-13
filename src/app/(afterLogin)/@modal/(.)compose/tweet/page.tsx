"use client";

import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useRef,
  useState,
} from "react";
import { StyledTweetModal } from "./tweet.style";
import { IoMdImages } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ReactTextareaAutosize from "react-textarea-autosize";
import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useModalStore } from "@/store/modal";
import { Post } from "@/model/Post";
import Link from "next/link";

export default function TweetModal() {
  const router = useRouter();
  const imageRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState<
    Array<{ dataUrl: string; file: File } | null>
  >([]);
  const queryClient = useQueryClient();

  const { data: me } = useSession();
  const modalStore = useModalStore();
  const parent = modalStore.data;

  // 새글 작성
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
    onSuccess: async (response) => {
      const newPost = await response?.json();
      setContent("");
      setPreview([]);

      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map((cache) => cache.queryKey);
      console.log("queryKeys", queryKeys);

      queryKeys.forEach((queryKey) => {
        if (queryKey[0] === "posts") {
          const value: Post | InfiniteData<Post[]> | undefined =
            queryClient.getQueryData(queryKey);
          if (value && "pages" in value) {
            const obj = value.pages
              .flat()
              .find((v) => v.postId === parent?.postId);
            if (obj) {
              const pageIndex = value.pages.findIndex((page) =>
                page.includes(obj)
              );
              const index = value.pages[pageIndex].findIndex(
                (v) => v.postId === parent?.postId
              );
              const shallow = {
                ...value,
                pages: [...value.pages],
              };
              shallow.pages[0] = [...shallow.pages[0]];
              shallow.pages[0].unshift(newPost); // 새 게시글 추가
              queryClient.setQueryData(queryKey, shallow);
            }
          }
        }
      });
      // 해시태그 다시 불러오기
      await queryClient.invalidateQueries({
        queryKey: ["trends"],
      });
    },
    onError: (error) => {
      console.error(error);
      alert("업로드 중 에러가 발생했어요.");
    },
    onSettled: () => {
      modalStore.reset();
      router.back();
    },
  });

  // 답글 작성
  const comment = useMutation({
    mutationFn: (e: FormEvent) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("content", content);

      preview.forEach((p) => {
        p && formData.append("images", p.file);
      });

      return fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${parent?.postId}/comments`,
        {
          method: "post",
          credentials: "include",
          body: formData,
        }
      );
    },
    onSuccess: async (response) => {
      const newPost = await response?.json();
      setContent("");
      setPreview([]);

      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map((cache) => cache.queryKey);
      console.log("queryKeys", queryKeys);

      queryKeys.forEach((queryKey) => {
        if (queryKey[0] === "posts") {
          const value: Post | InfiniteData<Post[]> | undefined =
            queryClient.getQueryData(queryKey);
          if (value && "pages" in value) {
            const obj = value.pages
              .flat()
              .find((v) => v.postId === parent?.postId);
            if (obj) {
              const pageIndex = value.pages.findIndex((page) =>
                page.includes(obj)
              );
              const index = value.pages[pageIndex].findIndex(
                (v) => v.postId === parent?.postId
              );
              const shallow = {
                ...value,
              };
              value.pages = { ...value.pages };
              value.pages[pageIndex] = [...value.pages[pageIndex]];
              shallow.pages[pageIndex][index] = {
                ...shallow.pages[pageIndex][index],
                Comments: [{ userId: me?.user?.email as string }],
                _count: {
                  ...shallow.pages[pageIndex][index]._count,
                  Comments: shallow.pages[pageIndex][index]._count.Comments + 1,
                },
              };
              shallow.pages[0].unshift(newPost); // 새 답글 추가
              queryClient.setQueryData(queryKey, shallow);
            }
          } else if (value) {
            // if single post
            if (value.postId === parent?.postId) {
              const shallow = {
                ...value,
                Comments: [{ userId: me?.user?.email as string }],
                _count: {
                  ...value._count,
                  Comments: value._count.Comments + 1,
                },
              };
              queryClient.setQueryData(queryKey, shallow);
            }
          }
        }
      });
      // 해시태그 다시 불러오기
      await queryClient.invalidateQueries({
        queryKey: ["trends"],
      });
    },
    onError: (error) => {
      console.error(error);
      alert("업로드 중 에러가 발생했어요.");
    },
    onSettled: () => {
      modalStore.reset();
      router.back();
    },
  });

  const onClickClose = () => {
    modalStore.reset();
    router.back();
  };

  const onChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
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

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    if (modalStore.mode === "new") {
      mutation.mutate(e);
    } else {
      comment.mutate(e);
    }
  };
  return (
    <StyledTweetModal>
      <div className="modalBackground">
        <div className="modal">
          <button className="closeButton" onClick={onClickClose}>
            <AiFillCloseCircle size={20} />
          </button>
          <form action="" className="modalForm" onSubmit={onSubmit}>
            {modalStore.mode === "comment" && parent && (
              <div className="modalOriginal">
                <div className="postUserSection">
                  <div className="postUserImage">
                    <img src={parent.User.image} alt={parent.User.id} />
                  </div>
                </div>
                <div>
                  {parent.content}
                  <div>
                    <Link href={`/${parent.User.id}`}>@{parent.User.id}</Link>{" "}
                    님에게 보내는 답글
                  </div>
                </div>
              </div>
            )}
            <div className="modalBody">
              <div className="postUserSection">
                <div className="postUserImage">
                  <img
                    src={me?.user?.image as string}
                    alt={me?.user?.email as string}
                  />
                </div>
              </div>
              <div className="inputDiv">
                <ReactTextareaAutosize
                  className="input"
                  placeholder={
                    modalStore.mode === "comment"
                      ? "답글 게시하기"
                      : "무슨 일이 일어나고 있나요?"
                  }
                  value={content}
                  onChange={onChangeContent}
                />
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  {preview.map(
                    (p, index) =>
                      p && (
                        <div
                          onClick={(e) => onRemoveFiles(e, index)}
                          key={index}
                        >
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
              </div>
            </div>
            <div className="modalFooter">
              <div className="modalDivider" />
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
                    onClick={onClickUploadButton}
                  >
                    <IoMdImages size={20} />
                  </button>
                </div>
                <button className="actionButton" disabled={!content}>
                  게시하기
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </StyledTweetModal>
  );
}
