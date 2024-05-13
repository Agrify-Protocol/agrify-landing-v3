import { Box, Text } from "@chakra-ui/react";
import { pangaia, suisse } from "@/fonts";
import Image from "next/image";
import tech from "../../../../public/images/technology.png";
import SectionButton from "@/components/common/SectionButton";
import '../animation.css'

const HowItWorks = () => {
  return (
    <Box
      mt="200px"
      rounded="24px"
      bgColor="white"
      pt="65px"
      pb="59px"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <SectionButton title="How it works" mb={4} />
      <Text
        fontFamily={pangaia.style.fontFamily}
        fontWeight="300"
        fontSize="40px"
        mb={12}
      >
        Our Technology
      </Text>
      <Box w="231.82px" mb="91px" className="soft-bounce">
        <Image src={tech} alt="agrify technology img" />
      </Box>
      <Text
        maxW="710px"
        textAlign="center"
        fontFamily={suisse.style.fontFamily}
        lineHeight="19.2px"
        color="brand.secondaryForeGround"
      >
        Our proprietary tech stack utilises a unique combination of satellite
        imagery, artificial intelligence and the blockchain to measure,
        validate, tokenise and generate tradeable carbon credits that can be
        used to fund regenerative agriculture projects all over the world.{" "}
      </Text>
    </Box>
  );
};

export default HowItWorks;
