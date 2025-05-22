import { SignUpDto } from "@/lib/types/auth.type";
import { Session } from "@supabase/supabase-js";
import { createSupabaseClientApi } from "../../supabase/client";
import { mapUserData } from "../../../../store/user.mapper";

// Takes the authorization code and exchanges it for a session
export const authWithCode = async (code: string): Promise<void> => {
  const supabase = await createSupabaseClientApi();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error("Error exchanging code for session:", error.message);
    throw new Error(error.message || "Failed to exchange code for session");
  }
};

// signUpUser receives data for auth and is doing a session for the user
export const signUpUser = async ({
  email,
  password,
  redirectUrl,
}: SignUpDto): Promise<Session | null> => {
  const supabase = await createSupabaseClientApi();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: redirectUrl,
    },
  });

  if (error) {
    console.error("Error signin up", error.message);
    throw new Error(error.message || "Failed to sign up");
  }

  if (!data.user) {
    throw new Error("User data is missing after sign-up");
  }
  await mapUserData(data.user);

  return data.session;
};

export function isSignUpDtoValid(body: unknown): body is SignUpDto {
  if (typeof body !== "object" || body === null) return false;
  const { email, password } = body as Record<string, unknown>;
  return typeof email === "string" && typeof password === "string";
}
