import Footer from '@/components/footer/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Header } from '@/components/headers/header';
import { GlowEffect } from '@/components/motion-primitives/glow-effect';
import { TextEffect } from '@/components/motion-primitives/text-effect';

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[12px] row-start-2 sm:items-center">
          <h1 className="text-3xl font-semibold motion-preset-focus motion-duration-1000">
            Smart Database
          </h1>
          <div className="flex flex-col space-y-0">
            <TextEffect
              per="char"
              delay={0.5}
              variants={{
                container: {
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.02,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    rotateX: 90,
                    y: 10,
                  },
                  visible: {
                    opacity: 1,
                    rotateX: 0,
                    y: 0,
                    transition: {
                      duration: 0.2,
                    },
                  },
                },
              }}
            >
              Your Supabase toolkit for faster, more reliable database
              maintenance.
            </TextEffect>
          </div>
          <div className="flex space-x-4 motion-preset-slide-up ">
            <Link href="/auth?mode=SignUp">
              <Button className="">Get started</Button>
            </Link>
            <div className="relative">
              <GlowEffect
                colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
                mode="colorShift"
                blur="soft"
                duration={3}
                scale={1}
              />
              <button className="relative inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-md bg-background text-black dark:bg-zinc-950 dark:text-zinc-50 outline outline-1 outline-[#fff2f21f]">
                <Link href="/datamate/cf774d89-8bb5-48e7-b48c-5f3c623954e8">
                  DataMate AI
                </Link>
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
