"use client";

import { useState } from "react";
import { sendMessageHandler } from "@/app/schoolmate/handleFunctions";
import { ChatDto } from "@/lib/types/chat.type";

interface HistoryItem {
  from: "user" | "bot";
  text: string;
}

export function Chat({ promptKey = "Student" }: { promptKey?: string }) {
  const [msg, setMsg] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(false);

  async function send() {
    const trimmed = msg.trim();
    if (!trimmed) return;

    // 1) Append user message to history
    setHistory((h) => [...h, { from: "user", text: trimmed }]);
    setLoading(true);

    try {
      // 2) Call our handler instead of fetch directly
      const payload: ChatDto = { promptKey, userMessage: trimmed };
      const reply = await sendMessageHandler(payload);

      // 3) Append bot’s reply to history
      setHistory((h) => [...h, { from: "bot", text: reply }]);
      setMsg("");
    } catch {
      // Error was already toasted by handleError inside sendMessageHandler
      // We could optionally append an error message to history here, but
      // since error→toast, we’ll just stop loading and leave it at that.
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col space-y-4 p-4 border rounded">
      <div className="flex-1 overflow-auto space-y-2">
        {history.map((m, i) => (
          <div
            key={i}
            className={m.from === "bot" ? "text-green-700" : "text-blue-700"}
          >
            <strong>{m.from === "bot" ? "Bot:" : "You:"}</strong> {m.text}
          </div>
        ))}
        {loading && <em>Bot is typing…</em>}
      </div>

      <div className="flex">
        <input
          className="flex-1 border rounded p-2"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Type your message…"
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          onClick={send}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
}
