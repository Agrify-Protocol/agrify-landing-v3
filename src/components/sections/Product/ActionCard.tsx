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
  id: number;
}

const ActionCard = ({ action, title, text, img, id }: ActionCardProps) => {
  const getPaddingValue = (id: number) => {
    switch (id) {
      case 0:
        return "0px 4px";
      case 1:
        return "0px 21px 0px 58px";
      case 2:
        return "0px 57px 0px 12px";
      default:
        break;
    }
  };

  const isReversed = id % 2 !== 0;

  return (
    <Box
      display="flex"
      flexDir={{ base: "column", md: isReversed ? "row-reverse" : "row" }}
      justifyContent="space-between"
    >
      <Box
        maxW={{ md: "40%", lg: "555px" }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Text
          fontFamily={pangaia.style.fontFamily}
          fontSize={{ base: "24px", lg: "40px" }}
          fontWeight="200"
          lineHeight={{ base: "28.8px", lg: "48px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text as="span" fontWeight="500">
            {action}
          </Text>
          <br />
          {title}
        </Text>
        <Text
          color="brand.secondaryForeGround"
          lineHeight={{ base: "21px", md: "19.2px" }}
          textAlign={{ base: "center", md: "left" }}
          fontFamily={suisse.style.fontFamily}
          mt="16px"
          mb={{ base: "24px", md: "32px" }}
          px={{ base: 3, md: 0 }}
        >
          {text}
        </Text>
        <CustomButton
          text="Join the waitlist"
          width="fit-content"
          mb={{ base: "54px", md: "0px" }}
          mx={{ base: "auto", md: "0px" }}
          onClick={() => handleScroll("join-waitlist")}
        />
      </Box>
      <Box
        maxH={{ lg: "621.86px" }}
        w={{ base: "auto", md: "50%", lg: "auto" }}
        display="flex"
        padding={{ base: getPaddingValue(id), md: "0px" }}
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
