"use client";

import { pangaia, suisse } from "@/fonts";
import { Box, Stack, Text } from "@chakra-ui/react";
import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import CountryModal from "./CountryModal";
import useWaitlistLogic from "./controller/useWaitlistLogic";

const Waitlist = () => {
  const {
    isInputInvalid,
    setIsInputInvalid,
    handleInputOnchange,
    setOpenCountryModal,
    selectedCountry,
    userDetails,
    isLoading,
    joinWaitList,
    openCountryModal,
    setSelectedCountry,
  } = useWaitlistLogic();

  return (
    <Box
      my={{ base: "80px", lg: "200px" }}
      as="form"
      maxW="558px"
      mx="auto"
      px={{ base: "11px", lg: 0 }}
    >
      <Text
        as="h3"
        fontWeight="200"
        fontSize={{ base: "24px", lg: "40px" }}
        fontFamily={pangaia.style.fontFamily}
        textAlign="center"
      >
        Join the Waitlist
      </Text>
      <Stack my={{ base: 6, lg: 10 }} spacing={4}>
        <CustomInput
          label="Full Name"
          id="full_name"
          placeholder="Enter Name"
          isInvalid={isInputInvalid.full_name}
          errorMessage="Full name must be at least 4 characters long and may not contain numbers."
          setIsInputInvalid={setIsInputInvalid}
          onChange={(e) => {
            handleInputOnchange(e);
          }}
        />
        <CustomInput
          label="Email Address"
          id="email"
          type="email"
          placeholder="Enter email address"
          isInvalid={isInputInvalid.email}
          errorMessage="email address must be valid."
          onChange={(e) => handleInputOnchange(e)}
          setIsInputInvalid={setIsInputInvalid}
        />
        <CustomInput
          label="Phone Number"
          id="phone_number"
          type="tel"
          placeholder="Enter phone number"
          onChange={(e) => handleInputOnchange(e)}
          isInvalid={isInputInvalid.phone_number}
          errorMessage="Phone number must have at least 6 digits, containing only numbers."
          setOpenCountryModal={setOpenCountryModal}
          setIsInputInvalid={setIsInputInvalid}
          selectedCountry={selectedCountry}
        />
        <CustomInput
          label="Farm Location"
          id="farm_country"
          placeholder="Enter Enter Country"
          onChange={(e) => handleInputOnchange(e)}
        />
        <CustomInput
          label="Farm size (In Hectares)"
          id="farm_size"
          placeholder="Enter Farm size"
          isInvalid={isInputInvalid.farm_size}
          errorMessage="Farm size must be numbers only."
          onChange={(e) => handleInputOnchange(e)}
          setIsInputInvalid={setIsInputInvalid}
        />
      </Stack>
      <CustomButton
        text="Join the Waitlist"
        variant="solid"
        isDisabled={
          Object.values(isInputInvalid).some((value) => value === true) ||
          Object.values(userDetails).some((value) => value === "")
        }
        w="100%"
        fontSize="16px"
        isLoading={isLoading}
        fontWeight={{ base: "400", lg: "500" }}
        letterSpacing={{ base: "0.2%", lg: "-2%" }}
        fontFamily={suisse.style.fontFamily}
        onClick={(e: any) => {
          e.preventDefault();
          joinWaitList();
        }}
      />
      <CountryModal
        isOpen={openCountryModal}
        onClose={() => setOpenCountryModal(false)}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
    </Box>
  );
};

export default Waitlist;
