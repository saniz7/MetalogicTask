

import { Banner } from "@/components/Banner/Banner";
import Particle from "@/components/Banner/Particles";
import Countup from "@/components/Countup";
import Product from "@/components/OurProduct/Product";
import Services from "@/components/OurServices/Services";
import CurveAnimation from "@/components/Vision/Vision";
import MotionPathAnimation from "@/components/Vision/Vision";
import { Whyus } from "@/components/Whyus";

export default function Home() {
  return (
    <>
      <Banner >
        <Particle />
      </Banner>
      <MotionPathAnimation/>
      <Whyus />
      <Product />
      <Services />
      <Countup />
    </>
  );
}
