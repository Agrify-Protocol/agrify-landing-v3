import { Box, Text } from "@chakra-ui/react";
import SectionButton from "@/components/common/SectionButton";
import { pangaia } from "@/fonts";
import learn from "../../../../public/images/product-learn.png";
import earn from "../../../../public/images/product-earn.png";
import turn from "../../../../public/images/product-turn.png";
import ActionCard from "./ActionCard";

const Product = () => {
  const cards = [
    {
      action: "Learn",
      title: "with AI Powered Insights",
      text: "Gain farming intelligence with our AI powered Regenerative Score, that gives you tasks to accomplish in order to verify that your farming practices have sequestered carbon and avoided deforestation, improving crop yield and likelihood of finding produce buyers. ",
      img: learn,
    },
    {
      action: "Earn",
      title: "from carbon credit sales",
      text: "Validate carbon captured from your farm and generate tokenised carbon credits, that can be sold to companies looking to meet ESG, Net Zero, SDG or CSR targets by backing farms that capture carbon, enhance biodiversity and provide jobs. ",
      img: earn,
    },
    {
      action: "Turn",
      title: "into an export powerhouse",
      text: "Reach buyers all around interested in decarbonising their supply chains through supply insetting. By proving your farm has captured carbon and avoided deforestation you can increase the likelihood of gaining certificates to export to numerous countries globally.",
      img: turn,
    },
  ];
  return (
    <Box bgColor="white" rounded="24px" py="78px" px="150px">
      <Box mb="104px">
        <SectionButton title="Product" width="fit-content" mx="auto" mb={4} />
        <Text
          fontFamily={pangaia.style.fontFamily}
          fontWeight="200"
          fontSize="32px"
          textAlign="center"
        >
          With Agrify Farmers Can
        </Text>
      </Box>
      <Box display="flex" gap="120px" flexDirection="column">
        {cards.map((card, index) => (
          <ActionCard
            key={card.title}
            action={card.action}
            title={card.title}
            text={card.text}
            img={card.img}
            isReversed={index % 2 !== 0}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Product;
