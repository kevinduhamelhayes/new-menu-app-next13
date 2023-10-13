import { FC } from 'react';
import { Blocks, List } from "/components/svgs/";
import Link from "next/link";

// Definiendo la interfaz para los props
interface NavbarProductsProps {
  routeName: string;
}

// Componente funcional con props tipados
const NavbarProducts: FC<NavbarProductsProps> = ({ routeName }) => {
  return (
    <nav className="w-[100%] h-auto p-5 mx-auto flex justify-between bg-[#e9e9e9] ">
      <h3 className="text-[28px] font-bold ">{routeName}</h3>
      {/* <input type="text" className="w-[90%] mx auto mt-10 " /> */}
      {/* Otros elementos comentados... */}
      <div className="flex w-[40%] 2xl:w-[20%] justify-evenly items-center">
        <button className="rounded-[10px] bg-[#ddd] h-[40px] w-[40px] flex items-center justify-center ">
          <Blocks className="" color="#222" />
        </button>
        <button className="rounded-[10px] bg-[#ddd] h-[40px] w-[40px] flex items-center justify-center ">
          <List className="" color="#222" />
        </button>
        <button className="rounded-[10px] bg-[#ddd] px-3 py-2 flex items-center justify-center ">
          Filtros
        </button>
        {/* Asegúrate de usar el componente Link correctamente. Parece que estás intentando usar 'className' en 'Link', lo cual no es una prop válida para 'Link'. 'className' debe ir dentro del elemento 'a'. */}
        <Link href="/admin/products/create">
          <a className="rounded-[10px] bg-[#0ca2ff] hover:bg-[#0a93e8] px-3 py-2 flex items-center justify-center ">
            Add
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default NavbarProducts;
