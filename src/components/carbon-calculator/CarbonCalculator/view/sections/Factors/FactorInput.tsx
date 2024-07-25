import getBorderColor from "@/utils/getBorderColor";
import { Box, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import "../../../../../common/CustomInput/input.css";
import "../../index.css";

interface FactorInputProp {
  name: string;
  options?: string[];
  isInvalid?: boolean;
  setIsInputInvalid?: any;
  onChange: (e: { target: { name: string; value: string } }) => void;
  details: {
    email: string;
    country: any;
    distance: string;
    waste: string;
    electricity: string;
    meal: string;
  };
}

const FactorInput = ({
  name,
  options,
  isInvalid,
  setIsInputInvalid,
  onChange,
  details,
}: FactorInputProp) => {
  const [telInputActive, setTelInputActive] = useState(false);
  const inputElement = useRef<HTMLInputElement>(null);
  return (
    <>
      <Box
        bgColor="brand.grey"
        display="flex"
        alignItems="center"
        boxSizing="border-box"
        mt="24px"
        rounded="16px"
        border={getBorderColor(isInvalid, telInputActive)}
        transition="all 0.1s ease-in-out"
        _hover={{
          border: isInvalid ? "1px solid #dc143c" : "1px solid #C8C8C8",
        }}
        padding={2}
        onClick={() => {
          inputElement.current?.focus();
        }}
      >
        <input
          style={{
            margin: "8px 6px",
            backgroundColor: "transparent",
            width: "100%",
            outline: "none",
            marginLeft: "17px",
          }}
          ref={inputElement}
          name={name}
          id={name}
          value={details[name as keyof typeof details]}
          onFocus={() => {
            setTelInputActive(true);
          }}
          onBlur={() => {
            setTelInputActive(false);
            setIsInputInvalid((prev: any) => ({ ...prev, [name]: false }));
          }}
          onChange={onChange}
        />
        {/* {options !== undefined ? (
          <select
            style={{
              color: "#A6A6A6",
              borderRadius: "12.72px",
              padding: "10.6px 8.48px",
              width: "min-content",
              outline: "none",
            }}
          >
            {options.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        ) : null} */}
      </Box>
      {isInvalid ? (
        <Text fontSize="12px" color="#dc143c">
          Value must contain numbers only
        </Text>
      ) : null}
    </>
  );
};

export default FactorInput;
