import { Box, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../../public/icons/logo.svg";
import grass from "../../../public/images/footer-grass.png";
import Link from "next/link";
import twitter from "../../../public/icons/socials/twitter.svg";
import instagram from "../../../public/icons/socials/instagram.svg";
import telegram from "../../../public/icons/socials/telegram.svg";
import { suisse } from "@/fonts";
import "./index.css";

const WaitlistConfirmed = () => {
  const icons = [
    { icon: twitter, link: "#", name: "twitter" },
    { icon: instagram, link: "#", name: "instagram" },
    { icon: telegram, link: "#", name: "telegram" },
  ];

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box>
        <Link href="/" style={{ position: "absolute", top: 40, left: 64 }}>
          <Image src={logo} alt="agrify logo icon" />
        </Link>
        <Box
          fontFamily={suisse.style.fontFamily}
          maxW="500px"
          mx="auto"
          textAlign="center"
        >
          <Text fontWeight="500" fontSize="40px" lineHeight="48px">
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
              <Link key={item.name} href={item.link} className="social-icons">
                <Image src={item.icon} alt={`${item.name} social logo`} />
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
      <Box position="fixed" bottom={0} left="-2.5px">
        <Image src={grass} alt="footer grass" />
      </Box>
    </Flex>
  );
};

export default WaitlistConfirmed;
