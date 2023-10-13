import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-[300px] h-full py-10 bg-[#000] text-[#fff] flex flex-col justify-center items-center ">
      <div className="h-[10%] w-full flex items-center justify-center">
        <h1 className="font-bold text-[30px] ">Rico Gusto :) </h1>
      </div>
      <div className="flex flex-col h-[90%] w-full">
        <Link className="px-3 py-4 w-full hover:bg-primary-yellow hover:text-[#333] hover:font-semibold " href="/">
          Inicio
        </Link>
        <Link
          className="px-3 py-4 w-full hover:bg-primary-yellow hover:text-[#333] hover:font-semibold "
          href="/admin/products"
        >
          Productos
        </Link>
        <Link
          className="px-3 py-4 w-full hover:bg-primary-yellow hover:text-[#333] hover:font-semibold "
          href="/admin/usuarios"
        >
          Usuarios
        </Link>
        <Link
          className="px-3 py-4 w-full hover:bg-primary-yellow hover:text-[#333] hover:font-semibold "
          href="/admin/pedidos"
        >
          Ordenes
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
