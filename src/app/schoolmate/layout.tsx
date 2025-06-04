"use client";
import { WorkspaceHeader } from "@/components/headers/workspaceHeader";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar/app-sidebar";

interface SchoolMateLayoutProps {
  children: React.ReactNode;
}

export default function SchoolMateLayout({ children }: SchoolMateLayoutProps) {
  return (
    <SidebarProvider>
      <WorkspaceHeader />
      <AppSidebar />
      <main className="w-full h-[100vh]">
        <SidebarTrigger className="mt-14" />
        {children}
      </main>
    </SidebarProvider>
  );
}
