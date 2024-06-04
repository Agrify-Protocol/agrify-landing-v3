import { Box } from "@chakra-ui/react";

const Dots = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      {Array.from({ length: 2 }, () => "").map((_item, index) => (
        <Box
          key={index}
          width="8px"
          height="8px"
          rounded="100%"
          bottom="0"
          backgroundColor="brand.secondaryForeGround"
        />
      ))}
    </Box>
  );
};

export default Dots;
