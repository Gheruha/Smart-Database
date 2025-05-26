import { WorkspaceHeader } from "@/components/headers/workspaceHeader";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      <WorkspaceHeader />
      {children}
    </div>
  );
}
