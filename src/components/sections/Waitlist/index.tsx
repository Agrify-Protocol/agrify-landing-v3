"use client";

import { pangaia, suisse } from "@/fonts";
import { Box, Stack, Text } from "@chakra-ui/react";
import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import { useRouter } from "next/navigation";

const Waitlist = () => {
  const router = useRouter();
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
          id="full-name"
          placeholder="Enter Name"
          onChange={() => null}
        />
        <CustomInput
          label="Email Address"
          id="email"
          type="email"
          placeholder="Enter email address"
          onChange={() => null}
        />
        <CustomInput
          label="Phone Number"
          id="tel"
          type="tel"
          placeholder="Enter phone number"
          onChange={() => null}
        />
        <CustomInput
          label="Farm Location"
          id="farm-location"
          placeholder="Enter Enter Country"
          onChange={() => null}
        />
        <CustomInput
          label="Farm size (In Hectares)"
          id="farm-size"
          placeholder="Enter Farm size"
          onChange={() => null}
        />
      </Stack>
      <CustomButton
        text="Join the Waitlist"
        variant="solid"
        w="100%"
        fontSize="16px"
        fontWeight={{ base: "400", lg: "500" }}
        letterSpacing={{ base: "0.2%", lg: "-2%" }}
        fontFamily={suisse.style.fontFamily}
        onClick={() => router.push("/waitlist-confirmed")}
      />
    </Box>
  );
};

export default Waitlist;
