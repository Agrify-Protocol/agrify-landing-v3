"use client";

import SectionButton from "@/components/common/SectionButton";
import { pangaia, suisse } from "@/fonts";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import plusIcon from "../../../../public/icons/add.svg";
import minusIcon from "../../../../public/icons/minus.svg";
import Image from "next/image";
import questions from "./mock.json";

const Faq = () => {
  return (
    <Box px="49px">
      <SectionButton title="Questions" />
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Text
            fontFamily={pangaia.style.fontFamily}
            fontWeight="200"
            fontSize="48px"
            letterSpacing="-0.6%"
          >
            FAQ
          </Text>
        </Box>
        <Box width="630px">
          <Accordion allowMultiple>
            {questions.map((item, index) => (
              <AccordionItem
                key={item.title}
                border="none"
                borderBottom="1px dashed #0F0F0F26"
                mb={index !== questions.length - 1 ? 8 : 0}
                width="100%"
              >
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      _hover={{ backgroundColor: "transparent" }}
                      display="flex"
                      gap={4}
                    >
                      {isExpanded ? (
                        <Image
                          src={minusIcon}
                          alt="minus icon to close accordion"
                        />
                      ) : (
                        <Image
                          src={plusIcon}
                          alt="plus icon to expand accordion"
                        />
                      )}
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontFamily={suisse.style.fontFamily}
                        fontWeight="300"
                        fontSize="18px"
                        letterSpacing="-2%"
                      >
                        {item.title}
                      </Box>
                    </AccordionButton>
                    <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default Faq;
