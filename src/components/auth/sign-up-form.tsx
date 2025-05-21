import React from "react";
import { useSignUpForm } from "@/app/auth/validationSchema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
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
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-4 items-start">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  {...register("email")}
                  type="text"
                  placeholder="example@yourmail.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  {...register("password")}
                  type="text"
                  placeholder="At least 8 characters & one capital letter"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full cursor-pointer">
                Create an account
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default SignUpForm;
