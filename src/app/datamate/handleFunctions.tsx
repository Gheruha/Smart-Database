// app/schoolmate/handleFunctions.tsx
'use client';

import { useCallback, useRef } from 'react';
import { useChatStore } from '@/lib/store/chat.store';
import { HistoryItemDto } from '@/lib/types/history.type';
import { chatService } from '@/lib/services/api/chat.api';
import { ChatDto } from '@/lib/types/chat.type';
import { toast } from 'sonner';

// Error -> toast
const handleError = (error: unknown) => {
  const msg = error instanceof Error ? error.message : 'Unknown error';
  toast.error(msg);
};

// Send user→chat endpoint, return reply
export const sendMessageHandler = async (data: ChatDto): Promise<string> => {
  try {
    const { reply } = await chatService.sendMessage(data);
    return reply;
  } catch (e) {
    handleError(e);
    throw e;
  }
};

// Hook to initialize a conversation
export function useInitConversation() {
  const setConversationId = useChatStore(s => s.setConversationId);
  const clearHistory = useChatStore(s => s.clearHistory);
  const addUserMessage = useChatStore(s => s.addUserMessage);
  const addBotMessage = useChatStore(s => s.addBotMessage);

  // this ref will survive across remounts in dev StrictMode
  const hasFetchedRef = useRef(false);

  const init = useCallback(
    async (id: string) => {
      if (!id) return;

      // only once per conversation
      if (hasFetchedRef.current) return;
      hasFetchedRef.current = true;

      // if it’s a brand new conversation, clear old messages
      clearHistory();
      setConversationId(id);

      try {
        // fetch history exactly once
        const serverHistory: HistoryItemDto[] =
          await chatService.getMessages(id);
        serverHistory.forEach(m =>
          m.from === 'user' ? addUserMessage(m.text) : addBotMessage(m.text),
        );
      } catch (e) {
        const msg = e instanceof Error ? e.message : 'Unknown error';
        toast.error(msg);
      }
    },
    [clearHistory, setConversationId, addUserMessage, addBotMessage],
  );

  return { init };
}
