import { createSupabaseClientApi } from "@/lib/supabase/client";

export async function getChatConversationById(p_conversation_id: string) {
  const supabase = await createSupabaseClientApi();

  // Fetch messages ordered by created_at ascending
  const { data, error } = await supabase.rpc("get_conversation_by_id", {
    p_conversation_id,
  });

  if (error) console.error(error);
  else console.log(data);
}
