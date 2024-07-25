"use client";

import { validateEmail, validateFarmSize } from "@/utils/validationSchema";
import { useState } from "react";
import Carousel from "../view/Carousel";
import Country from "../view/sections/Country";
import Email from "../view/sections/Email";
import FactorWrapper from "../view/sections/Factors";
import countryList from "../../../../const/countryList.json";
import Footprint from "../view/sections/Footprint";
import distance from "../../../../../public/icons/calculator/transportation.svg";
import waste from "../../../../../public/icons/calculator/waste.svg";
import meal from "../../../../../public/icons/calculator/food.svg";
import electricity from "../../../../../public/icons/calculator/electricity.svg";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const useCarbonCalculatorLogic = () => {
  const [step, setStep] = useState(0);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const initialDetails = {
    email: "",
    country: countryList[0],
    distance: "",
    waste: "",
    electricity: "",
    meal: "",
  };
  const [details, setDetails] = useState(initialDetails);
  const [isInputInvalid, setIsInputInvalid] = useState({
    email: false,
    distance: false,
    waste: false,
    electricity: false,
    meal: false,
  });

  const calculateCarbon = () => {
    setIsLoading(true);

    const detailsCopy = { ...details };
    // @ts-ignore
    delete detailsCopy.email;

    if (process.env.NEXT_PUBLIC_CALCULATE_CARBON_EMISSION) {
      axios
        .post(process.env.NEXT_PUBLIC_CALCULATE_CARBON_EMISSION, {
          ...detailsCopy,
          country: detailsCopy.country.name.common,
        })
        .then((response) => {
          if (response?.status <= 400) {
            setResult(response?.data);
            toast({
              title: "Success!",
              position: "top-right",
              description:
                response?.data?.message ??
                "Carbon footsprint calculated successfully!",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            setDetails(initialDetails);
            setStep((prev) => prev + 1);
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
          toast({
            title: "Error!",
            position: "top-right",
            description:
              error?.response?.data?.error ?? "Something went wrong.",
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

  const btn = (step: number) => {
    return [
      {
        title: "Back",
        action: () => setStep((prev) => prev - 1),
      },
      {
        title: "Next",
        action: () =>
          step !== 5 ? setStep((prev) => prev + 1) : calculateCarbon(),
      },
    ];
  };

  const onChange = (e: { target: { name: string; value: string } }) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === "email") {
      setIsInputInvalid((prev) => ({
        ...prev,
        email: validateEmail(e.target.value),
      }));
    } else if (
      ["distance", "waste", "electricity", "meal"].includes(e.target.name)
    ) {
      setIsInputInvalid((prev) => ({
        ...prev,
        [e.target.name]: validateFarmSize(e.target.value),
      }));
    }
  };

  const currentBody = () => {
    switch (step) {
      case 0:
        return {
          body: (
            <Carousel step={step}>
              <Email
                details={details}
                onChange={onChange}
                isEmailInvalid={isInputInvalid}
              />
            </Carousel>
          ),
          btn: btn(step).filter((_item, index) => index != 0),
          isDisabled: details.email === "" || isInputInvalid.email,
        };
      case 1:
        return {
          body: (
            <Carousel step={step}>
              <Country details={details} setDetails={setDetails} />
            </Carousel>
          ),
          btn: btn(step),
          isDisabled: false,
        };
      case 2:
        return {
          body: (
            <FactorWrapper
              details={details}
              icon={distance}
              alt="distance icon"
              title="Transportation"
              step={step}
              name="distance"
              question="What is your daily commute distance in km?"
              options={["km/day", "km/week", "km/month"]}
              isInvalid={isInputInvalid.distance}
              onChange={onChange}
              setIsInputInvalid={setIsInputInvalid}
            />
          ),
          btn: btn(step),
          isDisabled: details?.distance === "" || isInputInvalid.distance,
        };
      case 3:
        return {
          body: (
            <FactorWrapper
              details={details}
              icon={waste}
              alt="waste icon"
              title="Waste"
              name="waste"
              step={step}
              question="What is your weekly generated waste in kg?"
              options={["kg/day", "kg/week", "kg/month"]}
              isInvalid={isInputInvalid.waste}
              onChange={onChange}
              setIsInputInvalid={setIsInputInvalid}
            />
          ),
          btn: btn(step),
          isDisabled: details?.waste === "" || isInputInvalid.waste,
        };
      case 4:
        return {
          body: (
            <FactorWrapper
              details={details}
              icon={electricity}
              alt="electricity icon"
              title="Electricity"
              name="electricity"
              step={step}
              question="What is your monthly electricity consumption in kwh?"
              options={["kwh/day", "kwh/week", "kwh/month"]}
              isInvalid={isInputInvalid.electricity}
              onChange={onChange}
              setIsInputInvalid={setIsInputInvalid}
            />
          ),
          btn: btn(step),
          isDisabled: details?.electricity === "" || isInputInvalid.electricity,
        };
      case 5:
        return {
          body: (
            <FactorWrapper
              details={details}
              icon={meal}
              alt="meal icon"
              name="meal"
              title="Meal"
              step={step}
              question="What is your daily number of meals?"
              isInvalid={isInputInvalid.meal}
              onChange={onChange}
              setIsInputInvalid={setIsInputInvalid}
            />
          ),
          btn: btn(step),
          isDisabled: details?.meal === "" || isInputInvalid.meal,
        };
      case 6:
        return {
          body: (
            <Carousel step={step}>
              <Footprint email={details.email} result={result} />
            </Carousel>
          ),
          btn: btn,
          isDisabled: false,
        };
      default:
        return { body: null, btn: btn, isDisabled: false };
    }
  };
  return { step, currentBody, details, isLoading, result };
};

export default useCarbonCalculatorLogic;
