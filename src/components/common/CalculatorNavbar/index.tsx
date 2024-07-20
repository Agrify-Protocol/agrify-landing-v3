"use client";

import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../../../public/icons/logo.svg";
import Link from "next/link";
import { suisse } from "@/fonts";
import "../../../components/sections/animation.css";

const CalculatorNavbar = () => {
  const menu = [
    {
      title: "Log In",
      path: "#",
    },
    {
      title: "Sign Up",
      path: "#",
    },
  ];

  return (
    <>
      <Box
        px={16}
        fontFamily={suisse.style.fontFamily}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingTop={10}
        position="sticky"
        top={0}
        background="rgba(245, 245, 247, 0.1)"
        backdropFilter="blur(12px)"
        zIndex={10}
      >
        <Link href="/" style={{ outline: "none", display: "block", width: "fit-content" }}>
          <Image src={logo} alt="agrify logo icon" />
        </Link>
        <Box>
          {menu.map((item, index) => (
            <Button
              key={item.title}
              fontWeight="400"
              color="brand.mainBlack"
              rounded="28px"
              p="12px 24px"
              transition="all 0.2s ease-in-out"
              outline="none"
              _active={index > 1 ? "transparent" : ""}
              background={index === 1 ? "#ececee" : "transparent"}
              fontFamily={suisse.style.fontFamily}
              _hover={{
                background: index === 1 && "#d6d6dc",
                fontWeight: index !== 1 && "600",
              }}
            >
              {item.title}
            </Button>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default CalculatorNavbar;
