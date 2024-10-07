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
        url: "https://i.imgur.com/s73EgkU.jpeg",
        alt: "Decarbonize with Regenerative Agriculture",
        width: 1280,
        height: 672,
      },
    ],
    locale: "en_US",
    type: "website",
    url: "https://agrifyafrica.xyz/business",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agrify - Partner with Us",
    description:
      "Offset your emissions and decarbonize your supply chain with Regenerative agriculture.",
    images: "https://i.imgur.com/s73EgkU.jpeg",
    creator: "@agrifyafrica",
  },
};

const Business = () => {
  return <BusinessComp />;
};

export default Business;
