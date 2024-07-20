import { Box } from "@chakra-ui/react";
import CalculatorInput from "../CalculatorInput";
import React, { useEffect, useState } from "react";
import CountryModal from "@/components/sections/Waitlist/CountryModal";

interface DetailsObj {
  email: string;
  country: any;
  transportation: string;
  waste: string;
  electricity: string;
  food: string;
}

export interface CalculatorDetailsProp {
  details: DetailsObj;
  setDetails: React.Dispatch<React.SetStateAction<DetailsObj>>;
}

const Country = ({ details, setDetails }: CalculatorDetailsProp) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(details.country);

  useEffect(() => {
    if (selectedCountry) {
      setDetails((prev) => ({ ...prev, country: selectedCountry }));
    }
  }, [selectedCountry]);

  return (
    <Box>
      <Box onClick={() => setOpenModal(true)} cursor="pointer">
        <CalculatorInput
          label="Select your Country"
          id="country"
          placeholder={details?.country}
          type="text"
          readOnly
          onChange={() => null}
          value={details?.country?.name?.common}
          isLoading={false}
          cursor="pointer"
        />
      </Box>
      <CountryModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        selectedCountry={details.country.name.common}
        setSelectedCountry={setSelectedCountry}
        title="Select your Country"
        name="country"
      />
    </Box>
  );
};

export default Country;
