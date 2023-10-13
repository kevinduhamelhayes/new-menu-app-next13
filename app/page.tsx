import LandingLayout from "@/components/layouts/LandingLayout";
import { Hero, Navbar } from "@/components/LandingSections";
import Footer from "@/components/LandingSections/Footer";
import NewContent1 from "@/components/LandingSections/NewContent1";
import NewContent2 from "@/components/LandingSections/NewContent2";
import NewContent3 from "@/components/LandingSections/NewContent3";
import PaymentMethods from "@/components/LandingSections/PaymentMethods";
import Section from "@/components/LandingSections/Section";
import CallToAction from "@/components/LandingSections/CallToAction";
import Head from "next/head";

export default function Index({ products }) {
  return (
    <Head>
        <title>Order Fusion</title>
        <link rel="icon" href="/images/icons/brand/logo.png" />
      </Head>
      <main className="flex flex-col overflow-x-hidden ">
      <Navbar />
      <Hero />
      <div className="flex flex-col items-center justify-center mx-2 ">
        <div className="w-full text-4xl font-bold flex flex-col justify-center items-center">
          <h1>Porque nosotros?</h1>
        </div>
        <NewContent2 />
        <NewContent1 />
        <NewContent3 />
        <PaymentMethods />
        <CallToAction />
      </div>
      <Footer />
      </main>
  );
}