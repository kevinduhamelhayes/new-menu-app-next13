import React from "react";
import Head from "next/head";

type SectionsChildren = {
  children: JSX.Element
}

const LandingLayout = ( { children }: SectionsChildren ) => {
  return (
    <>
      <Head>
        <title>Order Fusion</title>
        <link rel="icon" href="/images/icons/brand/logo.png" />
      </Head>
      <main className="flex flex-col overflow-x-hidden ">
        {children}
      </main>
    </>
  );
};

export default LandingLayout;
