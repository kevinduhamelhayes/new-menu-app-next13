// Importaciones de tus componentes y dependencias
import React from 'react';
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

// Definir la estructura de un producto, si 'products' es un prop que vas a utilizar.
interface Product {
  id: number;
  name: string;
  price: number;
  // ...otros campos que puedan tener tus productos
}

// Definir las props del componente si vas a recibir 'products' o cualquier otra prop.
interface IndexProps {
  products: Product[];
}

// Definición del componente utilizando la sintaxis de función flecha
const Index: React.FC<IndexProps> = ({ products }) => {
  // Asegúrate de utilizar 'products' en tu componente si es necesario
  // Por ejemplo, renderizando una lista de productos.

  return (
    <>
      <Head>
        {/* ... puedes agregar elementos dentro de <Head> para configurar el título de la página, favicon, etc. */}
      </Head>
      <main className="flex flex-col overflow-x-hidden ">
        <Navbar />
        <Hero />
        <div className="flex flex-col items-center justify-center mx-2 ">
          <div className="w-full text-4xl font-bold flex flex-col justify-center items-center">
            <h1>¿Por qué nosotros?</h1>
          </div>
          <NewContent2 />
          <NewContent1 />
          <NewContent3 />
          <PaymentMethods />
          <CallToAction />
        </div>
        <Footer />
      </main>
    </>
  );
};

// Exportar el componente como el export default
export default Index;
