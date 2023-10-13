import { Blocks, List } from "/components/svgs/";
import Link from "next/link";

export default function NavbarProducts({routeName}) {
  return (
    <nav className="w-[100%] h-auto p-5 mx-auto flex justify-between bg-[#e9e9e9] ">
      <h3 className="text-[28px] font-bold ">{routeName}</h3>
      {/* <input type="text" className="w-[90%] mx auto mt-10 " /> */}

      {/* <div className="growing-search">
      <div className="input">
        <input type="text" name="search" />
      </div>
      <div className="submit">
        <button type="submit" name="go_search">
          <span className="">P</span>
        </button>
      </div>
    </div> */}
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
        <Link
          href="/admin/products/create"
          className="rounded-[10px] bg-[#0ca2ff] hover:bg-[#0a93e8] px-3 py-2 flex items-center justify-center "
        >
          Add
        </Link>
      </div>
    </nav>
  );
}
