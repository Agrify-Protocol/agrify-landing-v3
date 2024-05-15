import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { suisse } from "@/fonts";
import Link from "next/link";

interface SocialCardProp {
  icon: string;
  text: string;
  link: string;
  rotation: string;
  hover: string;
}

const SocialCard = ({ icon, text, link, rotation, hover }: SocialCardProp) => {
  return (
    <Link href={link}>
      <Box
        display="flex"
        flexDir="column"
        gap="70px"
        border="1px dashed"
        rounded="24px"
        padding={6}
        borderColor="brand.darkGrey"
        background="white"
        width={{ base: "100%", md: "332px" }}
        transform={rotation}
        transition="all 0.3s ease-in-out"
        _hover={{ transform: hover }}
      >
        <Image src={icon} alt={`${text} logo`} />
        <Text
          fontFamily={suisse.style.fontFamily}
          fontSize="18px"
          letterSpacing="-2%"
        >
          {text}
        </Text>
      </Box>
    </Link>
  );
};

export default SocialCard;
