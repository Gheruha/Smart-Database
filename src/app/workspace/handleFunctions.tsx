'use client';

import { useEffect, useState } from 'react';
import { sidebarService } from '@/lib/services/api/sidebar.api';
import { SidebarGroup, SidebarItemDto } from '@/lib/types/sidebar.type';
import { SidebarStructureDto } from '@/lib/types/supabase.type';

// Type-guard to confirm we really have an array of SidebarItemDto
const isSidebarItemArray = (val: unknown): val is SidebarItemDto[] =>
  Array.isArray(val) &&
  val.every(
    (item): item is SidebarItemDto =>
      typeof (item as SidebarItemDto).item_id === 'string' &&
      typeof (item as SidebarItemDto).item_name === 'string' &&
      typeof (item as SidebarItemDto).item_icon === 'string' &&
      typeof (item as SidebarItemDto).position === 'number',
  );

export function useSidebarData() {
  const [groups, setGroups] = useState<SidebarGroup[]>([]);

  useEffect(() => {
    (async () => {
      try {
        // 1) Service now returns SidebarStructureDto[]
        const data: SidebarStructureDto[] =
          await sidebarService.getDefaultOptions();

        // 2) Map into your local SidebarGroup type, narrowing sidebar_items
        const mapped: SidebarGroup[] = data.map(g => ({
          group_id: g.group_id,
          group_name: g.group_name,
          icon: g.icon,
          open_icon: g.open_icon,
          position: g.position,
          sidebar_items: isSidebarItemArray(g.sidebar_items)
            ? g.sidebar_items
            : [],
        }));

        setGroups(mapped);
      } catch (e) {
        console.error('Failed to load sidebar:', e);
      }
    })();
  }, []);

  return groups;
}
