"use client";

import CustomButton from "@/components/common/CustomButton";
import { pangaia, suisse } from "@/fonts";
import { Box, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import "../animation.css";
import handleScroll from "@/utils/handleScroll";

interface ActionCardProps {
  action: string;
  title: string;
  text: string;
  img: StaticImageData;
  isReversed?: boolean;
}

const ActionCard = ({
  action,
  title,
  text,
  img,
  isReversed,
}: ActionCardProps) => {
  return (
    <Box
      display="flex"
      flexDir={{ sm: "column", lg: isReversed ? "row-reverse" : "row" }}
      justifyContent="space-between"
    >
      <Box
        maxW="555px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Text
          fontFamily={pangaia.style.fontFamily}
          fontSize="40px"
          fontWeight="200"
          lineHeight="48px"
        >
          <Text as="span" fontWeight="500">
            {action}
          </Text>
          <br />
          {title}
        </Text>
        <Text
          color="brand.secondaryForeGround"
          lineHeight="19.2px"
          fontFamily={suisse.style.fontFamily}
          mt="16px"
          mb="32px"
        >
          {text}
        </Text>
        <CustomButton
          text="Join Our Waitlist"
          width="fit-content"
          onClick={() => handleScroll("join-waitlist")}
        />
      </Box>
      <Box
        maxH={{ lg: "621.86px" }}
        w="auto"
        display="flex"
        justifyContent={!isReversed ? "end" : ""}
      >
        <Image
          src={img}
          className={!isReversed ? "soft-bounce-reverse" : "soft-bounce"}
          alt={`${title} section img`}
          style={{ width: "auto", maxHeight: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default ActionCard;
