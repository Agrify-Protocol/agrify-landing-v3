import NatureForm from "@/components/invest-in-nature/NatureForm";
import { Metadata } from "next";
import { Suspense } from "react";

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
    url: "https://agrifyafrica.xyz/invest-in-nature",
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

const InvestInNature = () => {
  return (
    <Suspense>
      <NatureForm />
    </Suspense>
  );
};

export default InvestInNature;
