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
import { useRouter } from "next/navigation";

const NatureForm = () => {
  const { fields, handleFormOnChange, finalObj } = useInvestInNatureFormLogic()
  const router = useRouter();

  return (
    <Box
      display="flex"
      fontFamily={suisse.style.fontFamily}
      backgroundColor="brand.grey"
    >
      <Box
        w={{ base: "100%", lg: "50%" }}
        py="40px"
        px="64px"
        mr="34px"
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
            <Text fontWeight="500" fontSize="32px" mb="12px">
              Invest in{" "}
              <Text as="span" textColor="brand.darkGrey">
                Nature
              </Text>
            </Text>
            <Text textColor="brand.darkGrey">
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
                isLoading={false}
                isInvalid={item.isInValid}
                errorMessage={item.errorMessage}
                options={item.options}
                onChange={(e) => handleFormOnChange(e, index, item.id)}
              />
            ))}
          </Box>
          <CustomButton
            text="Submit"
            variant="solid"
            isLoading={false}
            onClick={() => router.push('/investment-confirmed')}
            isDisabled={Object.values(finalObj).some((value) => value === "")}
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
