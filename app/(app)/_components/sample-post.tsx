import { Image as ImageIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SamplePostProps {
  content: string;
}

const SamplePost = ({ content }: SamplePostProps) => {
  const [isFolded, setIsFolded] = useState<boolean>(true);

  const colorizeHashtags = (text: string) => {
    // Regular expression to find hashtags (e.g., #example)
    const hashtagRegex = /#(\w+)/g;
    const userInput = /\[[^\]]+\]/g;
    // Replace hashtags with colored spans
    const coloredText = text.replace(
      hashtagRegex,
      '<span class="text-blue-500 hover:underline">$&</span>'
    );

    const finalOutput = coloredText.replace(
      userInput,
      '<span class="text-red-500">$&</span>'
    );

    return finalOutput;
  };

  return (
    <div className="bg-background max-w-sm md:max-w-3xl h-full rounded-xl flex flex-col gap-y-4 text-primary border shadow-2xl shadow-card-foreground/120 p-4 transition-all">
      <div className="flex items-center justify-start">
        <Avatar className="border">
          <AvatarImage src="/images/avatar.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex flex-col ml-2 text-sm track">
          <p className="font-semibold">John Doe</p>
          <p className="text-xs text-slate-500">Born to be a writer.</p>
        </div>
      </div>
      <div className="my-2 flex flex-col gap-y-2">
        <p
          className={cn(
            "whitespace-pre-line px-2",
            isFolded ? "line-clamp-4" : ""
          )}
          // dangerouslySetInnerHTML={{ __html: colorizeHashtags(content) }}
        >
          {content || ""}
        </p>
        <span
          className="text-end text-slate-500 text-sm hover:text-red-500 hover:underline hover:cursor-pointer ml-auto"
          onClick={() => setIsFolded((prev) => !prev)}
        >
          {isFolded ? "...see more" : "see less"}
        </span>
      </div>
      <div className="w-full relative h-96 flex items-center justify-center">
        <div className="w-full h-full bg-red-500 rounded-lg flex items-center justify-between" />
        <ImageIcon className=" absolute w-24 h-24 text-red-600" />
      </div>
      <div className="w-full flex">
        <div className="rounded-md w-full px-4 py-2 flex items-center hover:bg-primary-foreground justify-center font-semibold hover:cursor-pointer">
          Like
        </div>
        <div className="rounded-md w-full px-4 py-2 flex items-center hover:bg-primary-foreground justify-center font-semibold hover:cursor-pointer">
          Comment
        </div>
        <div className="rounded-md w-full px-4 py-2 flex items-center hover:bg-primary-foreground justify-center font-semibold hover:cursor-pointer">
          Repost
        </div>
        <div className="rounded-md w-full px-4 py-2 flex items-center hover:bg-primary-foreground justify-center font-semibold hover:cursor-pointer">
          Send
        </div>
      </div>
    </div>
  );
};

export default SamplePost;
