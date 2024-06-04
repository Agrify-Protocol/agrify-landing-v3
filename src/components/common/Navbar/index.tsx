"use client";

import {
  Box,
  List,
  UnorderedList,
  Text,
  Drawer,
  DrawerBody,
  DrawerContent,
} from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../../../public/icons/logo.svg";
import Link from "next/link";
import { suisse } from "@/fonts";
import CustomButton from "../CustomButton";
import handleScroll from "@/utils/handleScroll";
import hamburger from "../../../../public/icons/hamburger-open.svg";
import hamburgerClose from "../../../../public/icons/hamburger-close.svg";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import "../../../components/sections/animation.css";

const Navbar = () => {
  const router = useRouter();
  const menu = [
    {
      title: "About",
      action: () => handleScroll("climate-change"),
    },
    {
      title: "For Businesses",
      action: () => router.push("/business"),
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };
  const pathname = usePathname();

  return (
    <>
      <Box
        px={16}
        fontFamily={suisse.style.fontFamily}
        display={{ base: "none", lg: "flex" }}
        alignItems="center"
        justifyContent="space-between"
        paddingTop={10}
        paddingBottom={4}
        position="sticky"
        top={0}
        background="rgba(245, 245, 247, 0.1)"
        backdropFilter="blur(12px)"
        zIndex={10}
      >
        <Link href="/" style={{ outline: "none" }}>
          <Image src={logo} alt="agrify logo icon" />
        </Link>
        <Box>
          <UnorderedList mx={0} display="flex" gap={4}>
            {menu.map((item) => (
              <List
                key={item.title}
                transition="all 0.3s ease-in-out"
                _hover={{
                  textColor: "brand.green",
                }}
                color="brand.mainBlack"
                cursor="pointer"
                onClick={item.action}
              >
                <Text>{item.title}</Text>
              </List>
            ))}
          </UnorderedList>
        </Box>
        <CustomButton
          text="Join the Waitlist"
          onClick={() => handleScroll("join-waitlist")}
        />
      </Box>
      <Box
        px={4}
        pt={6}
        pb={4}
        fontFamily={suisse.style.fontFamily}
        display={{ base: "flex", lg: "none" }}
        justifyContent="space-between"
        position="sticky"
        top={0}
        background="rgba(245, 245, 247, 0.1)"
        backdropFilter="blur(12px)"
        zIndex={10}
      >
        <Box py={2} onClick={() => setIsMenuOpen(true)}>
          <Image src={hamburger} alt="hamburger menu icon" />
        </Box>
        {pathname.includes("/waitlist-confirmed") ? null : (
          <CustomButton
            text="Join the waitlist"
            variant="outline"
            onClick={() => handleScroll("join-waitlist")}
          />
        )}
      </Box>
      <Drawer
        isOpen={isMenuOpen}
        onClose={handleClose}
        size="full"
        isFullHeight
        placement="top"
      >
        <DrawerContent
          className={`drawer-content ${isClosing ? "closing" : ""}`}
          boxShadow="none"
        >
          <DrawerBody px={4} pt={6} pb={4}>
            <Box
              justifyContent="space-between"
              alignItems="center"
              display="flex"
              mb="56px"
            >
              <Box py={2} onClick={handleClose}>
                <Image src={hamburgerClose} alt="close hamburger menu icon" />
              </Box>
              <Link href="/" style={{ width: "91.81px", outline: "none" }}>
                <Image src={logo} alt="agrify logo icon" />
              </Link>
            </Box>
            <UnorderedList
              mx={0}
              display="flex"
              flexDir="column"
              gap={8}
              fontSize="18px"
            >
              {menu.map((item) => (
                <List
                  key={item.title}
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    textColor: "brand.green",
                  }}
                  color="brand.mainBlack"
                  cursor="pointer"
                  onClick={() => {
                    handleClose();
                    pathname.includes("/waitlist-confirmed")
                      ? router.push("/")
                      : handleScroll("climate-change");
                  }}
                >
                  <Text>{item.title}</Text>
                </List>
              ))}
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
