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
        <Link href="/i/flow/login" className="login">
          Login
        </Link>
      </div>
    </>
  );
}
