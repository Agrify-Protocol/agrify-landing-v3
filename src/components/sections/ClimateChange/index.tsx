import { pangaia, suisse } from "@/fonts";
import { Box, Text } from "@chakra-ui/react";

const ClimateChange = () => {
  return (
    <Box
      mt="164px"
      mb="154px"
      display="flex"
      flexDir="column"
      gap="24px"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        fontFamily={pangaia.style.fontFamily}
        fontSize="32px"
        fontWeight="300"
        textColor="brand.mainBlack"
      >
        Giving Farmers a Fighting Chance Against Climate Change
      </Text>
      <Text
        textColor="brand.secondaryForeGround"
        fontFamily={suisse.style.fontFamily}
        fontSize="20px"
        lineHeight="24px"
      >
        Agrify is an AI-driven platform that equips farmers with actionable
        insights and tools to <br /> boost their farming practices, enhance crop
        yields, and access global carbon markets.
      </Text>
    </Box>
  );
};

export default ClimateChange;
