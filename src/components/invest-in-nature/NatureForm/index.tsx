"use client";

import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import cover from "../../../../public/images/invest-in-nature.png";
import logo from "../../../../public/icons/logo.svg";
import Link from "next/link";
import { suisse } from "@/fonts";
import CustomInput from "@/components/common/CustomInput";
import CustomButton from "@/components/common/CustomButton";
import useInvestInNatureFormLogic from "@/utils/hooks/useInvestInNatureFormLogic";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import useApiCall from "@/utils/hooks/useApiCall";

const NatureForm = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { apiCall } = useApiCall();
  const { fields, handleFormOnChange, finalObj, isInvalid } =
    useInvestInNatureFormLogic(params.get("email"));

  return (
    <Box
      display="flex"
      fontFamily={suisse.style.fontFamily}
      backgroundColor="brand.grey"
    >
      <Box
        w={{ base: "100%", md: "70%", lg: "50%" }}
        py="40px"
        px={{ base: "16px", lg: "64px" }}
        mr={{ base: 0, lg: "34px" }}
        mx={{ base: "auto", lg: "0" }}
      >
        <Link
          href="/business"
          style={{ outline: "none", display: "block", width: "fit-content" }}
        >
          <Image src={logo} alt="agrify logo icon" />
        </Link>
        <Box mt="52px" mb="48px">
          <Box>
            <Text
              fontWeight="500"
              fontSize={{ base: "24px", lg: "32px" }}
              mb="12px"
            >
              Invest in{" "}
              <Text as="span" textColor="brand.darkGrey">
                Nature
              </Text>
            </Text>
            <Text
              textColor="brand.darkGrey"
              fontSize={{ base: "15px", lg: "16px" }}
            >
              Please tell us a little bit more about your organization.
            </Text>
          </Box>
          <Box display="flex" flexDir="column" gap="16px" mt="44px">
            {fields.map((item, index) => (
              <CustomInput
                key={item.title}
                label={item.title}
                placeholder={item.placeholder}
                type={item.type}
                id={item.id}
                isLoading={isSubmitting}
                isInvalid={item.isInValid}
                errorMessage={item.errorMessage}
                options={item.options}
                value={item.value ?? ""}
                onChange={(e) => handleFormOnChange(e, index, item.id)}
              />
            ))}
          </Box>
          <CustomButton
            text="Submit"
            variant="solid"
            isLoading={isSubmitting}
            onClick={() =>
              apiCall(
                `${process.env.NEXT_PUBLIC_BASE_URL}/invest`,
                finalObj,
                {
                  success: "You've been added to the Investors list.",
                  error: "Something went wrong. Try again.",
                },
                setIsSubmitting,
                () => {
                  router.push("/investment-confirmed");
                },
                null
              )
            }
            isDisabled={
              Object.values(finalObj).some((value) => value === "") ||
              Object.values(isInvalid).some((value) => value === true)
            }
            width="100%"
            mt="48px"
            fontWeight="500"
          />
        </Box>
      </Box>
      <Box
        w="50%"
        h="100vh"
        display={{ base: "none", lg: "block" }}
        position="fixed"
        right={0}
        overflow="hidden"
        rounded="24px 0px 0px 23px"
      >
        <Image src={cover} alt="invest in nature form cover" />
      </Box>
    </Box>
  );
};

export default NatureForm;
