import { Box, Text } from "@chakra-ui/react";
import CalculatorNavbar from "../CalculatorNavbar";
import React from "react";
import { pangaia, suisse } from "@/fonts";
import Card from "./Card";
import Link from "next/link";
import { validateEmail } from "@/utils/validationSchema";

export interface CalculatorLayoutProp {
  step?: number;
  email: string;
  children: React.ReactNode;
}

const CalculatorLayout = ({ step, email, children }: CalculatorLayoutProp) => {
  return (
    <Box background="brand.grey" minH="100vh">
      <CalculatorNavbar />
      <Box
        backgroundImage="url('/images/calculator-bg.png')"
        bgSize="cover"
        bgRepeat="repeat"
        minHeight="85vh"
        bgPosition="center"
        m="8px 24px 0px 24px"
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
        <Card email={email} >{children}</Card>
        {step !== 6 ? (
          <Box
            fontFamily={suisse.style.fontFamily}
            mt="24px"
            textAlign="center"
            textColor="brand.darkGrey"
          >
            <Link
              href={`/invest-in-nature${
                validateEmail(email ?? '') ? "" : `?email=${email}`
              }`}
            >
              Skip calculator and start Investing
            </Link>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default CalculatorLayout;
