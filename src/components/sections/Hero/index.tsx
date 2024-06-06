"use client";

import CustomButton from "@/components/common/CustomButton";
import { pangaia } from "@/fonts";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import agrifyHero from "../../../../public/images/agrify.png";
import agrifyHeroMobile from "../../../../public/images/agrify-mobile.png";
import handleScroll from "@/utils/handleScroll";

const Hero = () => {
  return (
    <Box
      backgroundColor="white"
      rounded={{ base: "16px", lg: "24px" }}
      pt={{ base: 16, lg: 36 }}
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
          Helping Farmers improve yield, earn carbon income and qualify
          for international exports
        </Text>
        <CustomButton
          text="Learn More"
          variant="solid"
          onClick={() => handleScroll("climate-change")}
          padding={{ base: "12px 24px 12px 24px" }}
        />
      </Box>
      <Box display={{ base: "none", md: "block" }}>
        <Image
          src={agrifyHero}
          alt="agrify hero image"
          style={{ borderRadius: "24px" }}
        />
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <Image
          src={agrifyHeroMobile}
          alt="agrify hero image"
          style={{ borderRadius: "16px" }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
