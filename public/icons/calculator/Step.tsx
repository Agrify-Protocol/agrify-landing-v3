import { Box } from "@chakra-ui/react";

const Step = ({ step }: { step: number }) => {
  return (
    <Box mt="16px" mb="40px" display="flex" gap={1} justifyContent="center">
      {Array.from({ length: 4 }, () => null).map((_item, index) => (
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          key={index}
        >
          <circle
            cx="4.97998"
            cy="4.93945"
            r="4.5"
            fill={index < step - 1 ? "#0CC14C" : "#EEEEEE"}
          />
        </svg>
      ))}
    </Box>
  );
};

export default Step;
