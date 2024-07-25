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
  result: any
}

const Footprint = ({ email, result }: FootprintProps) => {
  console.log('result', result)
  const cards = [
    {
      icon: transporation,
      title: "Transportation",
      value: "200 tonnes C02/year",
    },
    {
      icon: waste,
      title: "Waste",
      value: "200 tonnes C02/year",
    },
    {
      icon: electricity,
      title: "Electricity",
      value: "200 tonnes C02/year",
    },
    {
      icon: food,
      title: "Meals",
      value: "200 tonnes C02/year",
    },
  ];

  const router = useRouter();
  return (
    <Box fontFamily={suisse.style.fontFamily}>
      <Box textAlign="center">
        <Text fontSize="12.72px" textColor="brand.darkGrey">
          Your Carbon Footprint
        </Text>
        <Text fontSize="24px" fontWeight="500" letterSpacing="-2%">
          200 tonnes C02/year
        </Text>
      </Box>
      <Box my={10} display="flex" flexDir="column" gap={2}>
        {cards.map((item) => (
          <Box
            key={item.title}
            display="flex"
            justifyContent="space-between"
            p="19px 18px"
            backgroundColor="white"
            rounded="8.48px"
          >
            <Box display="flex" alignItems="center" gap="6px">
              <Box>
                <Image src={item.icon} alt={`${item.title} icon`} />
              </Box>
              <Text fontSize="14.84px" textColor="brand.darkGrey">
                {item.title}
              </Text>
            </Box>
            <Text>{item.value}</Text>
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
      <Box p="12px" bg="white" rounded="8.48px" mt={12}>
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
