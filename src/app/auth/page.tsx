"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import SignInForm from "@/components/auth/sign-in-form";
import SignUpForm from "@/components/auth/sign-up-form";

const AuthPage = () => {
  const searchParams = useSearchParams();
  const authModeParam = searchParams.get("mode")?.toLowerCase();
  const authMode =
    authModeParam === "signup" || authModeParam === "signin"
      ? authModeParam
      : "signin";

  const authForms = {
    signup: <SignUpForm />,
    signin: <SignInForm />,
  } as const;

  return <div>{authForms[authMode]}</div>;
};

export default AuthPage;
