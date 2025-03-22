import HeroSection from "@/components/Sections/AboutUs/HeroSection";
import OurPhilosophy from "@/components/Sections/AboutUs/OurPhilosophy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - DzynFox",
};

const AboutUs: React.FC = () => {
  return (
    <>
      <HeroSection />
      <OurPhilosophy />
    </>
  );
};

export default AboutUs;
