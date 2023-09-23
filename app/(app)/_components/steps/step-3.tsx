"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useStore } from "@/store/store";
import Spinner from "@/components/ui/spinner";
import SamplePost from "../sample-post";
import { Button } from "@/components/ui/button";

const containerVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  exit: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Step3 = () => {
  const { decreaseStep, step, handling, handlingMessage, post, resetStep } =
    useStore();

  const startFromScratch = () => {
    resetStep();
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit={step === 2 ? "initial" : "exit"}
      animate="animate"
      className="flex items-center justify-center w-full h-full"
    >
      <AnimatePresence key="step-1">
        {handling ? (
          <motion.div
            variants={containerVariants}
            initial="initial"
            exit="exit"
            animate={handling ? "animate" : "initial"}
            className="flex items-center justify-center w-full h-[80vh]"
          >
            <div className="flex  flex-col items-center gap-4">
              <Spinner />
              <div className="text-xs text-neutral-700">{handlingMessage}</div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="initial"
            exit="exit"
            animate={!handling ? "animate" : "initial"}
            className="max-w-sm relative md:max-w-2xl flex flex-col gap-y-6"
          >
            <div className="flex flex-col flex-1 gap-2">
              <h2 className="font-extrabold leading-10 tracking-tighter text-5xl">
                Generating post from your idea.
              </h2>
              {/* <p className="text-muted-foreground">
                This might take a few seconds. In the meantime, you can check
                out the sample post below.
              </p> */}
            </div>
            <div className="relative">
              <SamplePost content={post} />
            </div>

            <Button
              onClick={() => startFromScratch()}
              variant="outline"
              className="w-full"
            >
              Start over
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Step3;
