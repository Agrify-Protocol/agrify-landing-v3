import twitter from "../../../public/icons/socials/twitter.svg";
import instagram from "../../../public/icons/socials/instagram.svg";
import linkedin from "../../../public/icons/socials/linkedin.svg";
import Success from "@/components/success/page";

const InvestmentConfirmed = () => {
  const icons = [
    {
      icon: linkedin,
      link: "https://www.linkedin.com/company/agrify-technologies/",
      name: "linkedin",
    },
    {
      icon: twitter,
      link: "https://twitter.com/agrifyafrica",
      name: "twitter",
    },
    {
      icon: instagram,
      link: "https://www.instagram.com/agrifyafrica/",
      name: "instagram",
    },
  ];

  return (
    <Success
      socials={icons}
      logoLink="/business"
      title="We have received your information!"
      subtitle="Stay updated on our ecosystem to learn about product updates."
    />
  );
};

export default InvestmentConfirmed;
