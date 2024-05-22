import { Box } from "@chakra-ui/react";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/sections/Hero";
import Collaboration from "@/components/sections/Collaboration";
import ClimateChange from "@/components/sections/ClimateChange";
import Product from "@/components/sections/Product";
import HowItWorks from "@/components/sections/HowItWorks";
import Partners from "@/components/sections/Partners";
import Faq from "@/components/sections/Faq";
import Connect from "@/components/sections/Connect";
import dynamic from "next/dynamic";

const Home = () => {
  const NoSSRWaitlist = dynamic(
    () => import("@/components/sections/Waitlist"),
    { ssr: false }
  );
  return (
    <Box backgroundColor="brand.grey" maxW="1800px" mx="auto">
      <Navbar />
      <Box px={{ base: 3, lg: 4 }} pb={1}>
        <Hero />
        <Collaboration />
        <ClimateChange />
        <Product />
        <HowItWorks />
        <NoSSRWaitlist />
        <Partners />
        <Faq />
        <Connect />
      </Box>
    </Box>
  );
};

export default Home;
