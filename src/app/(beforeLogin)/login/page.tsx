import { redirect } from "next/navigation";
import { auth } from "@/auth"; // server
import Main from "@/app/(beforeLogin)/_component/Main";

export default async function Login() {
  const session = await auth();

  if (session?.user) {
    redirect("/home");
    return null;
  }

  return <Main />;
}
