"use client";

import CustomButton from "@/components/common/CustomButton";
import { pangaia } from "@/fonts";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import agrifyHero from "../../../../public/images/agrify.png";

const Hero = () => {
  return (
    <Box backgroundColor="white" rounded="24px" pt={36}>
      <Box maxW="954px" textAlign="center" mx="auto" pb={6}>
        <Text
          fontSize="48px"
          fontFamily={pangaia.style.fontFamily}
          fontWeight="200"
          lineHeight="57.6px"
          mb={6}
          as="h2"
        >
          Helping Farmers improve yield, access debt free finance and qualify
          for international exports
        </Text>
        <CustomButton text="Learn More" variant="solid" onClick={() => null} />
      </Box>
      <Box rounded="24px">
        <Image
          src={agrifyHero}
          alt="agrify hero image"
          style={{ borderRadius: "24px" }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
