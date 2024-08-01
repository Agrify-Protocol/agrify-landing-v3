import { suisse } from "@/fonts";
import { Box, Text } from "@chakra-ui/react";
import transporation from "../../../../../../public/icons/calculator/ctransportation.svg";
import waste from "../../../../../../public/icons/calculator/cwaste.svg";
import electricity from "../../../../../../public/icons/calculator/celectricity.svg";
import food from "../../../../../../public/icons/calculator/cfood.svg";
import Image from "next/image";
import CustomButton from "@/components/common/CustomButton";
import { useRouter } from "next/navigation";

interface FootprintProps {
  email: string;
  result: any;
}

const Footprint = ({ email, result }: FootprintProps) => {
  const { emission } = result;
  const cards = [
    {
      icon: transporation,
      title: "Transportation",
    },
    {
      icon: waste,
      title: "Waste",
    },
    {
      icon: electricity,
      title: "Electricity",
    },
    {
      icon: food,
      title: "Meals",
    },
  ];

  const router = useRouter();
  return (
    <Box fontFamily={suisse.style.fontFamily}>
      <Box textAlign="center">
        <Text fontSize="12.72px" textColor="brand.darkGrey">
          Your Carbon Footprint
        </Text>
        <Text
          fontSize={{ base: "20px", lg: "24px" }}
          fontWeight="500"
          letterSpacing="-2%"
        >
          {Number(emission).toLocaleString()} tonnes C02/year
        </Text>
      </Box>
      <Box my={10} display="flex" flexDir="column" gap={{ base: "6px", lg: 2 }}>
        {cards.map((item) => (
          <Box
            key={item.title}
            display="flex"
            justifyContent="space-between"
            p={{ base: "15px 14px", lg: "19px 18px" }}
            backgroundColor="white"
            rounded="8.48px"
            flexWrap="wrap"
          >
            <Box display="flex" alignItems="center" gap="6px">
              <Box>
                <Image src={item.icon} alt={`${item.title} icon`} />
              </Box>
              <Text
                fontSize={{ base: "12px", lg: "14.84px" }}
                textColor="brand.darkGrey"
              >
                {item.title}
              </Text>
            </Box>
            <Text fontSize={{ base: "13.69px", lg: "16px" }}>
              {Number(emission).toLocaleString()} tonnes C02/year
            </Text>
          </Box>
        ))}
      </Box>
      <Box w="fit-content" mx="auto">
        <CustomButton
          text="Take action"
          variant="solid"
          onClick={() => router.push(`/invest-in-nature?email=${email}`)}
          isLoading={false}
          isDisabled={false}
        />
      </Box>
      <Box p="12px" bg="white" rounded="8.48px" mt={{ base: 6, lg: 12 }}>
        <Text fontSize="12.72px" textColor="brand.darkGrey">
          Elementum donec interdum semper sed fermentum convallis blandit nibh.
          Amet etiam volutpat at maecenas et. Auctor et neque dignissim justo
          ut.
        </Text>
      </Box>
    </Box>
  );
};

export default Footprint;
