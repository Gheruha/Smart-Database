import { NextResponse, NextRequest } from "next/server";
import { ChatDto } from "@/lib/types/chat.type";
import { generateChatBotReply } from "@/lib/utils/chat/chat.utils";
export async function POST(req: NextRequest) {
  try {
    // Taking the key(type of bot) and user message
    const { promptKey, userMessage } = (await req.json()) as ChatDto;

    // Make sure userMessage is non-empty and not absurdly long:
    if (typeof userMessage !== "string" || userMessage.trim().length === 0) {
      return NextResponse.json(
        { message: "Your message cannot be empty" },
        { status: 400 }
      );
    }
    if (userMessage.length > 2000) {
      return NextResponse.json(
        { message: "Your message is too long" },
        { status: 400 }
      );
    }

    // Calling the function that deals with the api and receiving the bot reply
    const reply = await generateChatBotReply({ promptKey, userMessage });
    return NextResponse.json({
      reply,
    });

    // Catch any error
  } catch (error: unknown) {
    console.error("Chat error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
