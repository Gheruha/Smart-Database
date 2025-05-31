import { ChatDto } from "@/lib/types/chat.type";
import { createSupabaseClientApi } from "@/lib/supabase/client";
export const generateChatBotReply = async ({
  promptKey,
  userMessage,
}: ChatDto): Promise<string> => {
  // Getting the bot type, and the base prompt from db
  const supabase = await createSupabaseClientApi();
  const { data, error } = await supabase.rpc("get_prompt", {
    p_key: promptKey,
  });

  if (error || !data) {
    console.error("Error or no data:", error);
  }

  // Call openai api for a reply
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
    throw new Error(errorMessage.message || "Failed to give reply");
  }

  // Returning the reply to the server
  const { choices } = await res.json();
  const reply = choices[0].message.content;

  return reply;
};
