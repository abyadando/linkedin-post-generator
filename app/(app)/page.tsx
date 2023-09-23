import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl h-full">
      <div className="flex flex-col  h-full  justify-center gap-y-2 p-2 ">
        <div className="relative">
          <div className="hidden md:block absolute -top-5 -left-6 bg-red-500 px-2 py-1 -rotate-12 rounded-lg shadow-2xl shadow-red-800 text-white">
            BETA
          </div>
          {/* <div className="hidden md:block absolute -top-12 -left-8 bg-transparent w-48 h-48 -z-10 rotate-12 rounded-full shadow-2xl shadow-secondary-foreground/10" /> */}
          <h1 className="font-extrabold leading-tight uppercase tracking-tighter text-5xl md:text-5xl lg:text-6xl">
            Generate & <span className="text-red-500">customize </span>your
            Awesome post 🚀
          </h1>
        </div>
        <p className="text-slate-400">
          It&apos;s easy to get started, just start with providing an general
          idea of what you want to write about and we&apos;ll generate a post
          for you. You can then customize it the way you want it to be - change
          the text, add images, change the layout and much more.
        </p>
        <Link href="/sign-up">
          <Button
            variant="outline"
            size="lg"
            className="w-full mt-4 hover:bg-red-500 hover:text-white"
          >
            Get Started
          </Button>
        </Link>
        <p className="text-xs text-muted-foreground max-w-3xl mt-2 mx-auto w-full text-center">
          *Our platform is currently in its beta phase, and we greatly value
          your input. If you happen to come across any glitches or have
          suggestions for improvement, we wholeheartedly encourage you to share
          your feedback with us at our{" "}
          <Link href="/contact" className="underline">
            contact
          </Link>{" "}
          page.
        </p>
      </div>
    </div>
  );
}
