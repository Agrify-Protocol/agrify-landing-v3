"use client";

import { Box } from "@chakra-ui/react";

import CalculatorLayout from "@/components/common/CalculatorLayout";
import { AnimatePresence } from "framer-motion";
import CalculatorBtn from "./view/CalculatorBtn";
import useCarbonCalculatorLogic from "./controller/useCarbonCalculatorLogic";

const CarbonCalculator = () => {
  const { step, currentBody } = useCarbonCalculatorLogic();
  return (
    <CalculatorLayout step={step}>
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
        {currentBody().btn.map((item) => (
          <CalculatorBtn
            key={item.title}
            text={item.title}
            onClick={item.action}
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
