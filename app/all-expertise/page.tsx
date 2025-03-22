import { useEffect } from "react";
import Head from "next/head";
// import QuickResponseForm from "@/components/QuickResponseForm";
import OurExpertise from "@/components/Sections/AllExpertise/OurExpertise";
import ScrollToTopBtn from "@/components/ScrollToTopBtn/index";

// Firebase to be imported
// import { analytics } from "@/firebase/firebase";
// import { logEvent } from "firebase/analytics";

const AllExpertise: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      logEvent(analytics, "all_expertise_page_visit");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Our Expertise - DzynFox</title>
        <meta name="description" content="Explore our expertise at DzynFox. We provide top-notch creative solutions for your business." />
      </Head>
      <OurExpertise />
      {/* <QuickResponseForm /> */}
      <ScrollToTopBtn />
    </>
  );
};

export default AllExpertise;
