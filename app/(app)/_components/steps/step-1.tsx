"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "@/store/store";

const containerVariants = {
  initial: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 30,
  },
};

const Step1 = () => {
  const { step, increaseStep, inputValue, setInputValue } = useStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.length > 10) {
      inputRef.current?.blur();
      increaseStep();
    }
    // await generateOutlineHandler();
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit={step === 0 ? "initial" : "exit"}
      className="flex flex-col justify-center w-full h-[80vh]"
    >
      <div>
        {/* Content Container */}
        <div className="flex flex-col flex-1 gap-2">
          <h1 className="font-extrabold leading-10  tracking-tighter text-5xl md:text-5xl lg:text-6xl">
            Create new post with AI
          </h1>
          <p className="max-w-[700px] text-muted-foreground">
            Create a post with AI. Just start with providing an general idea of
            what you want to write about and we&apos;ll generate a post for you.
            You can then customize it the way you want it in later steps.
          </p>
        </div>
        {/* Input */}
        <form onSubmit={handleForm} className="w-full mt-4 space-y-6">
          <Input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            className="w-full text-base"
            placeholder="e.g. How to increase your productivity by 10x"
            ref={inputRef}
          />
          <div className="flex gap-x-2 w-full">
            <Button
              type="submit"
              className="w-full hover:bg-red-500 hover:text-white"
              variant="outline"
            >
              Create Post
            </Button>
            {/* <Button type="button" className="w-1/3 bg-violet-700 text-white">
              Customize
            </Button> */}
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Step1;
