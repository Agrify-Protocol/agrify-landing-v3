import { suisse } from "@/fonts";
import { Box, ButtonProps, Text } from "@chakra-ui/react";

interface SectionButtonProp extends ButtonProps {
  title: string;
}

const SectionButton = ({ title, ...rest }: SectionButtonProp) => {
  return (
    <Box
      fontSize="14px"
      fontWeight="300"
      fontFamily={suisse.style.fontFamily}
      bgColor="brand.lightGrey"
      width="fit-content"
      display="flex"
      gap="6px"
      alignItems="center"
      padding="6px 14px 6px 14px"
      rounded="32px"
      {...rest}
    >
      <Box w={3} h={3} bgColor="brand.yellow" rounded="100%" />
      <Text>{title}</Text>
    </Box>
  );
};

export default SectionButton;
