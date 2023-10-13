import Head from "next/head";
import Navbar from "./Navbar";
import ModalSC from "../home/ModalSC";
import BottomNav from "./BottomNav";
import { useDisclosure } from "@nextui-org/react";
import { useSession } from '../../context/sessionContext';
import useClient from "@/hooks/useClient";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { sessionData, setSessionData } = useSession();
  const { productsSelected } = sessionData;
  const { client } = useClient()

  return (
    <>
      <Head>
        <title>Order Fusion</title>
        <link rel="icon" href="/images/icons/brand/logo.png" />
      </Head>
      <main className="overflow-x-hidden ">
        <Navbar nameClient={client ? client.name : 'OrderFusion'} />
        {children}
        <ModalSC
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          products={productsSelected}
        />
        <BottomNav productsLength={productsSelected.length} onOpen={onOpen} />
      </main>
    </>
  );
}
