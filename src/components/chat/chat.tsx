"use client";
import { useState } from "react";

export function Chat({ promptKey = "Student" }: { promptKey?: string }) {
  const [msg, setMsg] = useState("");
  const [history, setHistory] = useState<
    { from: "user" | "bot"; text: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!msg.trim()) return;
    setHistory((h) => [...h, { from: "user", text: msg }]);
    setLoading(true);
    console.log(promptKey);
    const res = await fetch("/api/aibot/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ promptKey, userMessage: msg }),
    });

    const { reply } = await res.json();
    setHistory((h) => [...h, { from: "bot", text: reply }]);
    setMsg("");
    setLoading(false);
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
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={send}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
}
