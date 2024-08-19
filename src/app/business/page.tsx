import BusinessComp from "@/components/business";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agrify - Partner with Us",
  description:
    "Offset your emissions and decarbonize your supply chain with Regenerative agriculture.",
  openGraph: {
    title: "Agrify - Partner with Us",
    description:
      "Offset your emissions and decarbonize your supply chain with Regenerative agriculture.",
    images: [
      {
        url: "/images/seo-cover.jpeg",
        alt: "Decarbonize with Regenerative Agriculture",
        width: 1280,
        height: 672,
      },
    ],
    locale: "en_US",
    type: "website",
    url: "https://agrifyafrica.xyz/business",
  },
};

const Business = () => {
  return <BusinessComp />;
};

export default Business;
