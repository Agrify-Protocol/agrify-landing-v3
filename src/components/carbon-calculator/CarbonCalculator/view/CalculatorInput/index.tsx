import { suisse } from "@/fonts";
import { Box, Text } from "@chakra-ui/react";
import "../../../../common/CustomInput/input.css";
import "../index.css";

interface CalculatorInputProp {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
  isInvalid?: boolean;
  errorMessage?: string;
  onChange: (e?: any) => void;
  setOpenCountryModal?: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCountry?: any;
  isLoading: boolean;
  value: string;
  readOnly: boolean;
  cursor: "auto" | "pointer";
}
const CalculatorInput = ({
  label,
  id,
  placeholder,
  type = "text",
  cursor = "auto",
  onChange,
  isInvalid,
  errorMessage,
  readOnly,
  isLoading,
  value,
}: CalculatorInputProp) => {
  return (
    <Box display="flex" flexDir="column" gap="24px">
      <Text
        fontSize="18px"
        lineHeight="23.4px"
        letterSpacing="-2%"
        textAlign="center"
        as="label"
        htmlFor={id}
        fontFamily={suisse.style.fontFamily}
      >
        {label}
      </Text>
      <Box>
        <input
          value={value}
          className={`custom-text-input ${
            isInvalid ? "error-text-input-border" : "text-input-border"
          }`}
          style={{
            transition: "all 0.1s ease-in-out",
            width: "100%",
            background: "#F5F5F7",
            cursor,
          }}
          id={id}
          name={id}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          // onBlur={() =>
          //   setIsInputInvalid &&
          //   setIsInputInvalid((prev: any) => ({ ...prev, [id]: false }))
          // }
          readOnly={isLoading || readOnly}
        />
        {isInvalid ? (
          <Text fontSize="12px" color="#dc143c">
            {errorMessage}
          </Text>
        ) : null}
      </Box>
    </Box>
  );
};

export default CalculatorInput;
