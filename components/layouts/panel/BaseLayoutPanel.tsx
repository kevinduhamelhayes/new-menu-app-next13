import { ReactNode } from 'react';
import NavbarPanel from './NavbarPanel.jsx';
import Head from 'next/head';

interface BaseLayoutPanelProps {
  children: ReactNode;
}

const BaseLayoutPanel: React.FC<BaseLayoutPanelProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Order Fusion - Panel</title>
        <link rel="icon" href="/images/icons/brand/logo.png" />
      </Head>
      <section className='w-[100vw] min-h-screen h-[auto] p-0 m-0 flex flex-row overflow-x-hidden '>
        <NavbarPanel />
        {children}
      </section>
    </>
  );
}

export default BaseLayoutPanel;
