"use client";

import { useState, useEffect, useRef } from "react";
import { sendMessageHandler } from "@/app/schoolmate/handleFunctions";
import { ChatDto } from "@/lib/types/chat.type";
import { Button } from "../ui/button";
import { SendHorizonal } from "lucide-react";
import { TextLoop } from "../motion-primitives/text-loop";
import { useChatStore } from "@/lib/store/chat.store";

export function Chat({ promptKey = "Student" }: { promptKey?: string }) {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useChatStore((s) => s.history);
  const conversationId = useChatStore((s) => s.conversationId);
  const addUserMessage = useChatStore((s) => s.addUserMessage);
  const addBotMessage = useChatStore((s) => s.addBotMessage);
  const containerRef = useRef<HTMLDivElement>(null);

  async function send() {
    const trimmed = msg.trim();
    if (!trimmed || !conversationId) return;

    // push to the store
    addUserMessage(trimmed);
    setMsg("");
    setLoading(true);

    try {
      const payload: ChatDto = {
        promptKey,
        userMessage: trimmed,
        conversationId,
      };
      const reply = await sendMessageHandler(payload);
      addBotMessage(reply);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const c = containerRef.current;
    if (c) c.scrollTo({ top: c.scrollHeight, behavior: "smooth" });
  }, [history, loading]);

  return (
    <div className="flex flex-col p-4 items-center w-full h-[70vh] lg:h-[80vh]">
      <div
        ref={containerRef}
        className="flex-1 overflow-auto space-y-8 w-full lg:w-2/4"
      >
        {history.map((m, i) => (
          <div
            key={i}
            className={`flex ${
              m.from === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`
                ${
                  m.from === "bot"
                    ? "motion-preset-fade"
                    : "bg-secondary motion-preset-fade"
                }
                px-3 py-2 rounded-lg max-w-[100%]
              `}
            >
              {m.text}
            </div>
          </div>
        ))}

        {loading && (
          <TextLoop className="font-mono text-sm">
            <span>Thinking</span>
            <span>Generating a response</span>
          </TextLoop>
        )}
      </div>

      <div className="fixed flex justify-between border lg:rounded-lg w-full bottom-0 p-4 pb-20 rounded-xl lg:w-2/4 lg:bottom-10 lg:p-4 bg-secondary">
        <input
          className="flex-1 focus:outline-none"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask anything"
        />
        <Button className="rounded-full" onClick={send} disabled={loading}>
          <SendHorizonal />
        </Button>
      </div>
    </div>
  );
}
