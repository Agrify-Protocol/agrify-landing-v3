import { inter } from "@/fonts";
import { Box, InputGroup, Text } from "@chakra-ui/react";
import { useState } from "react";
import countryList from "../../../const/countryList.json";
import "./input.css";

interface CustomInputProp {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
  onChange: () => void;
}
const CustomInput = ({
  label,
  id,
  placeholder,
  type = "text",
  onChange,
}: CustomInputProp) => {
  
  const getCountryCodeValue = (countryIdd: {
    root?: string | undefined;
    suffixes?: string[] | undefined;
  }) => {
    if (countryIdd.suffixes && countryIdd.suffixes.length > 2) {
      return `${countryIdd.root ?? ""}`;
    }
    return `${countryIdd.root ?? ""}${countryIdd.suffixes ?? ""}`;
  };

  const [selectedCountry, setSelectedCountry] = useState(
    getCountryCodeValue(countryList[0].idd)
  );

  const [telInputActive, setTelInputActive] = useState(false);

  return (
    <InputGroup
      display="flex"
      flexDir="column"
      gap={2}
      fontFamily={inter.style.fontFamily}
      zIndex={0}
    >
      <Text as="label" htmlFor={id}>
        {label}
      </Text>
      {type !== "tel" ? (
        <input
          className="custom-text-input"
          style={{
            transition: "all 0.1s ease-in-out",
          }}
          id={id}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
        />
      ) : (
        <Box
          bgColor="white"
          display="flex"
          alignItems="center"
          boxSizing="border-box"
          rounded="16px"
          border={telInputActive ? "1px solid #C8C8C8" : "1px solid #E2E8F0"}
          transition="all 0.1s ease-in-out"
          _hover={{
            border: "1px solid #C8C8C8",
          }}
          padding={2}
        >
          <select
            style={{
              fontSize: "24px",
              outline: "none",
              backgroundColor: "white",
              borderRadius: "16px",
              cursor: "pointer",
            }}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {countryList.map((country) => (
              <option
                key={country.name.common}
                data-image={country.flags.png}
                value={getCountryCodeValue(country.idd)}
              >
                {country.flag}
              </option>
            ))}
          </select>
          <Text fontSize="14px">{selectedCountry}</Text>
          <input
            id={id}
            placeholder={placeholder}
            style={{
              marginLeft: "8px",
              outline: "none",
              width: "100%",
              backgroundColor: "transparent",
              transition: "border-width 0.3s",
            }}
            className="custom-tel-input"
            onFocus={() => setTelInputActive(true)}
            onBlur={() => setTelInputActive(false)}
            type={type}
            onChange={onChange}
          />
        </Box>
      )}
    </InputGroup>
  );
};

export default CustomInput;
