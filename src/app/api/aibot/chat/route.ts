import { NextResponse, NextRequest } from "next/server";
import { createSupabaseClientApi } from "@/lib/supabase/client";

interface ChatRequest {
  promptKey: string;
  userMessage: string;
}

export async function POST(req: NextRequest) {
  try {
    const { promptKey, userMessage } = (await req.json()) as ChatRequest;

    // Fetch the base system prompt
    const supabase = await createSupabaseClientApi();
    const { data, error } = await supabase.rpc("get_prompt", {
      p_key: promptKey,
    });
    console.log("Refresh");

    if (error || !data) {
      return NextResponse.json(
        { error: "Prompt not found or not allowed" },
        { status: 404 }
      );
    }

    // Call openai
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",

      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages: [
          { role: "system", content: data },
          { role: "user", content: userMessage },
        ],
        temperature: 0.7,
      }),
    });

    if (!res.ok) {
      const errorMessage = await res.json();
      return NextResponse.json({ message: errorMessage }, { status: 500 });
    }

    const { choices } = await res.json();
    const reply = choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error: unknown) {
    console.error("Chat error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
