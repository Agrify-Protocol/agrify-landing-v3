"use client";

import { pangaia } from "@/fonts";
import { Box, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface HeroProp {
  title: string;
  btn: React.ReactNode;
  img: {
    desktop: StaticImageData;
    mobile: StaticImageData;
    alt: string;
  };
  [others: string]: any;
}

const Hero = ({ title, btn, img, ...others }: HeroProp) => {
  return (
    <Box
      rounded={{ base: "16px", lg: "24px" }}
      pt={{ base: 16, lg: 36 }}
      {...others}
    >
      <Box
        maxW="954px"
        textAlign="center"
        mx="auto"
        pb={6}
        px={{ base: 4, lg: 0 }}
      >
        <Text
          fontSize={{ base: "32px", lg: "48px" }}
          fontFamily={pangaia.style.fontFamily}
          fontWeight="200"
          lineHeight={{ base: "44.8px", lg: "57.6px" }}
          mb={6}
          as="h2"
        >
          {title}
        </Text>
        {btn}
      </Box>
      <Box display={{ base: "none", md: "block" }}>
        <Image
          src={img.desktop}
          alt={img.alt}
          style={{ borderRadius: "24px" }}
        />
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <Image
          src={img.mobile}
          alt={img.alt}
          style={{ borderRadius: "16px" }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
