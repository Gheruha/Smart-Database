"use client";

import Link from "next/link";
import { ThemeToggle } from "../theme/theme.toggler";
import { DatabaseZap } from "lucide-react";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between px-4 py-2 border-b border-border">
      <div className="">
        <Link href="/">
          <DatabaseZap />
        </Link>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </header>
  );
}
