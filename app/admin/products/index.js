import { useState, useEffect } from "react";
import Link from "next/link";
import BaseLayoutPanel from "/components/layouts/panel/BaseLayoutPanel";
import NavbarProducts from "components/layouts/panel/NavbarProducts";
import { useRouter } from "next/router";
import { Edit, Trash } from "components/svgs";
import ProductService from "services/productService";
import Image from "next/image";

export default function Index({ products }) {
  const [productAvailable, setProductAvailable] = useState(products)
  const router = useRouter();

  function cutString(texto, longitudMaxima) {
    if (texto.length > longitudMaxima) {
      return texto.substring(0, longitudMaxima) + '...';
    } else {
      return texto;
    }
  }

  useEffect(() => {
    setProductAvailable(products)
  },[products])
  
  return (
    <BaseLayoutPanel>
      <section className="ml-[300px] w-[100%] h-full flex flex-col justify-start items-start font-redhat ">
        <NavbarProducts routeName="Productos" />
        <main className="flex flex-wrap gap-8 px-12 mt-10">
          {productAvailable.map((prod) => (
              <div key={prod._id} className="w-[300px] h-[360px] rounded-[10px] border-[1px] border-[#000] shadow-md hover:shadow-xl ">
                <Image
                  src={prod.imageUrl}
                  alt="pan"
                  className="h-[50%] w-full rounded-t-[10px] "
                />
                <div className="h-[50%] w-full rounded-b-[10px] bg-[#eee] flex flex-col ">
                  <div className="h-[70%] w-full flex flex-col px-2 ">
                    <h3 className="text-md">Producto: <span className="font-bold">{prod.name}</span></h3>
                    <span>Precio x un: ${prod.price}</span>
                    <span>Descripción: {cutString(prod.description, 40)}</span>
                  </div>
                  <div className="w-full h-[30%] flex justify-between items-center px-2 pb-5" >
                    <button onClick={() => router.push(`/admin/products/${prod._id}`)} className="rounded-[10px] bg-[#90d6ff] hover:bg-[#2eaaf3] p-3">
                      <Edit className="" color="#fff" />
                    </button>
                    <button onClick={() => ProductService.deleteProduct(prod._id)} className="rounded-[10px] bg-[#ff9e9e] hover:bg-[#fa4d4d] p-3">
                      <Trash className="" color="#fff" />
                    </button>
                  </div>
                </div>
              </div>
          ))}
        </main>
      </section>
    </BaseLayoutPanel>
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
