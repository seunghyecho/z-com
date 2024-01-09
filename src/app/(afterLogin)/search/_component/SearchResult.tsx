"use client";

import { useQuery } from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/Post";
import { getSearchResult } from "@/app/(afterLogin)/search/_lib/getSearchResult";

interface Props {
  searchParams: { q: string; f?: string; pf?: string };
}
export default function SearchResult({ searchParams }: Props) {
  const { data } = useQuery<
    IPost[],
    Object,
    IPost[],
    [
      _1: string,
      _2: string,
      searchParams: { q: string; f?: string; pf?: string }
    ]
  >({
    queryKey: ["posts", "search", searchParams],
    queryFn: getSearchResult,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  return data?.map((post, index) => <Post key={index} post={post} />);
}
