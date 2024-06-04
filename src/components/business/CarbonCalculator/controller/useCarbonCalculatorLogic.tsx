"use client";

import { validateEmail, validateFarmSize } from "@/utils/validationSchema";
import { useState } from "react";
import Carousel from "../view/Carousel";
import Country from "../view/sections/Country";
import Email from "../view/sections/Email";
import FactorWrapper from "../view/sections/Factors";
import countryList from "../../../../const/countryList.json";
import Footprint from "../view/sections/Footprint";
import transportation from "../../../../../public/icons/calculator/transportation.svg";
import waste from "../../../../../public/icons/calculator/waste.svg";
import food from "../../../../../public/icons/calculator/food.svg";
import electricity from "../../../../../public/icons/calculator/electricity.svg";

const useCarbonCalculatorLogic = () => {
  const [step, setStep] = useState(0);
  const [details, setDetails] = useState({
    email: "",
    country: countryList[0],
    transportation: "",
    waste: "",
    electricity: "",
    food: "",
  });
  const [isInputInvalid, setIsInputInvalid] = useState({
    email: false,
    transportation: false,
    waste: false,
    electricity: false,
    food: false,
  });
  const btn = [
    {
      title: "Back",
      action: () => setStep((prev) => prev - 1),
    },
    {
      title: "Next",
      action: () => setStep((prev) => prev + 1),
    },
  ];

  const onChange = (e: { target: { name: string; value: string } }) => {
    console.log("e.target.name", e.target.name);
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === "email") {
      setIsInputInvalid((prev) => ({
        ...prev,
        email: validateEmail(e.target.value),
      }));
    } else if (
      ["transportation", "waste", "electricity"].includes(e.target.name)
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
          btn: btn.filter((_item, index) => index != 0),
          isDisabled: details.email === "" || isInputInvalid.email,
        };
      case 1:
        return {
          body: (
            <Carousel step={step}>
              <Country details={details} setDetails={setDetails} />
            </Carousel>
          ),
          btn: btn,
          isDisabled: false,
        };
      case 2:
        return {
          body: (
            <FactorWrapper
              details={details}
              icon={transportation}
              alt="transportation icon"
              title="Transportation"
              step={step}
              name="transportation"
              question="What is your daily commute distance in km?"
              options={["km/day", "km/week", "km/month"]}
              isInvalid={isInputInvalid.transportation}
              onChange={onChange}
              setIsInputInvalid={setIsInputInvalid}
            />
          ),
          btn: btn,
          isDisabled:
            details?.transportation === "" || isInputInvalid.transportation,
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
              question="What is your generated waste in kg?"
              options={["kg/day", "kg/week", "kg/month"]}
              isInvalid={isInputInvalid.waste}
              onChange={onChange}
              setIsInputInvalid={setIsInputInvalid}
            />
          ),
          btn: btn,
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
              question="What is your electricity consumption in kwh?"
              options={["kwh/day", "kwh/week", "kwh/month"]}
              isInvalid={isInputInvalid.electricity}
              onChange={onChange}
              setIsInputInvalid={setIsInputInvalid}
            />
          ),
          btn: btn,
          isDisabled: details?.electricity === "" || isInputInvalid.electricity,
        };
      case 5:
        return {
          body: (
            <FactorWrapper
              details={details}
              icon={food}
              alt="food icon"
              name="food"
              title="Meal"
              step={step}
              question="What is your daily number of meals?"
              isInvalid={isInputInvalid.food}
              onChange={onChange}
              setIsInputInvalid={setIsInputInvalid}
            />
          ),
          btn: btn,
          isDisabled: details?.food === "" || isInputInvalid.food,
        };
      case 6:
        return {
          body: (
            <Carousel step={step}>
              <Footprint />
            </Carousel>
          ),
          btn: btn,
          isDisabled: details?.food === "" || isInputInvalid.food,
        };
      default:
        return { body: null, btn: btn, isDisabled: false };
    }
  };
  return { step, currentBody };
};

export default useCarbonCalculatorLogic;
