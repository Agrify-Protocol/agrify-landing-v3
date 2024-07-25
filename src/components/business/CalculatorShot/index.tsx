import { Box, Text } from "@chakra-ui/react";
import { pangaia, suisse } from "@/fonts";
import CustomButton from "@/components/common/CustomButton";
import Image from "next/image";
import calculatorShot from "../../../../public/images/carbon-calculator.png";
import { useRouter } from "next/navigation";

const CalculatorShot = () => {
  const router = useRouter();
  return (
    <Box
      mt={{ base: "88px", lg: "218px" }}
      mb={{ base: "88px", lg: "160px" }}
      textAlign="center"
    >
      <Box mb={10}>
        <Text
          fontFamily={pangaia.style.fontFamily}
          fontWeight="200"
          fontSize={{ base: "32px", lg: "48px" }}
          lineHeight={{ base: "38.4px", lg: "57.6px" }}
          mb={4}
        >
          Calculate Your Carbon Emissions
        </Text>
        <Text
          fontFamily={suisse.style.fontFamily}
          fontSize={{ base: "15px", lg: "18px" }}
          textColor="#0F0F0F66"
          lineHeight="21.6px"
          maxW="612px"
          mx="auto"
          mb="32px"
        >
          Start now: Calculate your carbon emissions with our tool and discover
          regenerative farming initiatives that effectively offset your
          emissions.
        </Text>
        <CustomButton
          text="Take Emissions Test"
          variant="solid"
          onClick={() => router.push("/carbon-calculator")}
        />
      </Box>
      <Box maxW="459.92px" mx="auto">
        <Image src={calculatorShot} alt="carbon calculator snapshot" />
      </Box>
    </Box>
  );
};

export default CalculatorShot;
