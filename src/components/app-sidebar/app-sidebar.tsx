import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function AppSidebar() {
  const router = useRouter();
  const handleGoBack = () => {
    router.push("/");
  };
  return (
    <Sidebar >
      <SidebarHeader className="items-start">
        <Button onClick={handleGoBack} variant="link" className="flex gap-1">
          <ArrowLeft size={15} />
          <p>Back</p>
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
