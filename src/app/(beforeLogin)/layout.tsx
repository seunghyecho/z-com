"use client";

import React from "react";

import { StyledBeforeLoginLayout } from "./layout.style";

interface BeforeLoginLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}
export default function BeforeLoginLayout({
  children,
  modal,
}: BeforeLoginLayoutProps) {
  return (
    <StyledBeforeLoginLayout className="container">
      {children}
      {modal}
    </StyledBeforeLoginLayout>
  );
}
