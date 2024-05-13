"use client";

import { Box, Text } from "@chakra-ui/react";
import nigcomsat from "../../../../public/icons/collaborators/nigcomsat.svg";
import nigcomsatActive from "../../../../public/icons/collaborators/nigcomsat-active.svg";
import googleCloud from "../../../../public/icons/collaborators/google-cloud.svg";
import nasa from "../../../../public/icons/collaborators/nasa.svg";
import esa from "../../../../public/icons/collaborators/european-space-agncy.svg";
import fundIt from "../../../../public/icons/collaborators/fund-it.svg";
import fundItActive from "../../../../public/icons/collaborators/fund-it-active.svg";
import kotani from "../../../../public/icons/collaborators/kotani.svg";
import coCreation from "../../../../public/icons/collaborators/co-creation.svg";
import coCreationActive from "../../../../public/icons/collaborators/co-creation-active.svg";
import Image from "next/image";
import { useState } from "react";
import "../animation.css";

const Collaboration = () => {
  const collaborators = [
    {
      name: "nigcomsat",
      icon: nigcomsat,
      active_icon: nigcomsatActive,
    },
    {
      name: "google cloud",
      icon: googleCloud,
      active_icon: null,
    },
    {
      name: "nasa",
      icon: nasa,
      active_icon: null,
    },
    {
      name: "european space agency",
      icon: esa,
      active_icon: null,
    },
    {
      name: "fund it forward",
      icon: fundIt,
      active_icon: fundItActive,
    },
    {
      name: "kotani pay",
      icon: kotani,
      active_icon: null,
    },
    {
      name: "co creation hub",
      icon: coCreation,
      active_icon: coCreationActive,
    },
  ];

  const [currentItem, setCurrentItem] = useState("");

  const getCurrentDisplayIcon = (item: {
    name: string;
    icon: string;
    active_icon: string;
  }) => {
    if (currentItem === item.name) {
      if (item.active_icon !== null) {
        return item.icon;
        // return item.active_icon;
      } else {
        return item.icon;
      }
    } else {
      return item.icon;
    }
  };

  return (
    <Box mt="200px" id="climate-change">
      <Text
        as="h3"
        fontWeight="450"
        color="brand.darkGrey"
        textAlign="center"
        mb={6}
      >
        In Collaboration with
      </Text>
      <Box
        padding="10px 48px 10px 48px"
        rounded="32px"
        bgColor="white"
        overflow="hidden"
        whiteSpace="nowrap"
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {collaborators.map((item) => (
            <Box
              key={item.name}
              onMouseEnter={() => setCurrentItem(item.name)}
              onMouseLeave={() => setCurrentItem("")}
              width="fit-content"
              // padding={currentItem !== item.name ? "12px 24px 12px 24px" : ''}
              //  transition="opacity 0.3s ease"
              transitionDelay="0.1s"
              transitionProperty="opacity"
              _hover={{ opacity: 0.8 }}
            >
              <Image
                src={getCurrentDisplayIcon(item)}
                alt={`${item.name} icon`}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Collaboration;
