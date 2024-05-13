"use client";

import { Box, BoxProps } from "@chakra-ui/react";

interface CustomButtonProp extends BoxProps {
  text: string;
  variant?: "solid" | "outline";
  onClick: () => void;
}

const CustomButton = ({
  text,
  variant = "outline",
  onClick,
  ...rest
}: CustomButtonProp) => {
  return (
    <Box
      as="button"
      name={text}
      rounded="32px"
      bgColor={variant === "solid" ? "brand.green" : "transparent"}
      border={variant === "solid" ? "1px solid transparent" : "1px solid black"}
      color={variant === "solid" ? "white" : "black"}
      fontSize="14px"
      padding="12px 24px 12px 24px"
      transition="all 0.3s ease-in-out"
      _hover={
        variant === "solid"
          ? {
              border: "1px solid transparent",
              textColor: "white",
              bg: "#0A9B3C",
            }
          : {
              border: "1px solid transparent",
              textColor: "white",
              bg: "brand.green",
            }
      }
      onClick={onClick}
      {...rest}
    >
      {text}
    </Box>
  );
};

export default CustomButton;
