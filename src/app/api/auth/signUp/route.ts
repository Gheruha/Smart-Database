import { NextRequest, NextResponse } from "next/server";
import { signUpUser } from "@/lib/utils/auth/auth.utils";
import { SignUpDto } from "@/lib/types/auth.type";
import { isSignUpDtoValid } from "@/lib/utils/auth/auth.utils";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const url = new URL(req.url);
    const body: unknown = await req.json();

    if (!isSignUpDtoValid(body)) {
      return NextResponse.json(
        { message: "Invalid request body." },
        { status: 400 }
      );
    }

    const { email, password }: SignUpDto = body;

    // I also need to check if user exists.

    // Sign up the user
    const userSession = await signUpUser({
      email,
      password,
      redirectUrl: `${url.origin}/api/auth/callback`,
    });

    return NextResponse.json({
      message:
        "Sign-up successful! Please check your email to verify your account.",
      session: userSession,
    });
  } catch (error: unknown) {
    console.error("Sign-up error", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
