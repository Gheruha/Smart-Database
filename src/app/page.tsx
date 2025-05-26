import Footer from "@/components/footer/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/headers/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[12px] row-start-2 sm:items-center">
          <h1 className="text-3xl font-semibold">School Manage</h1>
          <p>
            A set of features that allow you to see, analyse and manage your
            school data.
          </p>
          <div className="flex space-x-2">
            <Button>
              <Link href="/auth?mode=SignUp">Get started</Link>
            </Button>
            <Button variant={"outline"}>
              <Link href="/">Read more</Link>
            </Button>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <Footer />
        </footer>
      </div>
    </>
  );
}
