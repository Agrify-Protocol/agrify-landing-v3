"use client";

import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import countryList from "../../../../const/countryList.json";
import getCountryCodeValue from "./getCountryCodeValue";
import axios from "axios";
import {
  validateEmail,
  validateFarmSize,
  validateNameInput,
  validatePhoneNumber,
} from "@/utils/validationSchema";

const useWaitlistLogic = () => {
  const router = useRouter();
  const toast = useToast();
  const [openCountryModal, setOpenCountryModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    farm_country: "",
    farm_size: "",
  });
  const [isInputInvalid, setIsInputInvalid] = useState({
    full_name: false,
    phone_number: false,
    email: false,
    farm_size: false,
  });

  const handleInputOnchange = (e: {
    target: {
      name: string;
      value: string;
    };
  }) => {
    const setIsValidFn = (fn: (e: any) => void) => {
      setIsInputInvalid((prev) => ({
        ...prev,
        [e.target.name]: fn(e.target.value),
      }));
    };
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    switch (e.target.name) {
      case "full_name":
        return setIsValidFn(validateNameInput);
      case "email":
        return setIsValidFn(validateEmail);
      case "phone_number":
        return setIsValidFn(validatePhoneNumber);
      case "farm_size":
        return setIsValidFn(validateFarmSize);
      default:
        break;
    }
  };

  const joinWaitList = () => {
    setIsLoading(true);
    const userNumber =
      userDetails.phone_number.charAt(0) === "0"
        ? userDetails.phone_number.slice(1)
        : userDetails.phone_number;
    const newUserDetails = {
      ...userDetails,
      phone_number: `${getCountryCodeValue(selectedCountry?.idd)}${userNumber}`,
    };
    if (process.env.NEXT_PUBLIC_JOIN_WAITLIST) {
      axios
        .post(process.env.NEXT_PUBLIC_JOIN_WAITLIST, newUserDetails)
        .then((response) => {
          if (response?.status <= 400) {
            toast({
              title: "Success!",
              position: "top-right",
              description: "You've been added to our waitlist.",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            setUserDetails({
              full_name: "",
              phone_number: "",
              email: "",
              farm_country: "",
              farm_size: "",
            });
            router.push("/waitlist-confirmed");
          } else {
            toast({
              title: "Error!",
              position: "top-right",
              description: response?.data?.message ?? "Something went wrong.",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
        })
        .catch((error) => {
          console.log("error", error);
          toast({
            title: "Error!",
            position: "top-right",
            description: error?.response?.data?.error ?? "Something went wrong",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return {
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
  };
};

export default useWaitlistLogic;
