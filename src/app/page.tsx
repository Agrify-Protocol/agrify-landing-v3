import HomeComp from "@/components/home";
import coverImg from "../../public/images/seo-cover.jpeg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Agrify",
  description:
    "Helping Farmers improve yield, access debt-free finance, and qualify for international exports.",
  openGraph: {
    title: "Home - Agrify",
    description:
      "Helping Farmers improve yield, access debt-free finance, and qualify for international exports.",
    images: [
      {
        url: coverImg.src,
        alt: "Agrify helping farmers improve yield",
        width: coverImg.width,
        height: coverImg.height,
      },
    ],
    locale: "en_US",
    type: "website",
    url: "https://agrifyafrica.xyz/",
  },
};

const Home = () => {
  return <HomeComp />;
};

export default Home;
