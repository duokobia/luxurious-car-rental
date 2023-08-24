import React from "react";
import LandingBanner from "../sections/landingBanner/LandingBanner";
import LandingServices from "../sections/landingServices/LandingServices";
import OnlyToday from "../sections/onlyToday/OnlyToday";
import OurFleet from "../sections/ourFleet/OurFleet";
import WhyChooseUs from "../sections/whyChooseUs/WhyChooseUs";

function Home() {
  return (
    <>
      <LandingBanner />
      <LandingServices />
      <OurFleet />
      <WhyChooseUs />
      <OnlyToday />
    </>
  );
}

export default Home;
