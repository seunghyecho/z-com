"use client";

import { useFormState, useFormStatus } from "react-dom";
import BackButton from "@/app/(beforeLogin)/_component/BackButton";

import { StyledSignupModal } from "./SignupModal.style";
import onSubmit from "../_lib/signup";

function showMessage(message: string | undefined) {
  if (message === "no_id") {
    return "No Id";
  }
  if (message === "no_name") {
    return "No Name";
  }
  if (message === "no_password") {
    return "No Password";
  }
  if (message === "no_image") {
    return "No Image";
  }
  if (message === "user_exists") {
    return "Already exists";
  }

  return "";
}
export default function SignupModal() {
  const [state, formAction] = useFormState(onSubmit, { message: "" });
  const { pending } = useFormStatus();

  console.log("SignupModal state", state);

  return (
    <div id="signupModal">
      <div className="modalBackground">
        <div className="modal">
          <div className="modalHeader">
            <BackButton />
            <div>Create New Account.</div>
          </div>
          {/* 회원가입 : server 처리 */}
          <form action={formAction}>
            <div className="modalBody">
              <div className="inputDiv">
                <label htmlFor="id" className="inputLabel">
                  아이디
                </label>
                <input
                  id="id"
                  name="id"
                  type="text"
                  className="input"
                  placeholder="Your Id"
                  required
                />
              </div>

              <div className="inputDiv">
                <label htmlFor="name" className="inputLabel">
                  닉네임
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Your NickName"
                  required
                />
              </div>

              <div className="inputDiv">
                <label htmlFor="password" className="inputLabel">
                  비밀번호
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Your Password"
                  required
                />
              </div>

              <div className="inputDiv">
                <label htmlFor="image" className="inputLabel">
                  이미지
                </label>
                <input
                  id="image"
                  name="image"
                  type="file"
                  className="input"
                  accept="image/*"
                  required
                />
              </div>
            </div>

            <div className="modalFooter">
              <button className="actionButton" type="submit" disabled={pending}>
                signup
              </button>
              <div className="error">{showMessage(state?.message || "")}</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
