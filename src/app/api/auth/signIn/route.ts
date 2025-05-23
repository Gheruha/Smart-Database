import { NextRequest, NextResponse } from "next/server";
import { SignDto } from "@/lib/types/auth.type";
import { isSignDtoValid, signInUser } from "@/lib/utils/auth/auth.utils";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: unknown = await req.json();

    if (!isSignDtoValid(body)) {
      return NextResponse.json(
        { message: "Invalid request body." },
        { status: 400 }
      );
    }

    const { email, password }: SignDto = body;

    const userSession = await signInUser({ email, password });
    return NextResponse.json({
      message: "Sign in successful!",
      session: userSession,
      redirect: "/workspace",
    });
  } catch (error: unknown) {
    console.error("Sign-in error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
