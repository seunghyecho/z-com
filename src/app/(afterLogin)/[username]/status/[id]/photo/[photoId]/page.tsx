"use client";

import Home from "@/app/(afterLogin)/home/page";

interface PageProps {
  params: {
    username: string;
    id: string;
    photoId: string;
  };
}
export default function Page({ params }: PageProps) {
  // photo 모달 뒷 배경
  return <Home />;
}
