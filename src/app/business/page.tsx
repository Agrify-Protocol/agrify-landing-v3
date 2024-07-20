"use client";

import CustomButton from "@/components/common/CustomButton";
import Shell from "@/components/common/Shell";
import Hero from "@/components/sections/Hero";
import handleScroll from "@/utils/handleScroll";
import { sendGAEvent } from "@next/third-parties/google";
import agrifyHero from "../../../public/images/business-hero.png";
import Collaboration from "@/components/sections/Collaboration";
import SolutionCard from "@/components/business/SolutionCard";
import { Box } from "@chakra-ui/react";
import CalculatorShot from "@/components/business/CalculatorShot";
import useBusinessLogic from "@/utils/hooks/useBusinessLogic";

const Business = () => {
  const { menu, solutions, router } = useBusinessLogic();

  return (
    <Shell
      menu={menu}
      btn={
        <CustomButton
          text="Invest in Nature"
          variant="solid"
          onClick={() => router.push("/invest-in-nature")}
        />
      }
      backgroundColor="white"
    >
      <Hero
        title="Offset your emissions and decarbonize your supply chain with Regenerative agriculture."
        bgGradient='linear(#F8F5F4, white)'
        btn={
          <CustomButton
            text="Learn More"
            variant="outline"
            onClick={() => {
              handleScroll("solutions");
              sendGAEvent("event", "business-learn-more", { value: "view" });
            }}
            padding={{ base: "12px 24px 12px 24px" }}
          />
        }
        img={{
          desktop: agrifyHero,
          mobile: agrifyHero,
          alt: "agrify business hero image",
        }}
      />
      <Box px={9}>
        <Collaboration />
      </Box>
      <Box display="flex" flexDir="column" gap="83px" pt="144px" px={14} id="solutions">
        {solutions.map((item, index) => (
          <SolutionCard
            key={item.title}
            index={index}
            title={item.title}
            text={item.text}
            img={item.img}
          />
        ))}
      </Box>
      <CalculatorShot />
    </Shell>
  );
};

export default Business;
