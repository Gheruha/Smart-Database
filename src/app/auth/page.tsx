"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import SignForm from "@/components/auth/sign-form";
import { useAuthHandlers } from "./handleFunctions";

const AuthPage = () => {
  const { signUpHandler, signInHandler } = useAuthHandlers();
  const searchParams = useSearchParams();
  const authModeParam = searchParams.get("mode")?.toLowerCase();
  const authMode =
    authModeParam === "signup" || authModeParam === "signin"
      ? authModeParam
      : "signin";

  console.log(authMode);
  return (
    <SignForm
      mode={authMode}
      onSubmit={authMode === "signup" ? signUpHandler : signInHandler}
    />
  );
};

export default AuthPage;
