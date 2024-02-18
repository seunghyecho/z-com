"use client";

import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react"; // client server
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import { StyledLoginModal } from "./LoginModal.style";

export default function LoginModal() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      // 로그인 : client 처리
      const response = await signIn("credentials", {
        username: id,
        password,
        redirect: false, // server redirect 해제
      });

      console.log("login response", response);

      if (!response?.ok) {
        setMessage("아이디와 비밀번호가 일치하지 않습니다.");
      } else {
        router.replace("/home");
      }
    } catch (err) {
      console.error(err);
      setMessage("아이디와 비밀번호가 일치하지 않습니다.");
    }
  };
  const onClickClose = () => {
    router.back();
  };

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };
  return (
    <StyledLoginModal>
      <div className="modalBackground">
        <div className="modal">
          <div className="modalHeader">
            <BackButton />
            <div>Login</div>
          </div>
          <form onSubmit={onSubmit}>
            <div className="modalBody">
              <div className="inputDiv">
                <label htmlFor="id" className="inputLabel">
                  아이디
                </label>
                <input
                  id="id"
                  type="text"
                  className="input"
                  value={id}
                  onChange={onChangeId}
                  placeholder=""
                />
              </div>

              <div className="inputDiv">
                <label htmlFor="password" className="inputLabel">
                  비밀번호
                </label>
                <input
                  id="password"
                  type="password"
                  className="input"
                  value={password}
                  onChange={onChangePassword}
                  placeholder=""
                />
              </div>
              <div className="message">{message}</div>
              <div className="modalFooter">
                <button
                  className="actionButton"
                  disabled={!id && !password}
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </StyledLoginModal>
  );
}
