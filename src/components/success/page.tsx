import { Box, Text, Flex } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import logo from "../../../public/icons/logo.svg";
import grass from "../../../public/images/footer-grass.png";
import grassMobile from "../../../public/images/footer-grass-mobile.png";
import Link from "next/link";
import { suisse } from "@/fonts";
import "./index.css";
import Navbar from "@/components/common/Navbar";

interface SuccessProps {
  socials: {
    icon: StaticImageData;
    link: string;
    name: string;
  }[];
  logoLink: string;
  title: string;
  subtitle: string;
}

const Success = ({ socials, logoLink, title, subtitle }: SuccessProps) => {
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
            <Navbar menu={[]} btn={null} />
          </Box>
          <Box display={{ base: "none", lg: "block" }}>
            <Link
              href={logoLink}
              style={{ position: "absolute", top: 40, left: 64 }}
            >
              <Image src={logo} alt="agrify logo icon" />
            </Link>
          </Box>
        </Box>
        <Box
          fontFamily={suisse.style.fontFamily}
          maxW="700px"
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
            {title}
          </Text>
          <Text lineHeight="19.2px" textColor="brand.darkGrey" mt={4} mb={8}>
            {subtitle}
          </Text>
          <Box
            display="flex"
            gap={4}
            transition="all 0.3s ease-in-out"
            justifyContent="center"
          >
            {socials.map((item) => (
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

export default Success;
