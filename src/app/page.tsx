import { Banner } from "@/components/Banner/Banner";
import Particle from "@/components/Banner/Particles";
import Countup from "@/components/Countup";
import Product from "@/components/OurProduct/Product";
import Services from "@/components/OurServices/Services";
import MotionPathAnimation from "@/components/Vision/Vision";
import { Whyus } from "@/components/Whyus";
import Head from "next/head"
import logo from '../images/metalogo.png'
export default function Home() {
  return (
    <>
      <Head>
        <title>Metalogic Software Pvt. Ltd</title>
        <meta name="description" content="Design, Build and Scale your vision with us" />
        <meta property="og:title" content="MetaLogic Software Pvt. Ltd." />
        <meta property="og:description" content="Design, Build and Scale your vision with us" />
        <meta property="og:image" content="https://metalogic.com.np/metalogo.png" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Banner >
        <Particle />
      </Banner>
      <MotionPathAnimation />
      <Whyus />
      <Product />
      <Services />
      <Countup />
    </>
  );
}
