'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Chat } from '@/components/chat/chat';
import { useInitConversation } from '@/app/datamate/handleFunctions';

export default function SchoolMate() {
  const pathname = usePathname() || '';
  const conversationId = pathname.split('/').pop()!;
  const { init } = useInitConversation();

  useEffect(() => {
    init(conversationId);
  }, [conversationId, init]);

  return (
    <div>
      <Chat />
    </div>
  );
}
