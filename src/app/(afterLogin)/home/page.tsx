import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import TabDeciderSuspense from "@/app/(afterLogin)/home/_component/TabDeciderSuspense";
import { auth } from "@/auth";

/**
 * 메인 (홈)
 * page.tsx > loading.tsx
 * Suspense > fallback
 * react-query > isPending
 */

export default async function Home() {
  const session = await auth();
  return (
    <main className="main">
      <TabProvider>
        <Tab />
        <PostForm me={session} />
        <TabDeciderSuspense />
      </TabProvider>
    </main>
  );
}
