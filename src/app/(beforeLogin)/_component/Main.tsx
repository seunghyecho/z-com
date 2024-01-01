import Image from "next/image";
import Link from "next/link";
export default function Main() {
  return (
    <>
      <div className="left">
        {/* 
          <Image src={""} alt="logo" /> 
        */}
      </div>
      <div className="right">
        <Link href="/i/flow/signup" className="signup">
          Create Account
        </Link>
        <Link href="/login" className="login">
          Login
        </Link>
      </div>
    </>
  );
}
