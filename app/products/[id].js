import ClientLayout from "../../components/layouts/ClientLayout";
import { useEffect, useState } from "react";
import GetItem from "../../utils/getItem";
import { useSession } from "../../context/sessionContext";
import Image from "next/image";
import ProductService from "../../services/productService";

export default function Index({ product }) {
  const { sessionData, setSessionData } = useSession();
  const { id, productsSelected, status, price, tableNum } = sessionData;
  const [orders, setOrders] = useState({
    products: [],
    price: 0,
    state: "pending",
  });

  useEffect(() => {
    const orderLS = GetItem("orders");
    setOrders(orderLS.orders);
  }, []);

  return (
    <ClientLayout ordersProducts={productsSelected}>
      <main className="relative w-screen h-screen flex flex-col">
        <Image
          width={400}
          height={260}
          src={product?.imageUrl}
          alt={product?.name}
          className="w-full h-[260px] "
        />
        <div className="w-full h-full bg-[#fff] px-5 flex flex-col mt-5 ">
          <h2 className="font-semibold text-[20px]">{product?.name}</h2>
          <span className="font-bold text-[18px] text-[#333] mt-2 ">
            ${product?.price}
          </span>
          <p className="text-[12px] mt-2 ">{product?.description}</p>
        </div>
        <button className="fixed bottom-[90px] right-5 p-3 bg-primary-yellow flex rounded-[10px] font-bold ">
          Añadir al carrito
        </button>
      </main>
    </ClientLayout>
  );
}

export async function getStaticPaths() {
  try {
    const products = await ProductService.getProducts();
    const paths = products.map((product) => ({
      params: { id: product._id },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (err) {
    console.log(err);
    return {
      paths: [],
      fallback: true,
    };
  }
}

export async function getStaticProps(context) {
  const { params } = context;
  const product = await ProductService.getProduct(params.id);

  return {
    props: {
      product,
    },
  };
}
