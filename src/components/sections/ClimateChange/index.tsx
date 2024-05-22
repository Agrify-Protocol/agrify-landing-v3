import { pangaia, suisse } from "@/fonts";
import { Box, Text } from "@chakra-ui/react";

const ClimateChange = () => {
  return (
    <Box
      mt={{ base: "88px", lg: "164px" }}
      mb={{ base: "124px", lg: "154px" }}
      display="flex"
      flexDir="column"
      gap="24px"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Text
        fontFamily={pangaia.style.fontFamily}
        fontSize={{ base: "24px", lg: "32px" }}
        lineHeight={{ base: "28.8px", lg: "" }}
        fontWeight="300"
        textColor="brand.mainBlack"
      >
        Giving Farmers a Fighting Chance Against Climate Change
      </Text>
      <Text
        textColor="brand.secondaryForeGround"
        fontFamily={suisse.style.fontFamily}
        fontSize={{ base: "15px", lg: "20px" }}
        lineHeight={{ base: "21px", lg: "24px" }}
      >
        Agrify is an AI-driven platform that equips farmers with actionable
        insights and tools to <br /> boost their farming practices, enhance crop
        yields, and access global carbon markets.
      </Text>
    </Box>
  );
};

export default ClimateChange;
