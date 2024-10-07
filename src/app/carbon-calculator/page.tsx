import CarbonCalculator from "@/components/carbon-calculator/CarbonCalculator";
import { Metadata } from "next";

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
        url: "https://i.imgur.com/s73EgkU.jpeg",
        alt: "Calculate and Offset Emissions Regeneratively",
        width: 1280,
        height: 672,
      },
    ],
    locale: "en_US",
    type: "website",
    url: "https://agrifyafrica.xyz/carbon-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agrify - Emission Test",
    description:
      "Calculate your carbon emissions with our tool and discover regenerative farming initiatives that effectively offset your emissions.",
    images: "https://i.imgur.com/s73EgkU.jpeg",
    creator: "@agrifyafrica",
  },
};

const Calculator = () => {
  return <CarbonCalculator />;
};

export default Calculator;
