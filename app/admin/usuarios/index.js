import BaseLayoutPanel from "/components/layouts/panel/BaseLayoutPanel";
import NavbarProducts from "/components/layouts/panel/NavbarProducts";
// import BlocksSvg from "/components/svgs/BlocksSvg";
// import ListSvg from "/components/svgs/ListSvg";

function index() {
  return (
    <BaseLayoutPanel>
      <main className="ml-[300px] w-[100%] h-full flex flex-col justify-start items-start ">
        <NavbarProducts routeName="Usuarios" />
      </main>
    </BaseLayoutPanel>
  );
}

export default index;
