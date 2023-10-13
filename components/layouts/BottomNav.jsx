import { ShoppingCart, Home, Offers } from "../svgs";
import GetItem from "../../utils/getItem";
import { useEffect } from "react";
import Link from "next/link";

export default function BottomNav({ productsLength = 0, onOpen }) {
  return (
    <nav className="fixed bottom-0 bg-[#eee] w-full h-[80px] flex items-center justify-center">
      <section className="bg-[#000] w-[90%] md:w-[70%] lg:w-[40%] h-[70px] rounded-[10px] flex justify-between items-center px-10 ">
        <Offers color="#fff" />
        <Link href="/">
          <Home color="#fff" />
        </Link>
        <button onClick={onOpen} className="relative">
          <ShoppingCart color="#fff" />
          {productsLength > 0 && (
            <span className="absolute top-[-4px] right-[-4px] w-[18px] h-[18px] rounded-full bg-[#df0000] text-[14px] font-bold text-[#fff] flex items-center justify-center ">{productsLength}</span>
          )}
        </button>
      </section>
    </nav>
  );
}
