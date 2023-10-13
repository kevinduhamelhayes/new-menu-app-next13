"use client"
import React, { useState, useEffect, ReactElement } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import CardProduct from "../../components/home/CardProduct";
import ClientLayout from "../../components/layouts/ClientLayout";
import { useSession } from '@/context/sessionContext';
import ProductService from "../../services/productService";

// Definir el tipo de un producto.
type Product = {
  id: string;
  price: number; // Asume que el producto tiene un precio, reemplazar con la estructura real
  // ... otras propiedades del producto ...
};

// Definir el tipo para la sesión.
type SessionData = {
  id: string;
  productsSelected: Product[];
  status: string;
  price: number;
  tableNum: number;
  // ... otras propiedades de los datos de la sesión ...
};

type Order = {
  products: Product[];
  price: number;
  // ... otras propiedades de los pedidos ...
};

// Definir las props del componente Home.
interface HomeProps {
  products: Product[];
}

const Home: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ products }) => {
  const { sessionData, setSessionData } = useSession();
  const [totalProdLength, setTotalProdLength] = useState<number>(0);
  const [orders, setOrders] = useState<Order>({ products: [], price: 0 }); // Asume una estructura para 'orders', ajustar según sea necesario

  const updateSession = (newSessionData: Partial<SessionData>) => {
    setSessionData({ ...sessionData, ...newSessionData });
  };

  const sumArray = (arr: number[]): number => {
    return arr.reduce((acc, num) => acc + num, 0);
  };

  const setPricing = () => {
    if (orders.products.length > 0) {
      const pricing: number[] = orders.products.map(prod => prod.price);
      const total: number = sumArray(pricing);
      setOrders({ ...orders, price: total });
    }
  };

  // Similar a los useEffects comentados, deberías manejar 'orders' y otros efectos secundarios aquí

  const addProduct = (product: Product) => {
    const newProductsSelected = [...sessionData.productsSelected, product];
    updateSession({ productsSelected: newProductsSelected });
  };

  return (
    <ClientLayout
      ordersProducts={sessionData.productsSelected} 
      totalProdLength={totalProdLength} 
      setTotalProdLength={setTotalProdLength}
    >

      <main className="relative flex flex-col w-screen h-auto min-h-screen overflow-x-hidden">
        <header className="flex justify-center w-full pt-5">
          <input
            type="text"
            className="w-[94%] h-[40px] rounded-[10px] bg-[#f1f1f1] shadow-inner-2xl px-5 "
            placeholder="Buscar..."
          />
        </header>
        <section className="flex flex-col w-full">
          {products?.map(product => (
            <CardProduct
              key={product.id}
              product={product}
              addProduct={addProduct}
            />
          )) }
          <div className="w-full h-[80px] bg-white "></div>
        </section>
      </main>
      </ClientLayout>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const products = await ProductService.getProducts();

  return {
    props: {
      products,
    },
  };
};

export default Home;






