"use client";

import CustomButton from "@/components/common/CustomButton";
import SectionButton from "@/components/common/SectionButton";
import { pangaia, suisse } from "@/fonts";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

const Partners = () => {
  return (
    <Box
      maxW="600px"
      mx="auto"
      textAlign="center"
      mb={{ base: "80px", lg: "200px" }}
    >
      <SectionButton title="Partners" width="fit-content" mx="auto" mb={4} />
      <Box>
        <Text
          fontFamily={pangaia.style.fontFamily}
          fontWeight={{ base: "200", lg: "300" }}
          fontSize={{ base: "24px", lg: "40px" }}
          mb={4}
        >
          Invest In The Future of Agriculture
        </Text>
        <Text
          fontFamily={suisse.style.fontFamily}
          lineHeight="19.2px"
          letterSpacing="-1%"
          color="brand.secondaryForeGround"
          mx={{ base: 2, lg: 0 }}
          mb={8}
        >
          Our mission at Agrify is to revolutionize the entire agricultural
          value chain with modern necessary technologies such as AI, Satellite
          Imagery, Blockchain and more so that farmers can stand a chance in the
          battle against climate change.
        </Text>
        <Link
          href="https://docsend.com/view/iecvqc3pyv8u562q"
          target="_blank"
          onClick={() =>
            sendGAEvent("event", "see-our-deck", { value: "view" })
          }
        >
          <CustomButton
            text="See our deck"
            variant="outline"
            onClick={() => null}
          />
        </Link>
      </Box>
    </Box>
  );
};

export default Partners;
