// // app/chat/[conversationId]/page.tsx
// "use client";

// import { useRouter, useSearchParams, usePathname } from "next/navigation";
// import { useEffect } from "react";
// import { supabase } from "@/lib/supabase/client";
// import { useChatStore } from "@/lib/store/chat.store";
// import { Chat } from "@/components/chat/Chat"; // your Chat component
// import { HistoryItemDto } from "@/lib/types/history.type";

// // This page component will:
// // 1) Read the conversationId from the URL params
// // 2) If that conversationId doesn't exist on the server, create it
// // 3) If the conversationId exists but Zustand has no history, fetch from /api/aibot/history
// // 4) Render <Chat promptKey="Student" /> (or whatever key you need), passing conversationId down via Zustand

// export default function ChatPage() {
//   // 1) Grab conversationId from the dynamic route:
//   const pathname = usePathname(); // e.g. "/chat/abc123"
//   // Next.js provides the param as the last segment of the path:
//   const segments = pathname.split("/");
//   const conversationId = segments[segments.length - 1];

//   const {
//     setConversationId,
//     history,
//     clearHistory,
//   } = useChatStore((s) => ({
//     setConversationId: s.setConversationId,
//     history: s.history,
//     clearHistory: s.clearHistory,
//   }));

//   // 2) On mount, ensure the conversation exists and hydrate history if needed
//   useEffect(() => {
//     async function init() {
//       if (!conversationId) return;

//       // If for some reason Zustand already has a different conversationId cached,
//       // you might want to clear out old history first:
//       if (useChatStore.getState().conversationId !== conversationId) {
//         clearHistory();
//       }

//       setConversationId(conversationId);

//       // If we already have messages in Zustand/localStorage, skip fetching:
//       if (history.length > 0) {
//         return;
//       }

//       // Otherwise, call our GET /api/aibot/history endpoint to fetch existing messages
//       const res = await fetch(`/api/aibot/history?conversationId=${conversationId}`);
//       if (!res.ok) {
//         console.error("Failed to fetch history:", await res.text());
//         return;
//       }
//       const { history: serverHistory } = (await res.json()) as {
//         history: HistoryItemDto[];
//       };

//       // Hydrate Zustand with those server‐side messages
//       serverHistory.forEach((m) => {
//         if (m.from === "user") {
//           useChatStore.getState().addUserMessage(m.text);
//         } else {
//           useChatStore.getState().addBotMessage(m.text);
//         }
//       });
//     }

//     init();
//   }, [conversationId, history.length, setConversationId, clearHistory]);

//   return (
//     <div className="h-full w-full flex justify-center items-start">
//       <div className="w-full lg:w-2/4">
//         <Chat promptKey="Student" />
//       </div>
//     </div>
//   );
// }
