import { Box, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../../public/icons/logo.svg";
import grass from "../../../public/images/footer-grass.png";
import grassMobile from "../../../public/images/footer-grass-mobile.png";
import Link from "next/link";
import twitter from "../../../public/icons/socials/twitter.svg";
import instagram from "../../../public/icons/socials/instagram.svg";
import telegram from "../../../public/icons/socials/telegram.svg";
import { suisse } from "@/fonts";
import "./index.css";
import Navbar from "@/components/common/Navbar";

const WaitlistConfirmed = () => {
  const icons = [
    {
      icon: twitter,
      link: "https://twitter.com/agrifyafrica",
      name: "twitter",
    },
    {
      icon: instagram,
      link: "https://www.instagram.com/agrifyafrica/",
      name: "instagram",
    },
    {
      icon: telegram,
      link: "https://t.me/+LzukavSm-9MxY2Y8",
      name: "telegram",
    },
  ];

  return (
    <Flex
      height={{ base: "100%", lg: "100vh" }}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box>
        <Box>
          <Box display={{ base: "block", lg: "none" }}>
            <Navbar />
          </Box>
          <Box display={{ base: "none", lg: "block" }}>
            <Link href="/" style={{ position: "absolute", top: 40, left: 64 }}>
              <Image src={logo} alt="agrify logo icon" />
            </Link>
          </Box>
        </Box>
        <Box
          fontFamily={suisse.style.fontFamily}
          maxW="500px"
          mx="auto"
          textAlign="center"
          display="flex"
          flexDir="column"
          height={{ base: "50vh", lg: "100%" }}
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          px={{ base: 8, lg: 0 }}
        >
          <Text
            fontWeight="500"
            fontSize={{ base: "24px", lg: "40px" }}
            lineHeight={{ base: "28.8px", lg: "48px" }}
          >
            You are on the waitlist!
          </Text>
          <Text lineHeight="19.2px" textColor="brand.darkGrey" mt={4} mb={8}>
            Stay updated on our ecosystem to learn about new product updates
          </Text>
          <Box
            display="flex"
            gap={4}
            transition="all 0.3s ease-in-out"
            justifyContent="center"
          >
            {icons.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="social-icons"
                target="_blank"
              >
                <Image src={item.icon} alt={`${item.name} social logo`} />
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        position="fixed"
        bottom={0}
        left="-2.5px"
      >
        <Image src={grass} alt="footer grass" />
      </Box>
      <Box display={{ base: "block", md: "none" }} position="fixed" bottom={0}>
        <Image src={grassMobile} alt="footer grass" />
      </Box>
    </Flex>
  );
};

export default WaitlistConfirmed;
