import { Box, Text } from "@chakra-ui/react";
import CalculatorNavbar from "../CalculatorNavbar";
import React from "react";
import { pangaia } from "@/fonts";
import Card from "./Card";

export interface CalculatorLayoutProp {
  children: React.ReactNode;
}

const CalculatorLayout = ({ children }: CalculatorLayoutProp) => {
  return (
    <Box background="brand.grey" minH="100vh">
      <CalculatorNavbar />
      <Box
        backgroundImage="url('/images/calculator-bg.png')"
        bgSize="cover"
        bgRepeat="repeat"
        minHeight="85vh"
        bgPosition="center"
        m="8px 24px 0px 12px"
        rounded="24px"
        pb={10}
      >
        <Text
          fontFamily={pangaia.style.fontFamily}
          fontWeight="200"
          fontSize="48px"
          lineHeight="57.6px"
          letterSpacing="0.2%"
          textAlign="center"
          pt="80px"
          pb="40px"
        >
          Calculate Your Carbon Footprint
        </Text>
        <Card>{children}</Card>
      </Box>
    </Box>
  );
};

export default CalculatorLayout;
