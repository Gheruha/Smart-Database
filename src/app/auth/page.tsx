"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import SignForm from "@/components/auth/sign-form";

const AuthPage = () => {
  const searchParams = useSearchParams();
  const authModeParam = searchParams.get("mode")?.toLowerCase();
  const authMode =
    authModeParam === "signup" || authModeParam === "signin"
      ? authModeParam
      : "signin";

  console.log(authMode)
  return <SignForm mode={authMode} />;
};

export default AuthPage;
