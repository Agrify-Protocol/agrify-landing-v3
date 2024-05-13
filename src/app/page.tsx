import { Box } from "@chakra-ui/react";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/sections/Hero";
import Collaboration from "@/components/sections/Collaboration";
import ClimateChange from "@/components/sections/ClimateChange";
import Product from "@/components/sections/Product";
import HowItWorks from "@/components/sections/HowItWorks";
import Waitlist from "@/components/sections/Waitlist";
import Partners from "@/components/sections/Partners";
import Faq from "@/components/sections/Faq";
import Connect from "@/components/sections/Connect";

const Home = () => {
  return (
    <Box backgroundColor="brand.grey">
      <Navbar />
      <Box px={4} pb={1}>
        <Hero />
        <Collaboration />
        <ClimateChange />
        <Product />
        <HowItWorks />
        <Waitlist />
        <Partners />
        <Faq />
        <Connect />
      </Box>
    </Box>
  );
};

export default Home;
