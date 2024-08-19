import CarbonCalculator from "@/components/carbon-calculator/CarbonCalculator";
import { Metadata } from "next";
import coverImg from "../../../public/images/seo-cover.jpeg";

export const metadata: Metadata = {
  title: "Agrify - Emission Test",
  description:
    "Calculate your carbon emissions with our tool and discover regenerative farming initiatives that effectively offset your emissions.",
  openGraph: {
    title: "Agrify - Emission Test",
    description:
      "Calculate your carbon emissions with our tool and discover regenerative farming initiatives that effectively offset your emissions.",
    images: [
      {
        url: coverImg.src,
        alt: "Calculate and Offset Emissions Regeneratively",
        width: coverImg.width,
        height: coverImg.height,
      },
    ],
    locale: "en_US",
    type: "website",
    url: "https://agrifyafrica.xyz/carbon-calculator",
  },
};

const Calculator = () => {
  return <CarbonCalculator />;
};

export default Calculator;
