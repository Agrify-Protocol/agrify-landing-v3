import { useState } from "react";
import { validateEmail, validateNameInput } from "../validationSchema";

const useInvestInNatureFormLogic = () => {
  const [fields, setFields] = useState([
    {
      title: "Email Address",
      placeholder: "Enter Email Address",
      id: "email",
      type: "email",
      value: "",
      isInValid: false,
      errorMessage: "Email address must be valid.",
    },
    {
      title: "First Name",
      placeholder: "Enter First Name",
      type: "text",
      id: "first_name",
      value: "",
      errorMessage:
        "First name must be at least 4 characters long and may not contain numbers.",
      isInValid: false,
    },
    {
      title: "Last Name",
      placeholder: "Enter Last Name",
      id: "last_name",
      type: "text",
      value: "",
      errorMessage:
        "Last name must be at least 4 characters long and may not contain numbers.",
      isInValid: false,
    },
    {
      title: "Company Name",
      id: "company_name",
      placeholder: "Enter Farm Name",
      type: "text",
      value: "",
      isInValid: false,
    },
    {
      title: "Select Your Role",
      id: "role_name",
      placeholder: "Select Your Role",
      type: "select",
      value: "Nature Investor/Financier",
      options: [
        "Nature Investor/Financier",
        "Corporate Insetting",
        "Project Developer",
        "Off-taker",
        "I don't know yet , currently exploring",
      ],
      isInValid: false,
    },
    {
      title: "How interested are you in working with Agrify?",
      id: "interest",
      placeholder: "Indicate Your Interest",
      type: "text-area",
      value: "",
      isInValid: false,
    },
  ]);

  const finalObj = fields.reduce(
    (acc, item) => ({ ...acc, [item.id]: item.value }),
    {}
  );

  const validateInput = (id: string, value: string) => {
    switch (id) {
      case "first_name":
      case "last_name":
        return validateNameInput(value);
      case "email":
        return validateEmail(value);
      default:
        return false;
    }
  };

  const handleFormOnChange = (
    e: { target: { name: string; value: string } },
    index: number,
    id: string
  ) => {
    setFields((prev) => {
      const updatedFields = [...prev];
      updatedFields[index] = {
        ...updatedFields[index],
        value: e.target.value,
        isInValid:
          e.target.value === "" ? false : validateInput(id, e.target.value),
      };
      return updatedFields;
    });
  };

  return { fields, handleFormOnChange, finalObj };
};

export default useInvestInNatureFormLogic;
