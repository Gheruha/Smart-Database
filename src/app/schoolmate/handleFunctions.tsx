"use client";
import { chatService } from "@/lib/services/api/chat.api";
import { ChatDto } from "@/lib/types/chat.type";
import { toast } from "sonner";

const handleError = (error: unknown) => {
  const errorMessage =
    error instanceof Error ? error.message : "An unknown error occurred";
  toast("There is an error", {
    description: errorMessage,
  });
};

export const sendMessageHandler = async (data: ChatDto): Promise<string> => {
  try {
    const { reply } = await chatService.sendMessage(data);
    return reply;
  } catch (e) {
    handleError(e);
    throw e;
  }
};
