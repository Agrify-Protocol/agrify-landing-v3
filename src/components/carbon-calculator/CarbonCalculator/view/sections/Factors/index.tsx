import { suisse } from "@/fonts";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Step from "../../../../../../../public/icons/calculator/Step";
import Carousel from "../../Carousel";
import FactorInput from "./FactorInput";

interface FactorWrapperProp {
  icon: string;
  alt: string;
  title: string;
  step: number;
  question: string;
  name: string;
  options?: string[];
  isInvalid?: boolean;
  setIsInputInvalid?: any;
  onChange: (e: { target: { name: string; value: string } }) => void;
  details: {
    email: string;
    country: any;
    transportation: string;
    waste: string;
    electricity: string;
    food: string;
  };
}

const FactorWrapper = ({
  icon,
  alt,
  title,
  step,
  name,
  question,
  options,
  isInvalid,
  setIsInputInvalid,
  onChange,
  details,
}: FactorWrapperProp) => {
  return (
    <Box>
      <Box display="flex" alignItems="center" flexDir="column" gap={3}>
        <Box>
          <Image src={icon} alt={alt} />
        </Box>
        <Text
          fontFamily={suisse.style.fontFamily}
          fontWeight="500"
          fontSize="14px"
        >
          {title}
        </Text>
      </Box>
      <Step step={step} />
      <Carousel step={step}>
        <Box>
          <Text
            maxW="220px"
            fontFamily={suisse.style.fontFamily}
            fontSize="18px"
            textAlign="center"
            mx="auto"
          >
            {question}
          </Text>
          <FactorInput
            name={name}
            options={options}
            details={details}
            isInvalid={isInvalid}
            onChange={onChange}
            setIsInputInvalid={setIsInputInvalid}
          />
        </Box>
      </Carousel>
    </Box>
  );
};

export default FactorWrapper;
