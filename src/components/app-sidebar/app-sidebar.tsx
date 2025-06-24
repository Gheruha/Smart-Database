// src/components/app-sidebar/app-sidebar.tsx
"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useSidebarData } from "@/app/workspace/handleFunctions";
import { IconResolver } from "../iconResolver/iconResolver";

export function AppSidebar() {
  const groups = useSidebarData();

  return (
    <Sidebar className="mt-12">
      <SidebarHeader />
      <SidebarContent>
        {groups.map((group) => (
          <Collapsible key={group.group_id} className="w-full">
            <CollapsibleTrigger className="collapsible-trigger button-ghost flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <p>{group.group_name}</p>
              </div>
              <IconResolver name={group.icon} size={16} />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent className="motion-preset-fade space-y-2">
                {group.sidebar_items.map((item) => (
                  <Button
                    key={item.item_id}
                    variant="ghost"
                    className="w-full flex justify-start items-center space-x-2"
                  >
                    <IconResolver name={item.item_icon as string} size={16} />
                    <p>{item.item_name}</p>
                  </Button>
                ))}
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
