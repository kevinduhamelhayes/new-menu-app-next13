// import { MenuBars } from "../../components/svgs";
import CardProduct from "../../components/home/CardProduct";
// import Navbar from "../../components/layouts/Navbar"
import { useEffect, useState } from "react";
// import BottomNav from "../../components/layouts/BottomNav";
// import SetItem from "../../utils/setItem";
// import GetItem from "../../utils/getItem";
import ClientLayout from "../../components/layouts/ClientLayout"
// import ModalSC from "../../components/home/ModalSC";
import { useSession } from '@/context/sessionContext';
import ProductService from "../../services/productService";

export default function Home({ products }) {
  const { sessionData, setSessionData } = useSession();
  const { id, productsSelected, status, price, tableNum } = sessionData;
  // console.log('sessionData: ', sessionData);
  const [totalProdLength, setTotalProdLength] = useState(0)
  const updateSession = (newSessionData) => {
    setSessionData({ ...sessionData, ...newSessionData });
  };

  function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }

  function setPricing() {
    const pricing = orders.products.length > 0 && orders.products.map(prod => prod.price)
    const total = sumArray(pricing)
    setOrders({...orders, price: total })
  }

  // useEffect(() => {
    // console.log('sessionData: ', sessionData);
  // },[sessionData])
  // useEffect(()=> {
  //   const orderLS = GetItem('orders')
  //   orderLS.orders && setTotalProdLength(orderLS?.orders.products.length)
  //   orders.products.length > 0 && setPricing()
  //   SetItem('orders', orders)
  //   // console.log(orderLS);
  // },[orders])

  const addProduct = (product) => {
    const arrProDefault = [ ...productsSelected ]
    arrProDefault.push(product)
    updateSession({ productsSelected: arrProDefault })
  }

  return (
    <ClientLayout
      ordersProducts={productsSelected} 
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
}


export async function getServerSideProps() {
  const products = await ProductService.getProducts();

  return {
    props: {
      products,
    },
  };
}
