import React from "react";
import Navbar from "../Navbar";
import { Box } from "@chakra-ui/react";
import Connect from "@/components/sections/Connect";
import Faq from "@/components/sections/Faq";

type ShellProps = {
  menu: {
    title: string;
    action: () => void;
  }[];
  btn: React.ReactNode;
  children: React.ReactNode;
  [others: string]: any;
};

const Shell = ({ menu, btn, children, ...others }: ShellProps) => {
  return (
    <Box maxW="1800px" mx="auto" {...others}>
      <Navbar menu={menu} btn={btn} />
      <Box px={{ base: 3, lg: 4 }} pb={1}>
        {children}
        <Faq />
        <Connect />
      </Box>
    </Box>
  );
};

export default Shell;
