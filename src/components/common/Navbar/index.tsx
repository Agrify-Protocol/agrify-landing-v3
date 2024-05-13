"use client";

import { Box, List, UnorderedList, Text } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../../../public/icons/logo.svg";
import Link from "next/link";
import { suisse } from "@/fonts";
import CustomButton from "../CustomButton";
import handleScroll from "@/utils/handleScroll";

const Navbar = () => {
  const menu = [
    {
      title: "About",
      path: "#",
    },
    {
      title: "For Businesses",
      path: "#",
    },
  ];

  return (
    <Box
      px={16}
      fontFamily={suisse.style.fontFamily}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      paddingTop={10}
      paddingBottom={4}
      position="sticky"
      top={0}
      background="rgba(245, 245, 247, 0.1)"
      backdropFilter="blur(90px)"
      zIndex={10}
    >
      <Link href="/">
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
              onClick={() => handleScroll('climate-change')}
            >
              <Text>{item.title}</Text>
            </List>
          ))}
        </UnorderedList>
      </Box>
      <CustomButton text="Join the Waitlist" onClick={() => handleScroll('join-waitlist')} />
    </Box>
  );
};

export default Navbar;
