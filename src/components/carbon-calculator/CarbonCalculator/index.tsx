"use client";

import { Box } from "@chakra-ui/react";

import CalculatorLayout from "@/components/common/CalculatorLayout";
import { AnimatePresence } from "framer-motion";
import CalculatorBtn from "./view/CalculatorBtn";
import useCarbonCalculatorLogic from "./controller/useCarbonCalculatorLogic";
import { useEffect } from "react";

const CarbonCalculator = () => {
  const { step, currentBody, details, isLoading } = useCarbonCalculatorLogic();

  //cleared svg format errors
  useEffect(() => {
    console.clear();
  }, []);

  return (
    <CalculatorLayout step={step} email={details.email}>
      <AnimatePresence initial={false} custom={step}>
        {currentBody()?.body}
      </AnimatePresence>
      <Box
        display={step > 5 ? "none" : "flex"}
        justifyContent={
          currentBody().btn.length == 2 ? "space-between" : "center"
        }
        mt="40px"
      >
        {/* @ts-ignore */}
        {currentBody().btn.map((item) => (
          <CalculatorBtn
            key={item.title}
            text={item.title}
            onClick={item.action}
            isLoading={item.title === "Next" && isLoading}
            isDisabled={
              item.title === "Next" ? currentBody().isDisabled : false
            }
          />
        ))}
      </Box>
    </CalculatorLayout>
  );
};

export default CarbonCalculator;
