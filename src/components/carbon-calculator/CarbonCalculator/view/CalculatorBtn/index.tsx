"use client";

import { Box, BoxProps } from "@chakra-ui/react";
import Arrow from "../../../../../../public/icons/Arrow";
import SpiralLoader from "@/components/common/CustomLoader/SpiralLoader";
import { FormEvent } from "react";

interface CalculatorBtnProp extends BoxProps {
  text: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  type: string;
  onClick: (e?: any) => void;
}

const CalculatorBtn = ({
  text,
  onClick,
  isLoading,
  isDisabled,
  type,
  ...rest
}: CalculatorBtnProp) => {

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    !(isDisabled || isLoading) ? onClick() : null;
  };

  return (
    <Box
      as="button"
      type={type}
      name={text}
      onSubmit={(e) => handleSubmit(e)}
      rounded="32px"
      cursor={isDisabled || isLoading ? "not-allowed" : "pointer"}
      bgColor={isDisabled || text === "Back" ? "#EEEEEE" : "brand.green"}
      color={isDisabled || text === "Back" ? "black" : "white"}
      fontSize="14px"
      padding="6px 12px"
      transition="all 0.3s ease-in-out"
      display="flex"
      flexDir={text === "Back" ? "row-reverse" : "row"}
      gap="12px"
      _hover={
        isDisabled
          ? ""
          : text === "Back"
          ? { bgColor: "#d9d9d9" }
          : { bgColor: "#0A9B3C" }
      }
      onClick={(e) => handleSubmit(e)}
      {...rest}
    >
      {isLoading ? (
        <SpiralLoader />
      ) : (
        <>
          {text}
          <Arrow
            color={
              isDisabled ? "#EEEEEE" : text === "Back" ? "#A6A6A6" : "#0CC14C"
            }
            style={{ rotate: text === "Back" ? "180deg" : "" }}
          />
        </>
      )}
    </Box>
  );
};

export default CalculatorBtn;
