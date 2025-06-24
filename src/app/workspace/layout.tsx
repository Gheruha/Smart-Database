"use client";
import { AppSidebar } from "@/components/app-sidebar/app-sidebar";
import { WorkspaceHeader } from "@/components/headers/workspaceHeader";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
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
