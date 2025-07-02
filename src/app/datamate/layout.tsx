'use client';
import { WorkspaceHeader } from '@/components/headers/workspaceHeader';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar/app-sidebar';

interface DataMateLayoutProps {
  children: React.ReactNode;
}

export default function DataMateLayout({ children }: DataMateLayoutProps) {
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
