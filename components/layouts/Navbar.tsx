import { MenuBars, Profile } from "../svgs";
import { useState } from "react";
import {Button} from "@nextui-org/react";
import Link from "next/link";

export default function Navbar({nameClient}: any) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <nav className="relative w-full h-[60px] px-5 lg:px-12 flex flex-row justify-between items-center bg-[#fafafa] shadow-md ">
        <span className="text-xl font-bold ">{nameClient}</span>
        <button onClick={() => setMenuActive(!menuActive)}>
          <MenuBars color="#000" />
        </button>
      </nav>
      {menuActive && (
        <nav className="absolute top-[60px] right-0 z-[10] w-[400px] bg-[#eee] h-full">
          <ul className="mt-10">
            <Link href="/admin/products" className="w-full border-[#aaa] border-y-[1px] flex items-center px-5 py-1 hover:bg-[#999] ">
              <Button isIconOnly aria-label="Like" className="h-[60px] w-[60px] bg-primary-yellow ">
                <Profile color="#000" />
              </Button>
              <span className="ml-5 text-xl text-bold">Perfil</span>

            </Link>
          </ul>
        </nav>
      )}
    </>
  );
}
