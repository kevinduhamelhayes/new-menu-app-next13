import BaseLayoutPanel from "/components/layouts/panel/BaseLayoutPanel";
import NavbarProducts from "/components/layouts/panel/NavbarProducts";
import OrderService from "../../../services/orderService";

function index({ orders }) {
  console.log('orders: ', orders);

  return (
    <BaseLayoutPanel>
      <main className="ml-[300px] w-[100%] h-full flex flex-col justify-start items-start ">
        <NavbarProducts routeName="Ordenes" />
        <main className="flex flex-col w-full p-5 ">
          {orders.map(order => (
            <section key={order._id} className="w-full h-auto px-4 py-3 bg-[#D9D9D9] rounded-md border-[1px] flex flex-row items-center justify-center ">
              <div className="w-[70%] ">
                <h3>Orden N°: {order.idSession}</h3>
                <h3>Precio Final: {order.price}</h3>
                <h3>Mesa N°: {order.tableNum}</h3>
                <h3>Productos:</h3>
                <div>
                  <ul>
                    {order.productsSelected.map((product, idx) => (
                      <li key={idx} className="ml-10">
                        <h4>{idx + 1} - {product.name}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <aside className="w-[30%] h-full min-h-[120px] flex flex-col justify-start items-start">
                <header className="flex items-center justify-between w-full">
                  <button className="px-4 py-3 text-[#fff] bg-[#E00101] hover:bg-[#f70808] rounded-md">Cancelar</button>
                  <span className="px-4 py-3 text-[#000] bg-[#fff] rounded-md">{order.status}</span>
                  <button className="px-4 py-3 text-[#fff] bg-[#03AA0A] hover:bg-[#03c40d] rounded-md">Entregado</button>
                </header>
                <div className="w-full min-h-[50px] h-auto border-[1px] rounded-md mt-5 px-2 py-1 ">
                  <h4>Información extra de la order:</h4>
                </div>
              </aside>
            </section>
          ))}
        </main>
      </main>
    </BaseLayoutPanel>
  );
}

export async function getServerSideProps() {
  const orders = await OrderService.getOrders();

  return {
    props: {
      orders,
    },
  };
}

export default index;