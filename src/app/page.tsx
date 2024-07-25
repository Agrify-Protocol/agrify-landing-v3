"use client";

import Hero from "@/components/sections/Hero";
import Collaboration from "@/components/sections/Collaboration";
import ClimateChange from "@/components/sections/ClimateChange";
import Product from "@/components/sections/Product";
import HowItWorks from "@/components/sections/HowItWorks";
import Partners from "@/components/sections/Partners";
import Shell from "@/components/common/Shell";
import handleScroll from "@/utils/handleScroll";
import CustomButton from "@/components/common/CustomButton";
import { sendGAEvent } from "@next/third-parties/google";
import agrifyHero from "../../public/images/agrify.png";
import agrifyHeroMobile from "../../public/images/agrify-mobile.png";
import useHomeLogic from "@/utils/hooks/useHomeLogic";

const Home = () => {
  const { NoSSRWaitlist, menu } = useHomeLogic();

  return (
    <Shell
      menu={menu}
      btn={
        <CustomButton
          text="Join the Waitlist"
          onClick={() => handleScroll("join-waitlist")}
        />
      }
      backgroundColor="brand.grey"
    >
      <Hero
        title="Helping Farmers improve yield, earn carbon income and qualify for
          international exports"
        backgroundColor="white"
        btn={
          <CustomButton
            text="Learn More"
            variant="solid"
            onClick={() => {
              handleScroll("climate-change");
              sendGAEvent("event", "farmers-learn-more", { value: "view" });
            }}
            padding={{ base: "12px 24px 12px 24px" }}
          />
        }
        img={{
          desktop: agrifyHero,
          mobile: agrifyHeroMobile,
          alt: "agrify farmers hero image",
        }}
      />
      <Collaboration />
      <ClimateChange />
      <Product />
      <HowItWorks />
      <NoSSRWaitlist />
      <Partners />
    </Shell>
  );
};

export default Home;
