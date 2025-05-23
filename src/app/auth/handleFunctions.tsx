"use client";
import { authService } from "@/lib/services/api/auth.api";
import { SubmitHandler } from "react-hook-form";
import { SignDto } from "@/lib/types/auth.type";
import { toast } from "sonner";
import { Check } from "lucide-react";

const handleError = (error: unknown) => {
  const errorMessage =
    error instanceof Error ? error.message : "An unknown error occurred";
  toast("Event has been created", {
    description: errorMessage,
  });
};

export const signUpHandler: SubmitHandler<SignDto> = async (signUpData) => {
  try {
    const { message } = await authService.signUp(signUpData);
    toast("Sign Up", {
      description: (
        <div className="flex items-center">
          <Check className="mr-2 text-[hsl(var(--foreground))]" />
          <span>{message}</span>
        </div>
      ),
    });
  } catch (error: unknown) {
    handleError(error);
  }
};

export const signInHandler: SubmitHandler<SignDto> = async (SignInData) => {
  try {
    const { message } = await authService.signIn(SignInData);
    toast("Sign In", {
      description: (
        <div className="flex items-center">
          <Check className="mr-2 text-[hsl(var(--foreground))]" />
          <span>{message}</span>
        </div>
      ),
    });
  } catch (error: unknown) {
    handleError(error);
  }
};
