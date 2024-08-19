import NatureForm from "@/components/invest-in-nature/NatureForm";
import coverImg from "../../../public/images/seo-cover.jpeg";
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
        url: coverImg.src,
        alt: "Decarbonize with Regenerative Agriculture",
        width: coverImg.width,
        height: coverImg.height,
      },
    ],
    locale: "en_US",
    type: "website",
    url: "https://agrifyafrica.xyz/invest-in-nature",
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
