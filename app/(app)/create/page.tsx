"use client";

import { AnimatePresence } from "framer-motion";

import { useStore } from "@/store/store";

import Step1 from "../_components/steps/step-1";
import Step2 from "../_components/steps/step-2";
import Step3 from "../_components/steps/step-3";

const CreatePage = () => {
  const { step } = useStore();
  return (
    <section className="container items-center pt-6 pb-8 grid gap-6 mt-5">
      <div className="h-full w-full">
        <AnimatePresence key="main">
          {step === 0 && <Step1 key="step-1 component" />}
          {step === 1 && <Step2 key="step-2 component" />}
          {step === 2 && <Step3 key="step-3 component" />}
        </AnimatePresence>
      </div>
    </section>
  );
};
export default CreatePage;
