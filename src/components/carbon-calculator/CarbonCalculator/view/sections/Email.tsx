import { Box } from "@chakra-ui/react";
import CalculatorInput from "../CalculatorInput";
import React from "react";

interface EmailProp {
  details: {
    email: string;
  };
  onChange: (e: { target: { name: string; value: string } }) => void;
  isEmailInvalid: {
    email: boolean;
  };
}

const Email = ({
  details,
  onChange,
  isEmailInvalid,
}: EmailProp) => {
  return (
    <Box>
      <CalculatorInput
        label="Your Email Address"
        id="email"
        placeholder="admin@agrifyafrica.xyz"
        type="email"
        errorMessage="Email address must be valid."
        onChange={onChange}
        isInvalid={isEmailInvalid.email}
        value={details.email}
        isLoading={false}
        readOnly={false}
        cursor="auto"
      />
    </Box>
  );
};

export default Email;
