"use client";

import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import errorIcon from "../../../../public/icons/error.svg";
import CustomButton from "../CustomButton";

const ErrorPage = () => {
  const route = useRouter();
  return (
    <Box maxW="558px" mx="auto" display="flex" alignItems="center" h="100vh">
      <Box w="100%" textAlign="center">
        <Box mb="48px" display="flex" justifyContent="center">
          <Image src={errorIcon} alt="error icon" />
        </Box>
        <Text mb="32px" fontSize="32px" fontWeight="500" textColor="#282828">
          Sorry , Page not found :(
        </Text>
        <CustomButton
          text="Go back home"
          onClick={() => route.push("/")}
          variant="solid"
          w="100%"
        />
      </Box>
    </Box>
  );
};

export default ErrorPage;
