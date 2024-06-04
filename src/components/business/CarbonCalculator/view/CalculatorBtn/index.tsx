"use client";

import CustomerLoader from "@/components/common/CustomLoader";
import { Box, BoxProps } from "@chakra-ui/react";
import activeArrow from "../../../../../../public/icons/active-arrow.svg";
import inactiveArrow from "../../../../../../public/icons/inactive-arrow.svg";
import Image from "next/image";

interface CalculatorBtnProp extends BoxProps {
  text: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick: (e?: any) => void;
}

const CalculatorBtn = ({
  text,
  onClick,
  isLoading,
  isDisabled,
  ...rest
}: CalculatorBtnProp) => {
  return (
    <Box
      as="button"
      name={text}
      rounded="32px"
      cursor={isDisabled || isLoading ? "not-allowed" : "pointer"}
      bgColor={isDisabled ? "#EEEEEE" : "brand.green"}
      color={isDisabled ? "black" : "white"}
      fontSize="14px"
      padding="6px 12px"
      transition="all 0.3s ease-in-out"
      display="flex"
      gap="12px"
      _hover={isDisabled ? "" : { bg: "#0A9B3C" }}
      onClick={isDisabled || isLoading ? (e) => e.preventDefault() : onClick}
      {...rest}
    >
      {isLoading ? <CustomerLoader /> : text}
      <Image
        src={isDisabled ? inactiveArrow : activeArrow}
        alt="arrow icon"
        style={{ rotate: text === "Back" ? "180deg" : "" }}
      />
    </Box>
  );
};

export default CalculatorBtn;
