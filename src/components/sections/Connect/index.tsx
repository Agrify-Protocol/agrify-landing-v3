import { pangaia, suisse } from "@/fonts";
import { Box, Text } from "@chakra-ui/react";
import SocialCard from "./SocialCard";
import twitter from "../../../../public/icons/socials/twitter.svg";
import linkedin from "../../../../public/icons/socials/linkedin.svg";
import telegram from "../../../../public/icons/socials/telegram.svg";
import email from "../../../../public/icons/socials/email.svg";
import Image from "next/image";
import grass from "../../../../public/images/footer-grass.png";
import mobileGrass from "../../../../public/images/footer-grass-mobile.png";

const Connect = () => {
  const social = [
    {
      icon: twitter,
      text: "Twitter",
      link: "#",
      rotation: "rotate(-2deg)",
      hover: "rotate(-6deg)",
    },
    {
      icon: linkedin,
      text: "LinkedIn",
      link: "#",
      rotation: "rotate(2.74deg)",
      hover: "rotate(6.2deg)",
    },
    {
      icon: telegram,
      text: "Telegram",
      link: "#",
      rotation: "",
      hover: "rotate(-3deg)",
    },
    {
      icon: email,
      text: "Email",
      link: "mailto:agrify@gmail.com",
      rotation: "rotate(2.74deg)",
      hover: "rotate(-2.74deg)",
    },
  ];
  return (
    <Box
      bgColor="white"
      mt={{ base: "144px", lg: "234px" }}
      pt={{ base: "45px", lg: "72px" }}
      rounded={{ base: "16px", lg: "24px" }}
    >
      <Box px={{ base: "16px", lg: "36.65px" }}>
        <Text
          fontFamily={pangaia.style.fontFamily}
          fontWeight="200"
          fontSize="16px"
          bg="brand.lightGrey"
          padding="8px 22.68px"
          width="fit-content"
          rounded="30.24px"
          mb={8}
        >
          Connect with us
        </Text>
        <Box
          display="flex"
          gap={{ base: "9px", lg: 0 }}
          flexDir={{ base: "column", md: "row" }}
          flexWrap={{ base: "nowrap", md: "wrap" }}
          mb="104px"
          justifyContent="center"
          width={{ base: "100%", md: "100%" }}
          mx={{ base: "0", md: "auto" }}
        >
          {social.map((item) => (
            <SocialCard
              key={item.text}
              icon={item.icon}
              text={item.text}
              link={item.link}
              rotation={item.rotation}
              hover={item.hover}
            />
          ))}
        </Box>
        <Text
          pt="72px"
          fontFamily={suisse.style.fontFamily}
          fontSize="17.01px"
          letterSpacing="-2%"
          color="brand.lighterGrey"
          display={{ base: "none", lg: "block" }}
        >
          &#169; Agrify Technologies Inc. All rights reserved.
        </Text>
      </Box>
      <Box display={{ base: "none", md: "block" }}>
        <Image
          src={grass}
          alt="footer grass"
          style={{
            borderRadius: "24px",
            marginTop: "60.71px",
          }}
        />
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <Image
          src={mobileGrass}
          alt="footer grass"
          style={{
            borderRadius: "16px",
            marginTop: "60.71px",
          }}
        />
      </Box>
    </Box>
  );
};

export default Connect;
