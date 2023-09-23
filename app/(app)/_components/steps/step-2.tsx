"use client";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useStore } from "@/store/store";
import { useState } from "react";
import { Settings } from "lucide-react";
import { customizeConfig } from "@/config/customize";

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

const Step2 = () => {
  const { step, generatePostHandler } = useStore();
  const [selected, setSelected] = useState<number>(0);

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit={step === 1 ? "initial" : "exit"}
      animate="animate"
      className="w-full h-full"
    >
      <div className="max-w-sm md:max-w-5xl flex flex-col justify-between items-center gap-y-4 p-6 bg-background border rounded-lg">
        <div className="flex items-center gap-x-2">
          {customizeConfig.map(({ description, name }, index) => (
            <Button
              key={name}
              disabled
              variant={selected === index ? "default" : "ghost"}
              onClick={() => setSelected(index)}
            >
              {name}
            </Button>
          ))}
        </div>
        {/* <div className="text-sm text-slate-500">
          {customizeConfig[selected].description}
        </div> */}
        <div className="w-full">
          <Button
            variant="outline"
            className="w-full hover:bg-red-500 hover:text-white"
            onClick={() => {
              generatePostHandler();
            }}
          >
            Generate
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Step2;
