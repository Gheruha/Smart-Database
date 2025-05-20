import React from "react";
import { useSignUpForm } from "@/app/auth/validationSchema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useSignUpForm();

  const signUpHandler = () => {
    console.log("Working on it...");
  };

  return (
    <form onSubmit={handleSubmit(signUpHandler)}>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Complete all the fields to create the account.
          </CardDescription>
        </CardHeader>
      </Card>
    </form>
  );
};

export default SignUpForm;
