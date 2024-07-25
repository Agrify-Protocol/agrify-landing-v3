import { pangaia, suisse } from "@/fonts";
import { Box, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

interface SolutionCardProp {
  index: number;
  title: string;
  text: string;
  img: StaticImageData;
}

const SolutionCard = ({ index, title, text, img }: SolutionCardProp) => {
  return (
    <Box
      backgroundColor="brand.lightGrey"
      padding={{ base: "24px 16px", lg: "18px 38px" }}
      rounded="24px"
      display="flex"
      justifyContent={{ base: "center", lg: "space-between" }}
      flexDir={{ base: "column", lg: index % 2 ? "row-reverse" : "row" }}
    >
      <Box
        maxW="444px"
        py={{ base: 0, lg: "36px" }}
        display="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Box>
          <Box display="flex" alignItems="center" gap="6px" py="8px">
            <Box w="12px" h="12px" bgColor="brand.yellow" rounded="100%" />
            <Text
              fontFamily={suisse.style.fontFamily}
              fontWeight="300"
              fontSize="14px"
            >
              {index < 9 ? `0${index + 1}` : index}
            </Text>
          </Box>
          <Text
            fontFamily={pangaia.style.fontFamily}
            fontWeight="200"
            fontSize={{ base: "32px", lg: "48px" }}
            lineHeight={{ base: "44.8px", lg: "67.2px" }}
          >
            {title}
          </Text>
        </Box>
        <Text
          m={{ base: "24px 0 64px", lg: 0 }}
          fontFamily={suisse.style.fontFamily}
          fontSize={{ base: "15px", lg: "18px" }}
          textColor="#0F0F0F66"
        >
          {text}
        </Text>
      </Box>
      <Box maxW="645px">
        <Image
          src={img}
          alt={`${title} section cover`}
          style={{ borderRadius: "8px" }}
        />
      </Box>
    </Box>
  );
};

export default SolutionCard;
