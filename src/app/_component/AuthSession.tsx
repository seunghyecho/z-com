"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface AuthSessionProps {
  children: ReactNode;
}

export default function AuthSession({ children }: AuthSessionProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
