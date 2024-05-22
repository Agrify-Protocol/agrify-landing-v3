import { Box, Text } from "@chakra-ui/react";
import { pangaia, suisse } from "@/fonts";
import Image from "next/image";
import tech from "../../../../public/images/technology.png";
import SectionButton from "@/components/common/SectionButton";
import "../animation.css";

const HowItWorks = () => {
  return (
    <Box
      mt={{ base: "80px", lg: "200px" }}
      rounded={{ base: "16px", lg: "24px" }}
      bgColor="white"
      pt={{ base: "48px", lg: "65px" }}
      pb={{ base: "72px", lg: "59px" }}
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <SectionButton title="How it works" mb={4} />
      <Text
        fontFamily={pangaia.style.fontFamily}
        fontWeight={{ base: "200", lg: "300" }}
        fontSize={{ base: "20px", lg: "40px" }}
        mb={{ base: 16, lg: 12 }}
      >
        Our Technology
      </Text>
      <Box
        w="231.82px"
        mb={{ base: "48px", lg: "91px" }}
      >
        <Image src={tech} alt="agrify technology img" />
      </Box>
      <Text
        maxW="710px"
        textAlign="center"
        fontFamily={suisse.style.fontFamily}
        lineHeight="19.2px"
        color="brand.secondaryForeGround"
        px={{ base: "25.5px", lg: 0 }}
        id="join-waitlist"
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
