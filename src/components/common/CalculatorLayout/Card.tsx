import { Box } from "@chakra-ui/react";
import Dots from "./Dots";
import { CalculatorLayoutProp } from ".";

const Card = ({ children }: CalculatorLayoutProp) => {
  return (
    <Box background="#F8FAFB" maxW="477px" mx="auto" rounded="16.96px" p="11px">
      <Box border="1.06px solid #EEEEEE" rounded="16.96px" p="17px">
        <Box>
          <Dots />
          <Box p="35px 18px 45px">{children}</Box>
          <Dots />
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
