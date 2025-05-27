"use client";

import Link from "next/link";
import { ThemeToggle } from "../theme/theme.toggler";
import { DatabaseZap } from "lucide-react";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="fixed top-0 w-full flex items-center justify-between px-4 py-2 border-b border-border z-50">
      <div>
        <Link href="/">
          <DatabaseZap />
        </Link>
      </div>
      <div className="flex space-x-2">
        <ThemeToggle />
        <Button variant={"outline"}>
          <Link href={"/auth?mode=signIn"}>Sign In</Link>
        </Button>
        <Button>
          <Link href={"/auth?mode=signUp"}>Sign Up</Link>
        </Button>
      </div>
    </header>
  );
}
