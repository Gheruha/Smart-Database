import Footer from "@/components/footer/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/headers/header";
import { GlowEffect } from "@/components/motion-primitives/glow-effect";

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[12px] row-start-2 sm:items-center">
          <h1 className="text-3xl font-semibold motion-preset-bounce">
            School Manage
          </h1>
          <p>
            A set of features that allow you to see, analyse and manage your
            school data.
          </p>
          <div className="flex space-x-4">
            <Button>
              <Link href="/auth?mode=SignUp">Get started</Link>
            </Button>
            <div className="relative">
              <GlowEffect
                colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
                mode="colorShift"
                blur="soft"
                duration={3}
                scale={0.9}
              />
              <button className="relative inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-md bg-background text-black dark:bg-zinc-950 dark:text-zinc-50 outline outline-1 outline-[#fff2f21f]">
                <Link href="/">SchoolMate AI</Link>
              </button>
            </div>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <Footer />
        </footer>
      </div>
    </>
  );
}
