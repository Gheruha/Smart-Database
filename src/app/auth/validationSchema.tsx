"use client";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpDto } from "@/types/auth.type";
import { z } from "zod";

// Base schemas
const emailSchema = z.string().email("Invalid email format.");
const passwordSchema = z
  .string()
  .regex(/^(?=.*[A-Z])(?!^[A-Za-z]+$)(?!^[0-9]+$).+$/)
  .min(8, "Password must be at least 8 characters");

// Auth schemas
export const signUpSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

// Sign up form hook
export function useSignUpForm(): UseFormReturn<SignUpDto> {
  return useForm<SignUpDto>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { email: "", password: "" },
  });
}
