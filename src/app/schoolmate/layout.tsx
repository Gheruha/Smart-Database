"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { WorkspaceHeader } from "@/components/headers/workspaceHeader";

interface SchoolMateLayoutProps {
  children: React.ReactNode;
}

export default function SchoolMateLayout({ children }: SchoolMateLayoutProps) {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <main className="w-full">
      <WorkspaceHeader />
      <div className="absolute top-16">
        <Button
          onClick={handleGoBack}
          variant="link"
          className="flex items-center gap-1"
        >
          <ArrowLeft size={15} />
          <p>Back</p>
        </Button>
      </div>
      {children}
    </main>
  );
}
