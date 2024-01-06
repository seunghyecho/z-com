import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default async function Page() {
  const session = await auth();
  if (session?.user) {
    redirect("/home");
  }
  return <Main />;
}
