"use client";

import { useState, useEffect, useRef } from "react";
import { sendMessageHandler } from "@/app/schoolmate/handleFunctions";
import { ChatDto } from "@/lib/types/chat.type";
import { HistoryItemDto } from "@/lib/types/history.type";
import { Button } from "../ui/button";
import { SendHorizonal } from "lucide-react";
import { TextLoop } from "../motion-primitives/text-loop";

export function Chat({ promptKey = "Student" }: { promptKey?: string }) {
  const [msg, setMsg] = useState("");
  const [history, setHistory] = useState<HistoryItemDto[]>([]);
  const [loading, setLoading] = useState(false);

  // 1) Create a ref for the scrollable container
  const containerRef = useRef<HTMLDivElement>(null);

  async function send() {
    const trimmed = msg.trim();
    if (!trimmed) return;

    // Append user message to history
    setHistory((h) => [...h, { from: "user", text: trimmed }]);
    setLoading(true);

    try {
      // Reset the input immediately so the user can type again
      setMsg("");

      // Call handler
      const payload: ChatDto = { promptKey, userMessage: trimmed };
      const reply = await sendMessageHandler(payload);

      // Append bot’s reply to history
      setHistory((h) => [...h, { from: "bot", text: reply }]);
    } catch {
      // Error was already toasted by handleError inside sendMessageHandler
    } finally {
      setLoading(false);
    }
  }

  // 2) Whenever `history` or `loading` changes, scroll to bottom
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollTop = container.scrollHeight;
  }, [history, loading]);

  return (
    <div className="flex flex-col p-4 items-center w-full h-[75vh] lg:h-[80vh]">
      {/* 3) Attach the ref to the scrollable area */}
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

        {/* 4) Loading indicator also counts as “new content” */}
        {loading && (
          <TextLoop className="font-mono text-sm">
            <span>Thinking</span>
            <span>Generating a response</span>
          </TextLoop>
        )}
      </div>

      <div
        className="
          fixed flex justify-between  
          border lg:rounded-lg 
          focus-within:border w-full bottom-0 p-4 pb-20 rounded-xl 
          lg:w-2/4 lg:bottom-10 lg:p-4 bg-secondary
        "
      >
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
