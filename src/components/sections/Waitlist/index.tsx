"use client";

import { pangaia, suisse } from "@/fonts";
import { Box, Stack, Text } from "@chakra-ui/react";
import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import { useRouter } from "next/navigation";

const Waitlist = () => {
  const router = useRouter()
  return (
    <Box my="200px" as="form" maxW="558px" mx="auto" id="join-waitlist">
      <Text
        as="h3"
        fontWeight="200"
        fontSize="40px"
        fontFamily={pangaia.style.fontFamily}
        textAlign="center"
      >
        Join the Waitlist
      </Text>
      <Stack my={10} spacing={4}>
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
        fontWeight="500"
        letterSpacing="-2%"
        fontFamily={suisse.style.fontFamily}
        onClick={() => router.push('/waitlist-confirmed')}
      />
    </Box>
  );
};

export default Waitlist;
