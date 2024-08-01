import { Box, BoxProps } from "@chakra-ui/react";

interface ArrowProp extends BoxProps {
  color: string;
}

const Arrow = ({ color, ...rest }: ArrowProp) => {
  return (
    <Box {...rest}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="white" />
        <path
          d="M6.83594 12H16.1693"
          stroke={color}
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 7.33301L16.1667 11.9997L11.5 16.6663"
          stroke={color}
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export default Arrow;
