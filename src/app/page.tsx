

import { Banner } from "@/components/Banner/Banner";
import Particle from "@/components/Banner/Particles";
import Countup from "@/components/Countup";
import Product from "@/components/OurProduct/Product";
import Services from "@/components/OurServices/Services";
import { Whyus } from "@/components/Whyus";

export default function Home() {
  return (
    <>
      <Banner >
        <Particle />
      </Banner>
      <Whyus />
      <Product />
      <Services />
      <Countup />
    </>
  );
}
