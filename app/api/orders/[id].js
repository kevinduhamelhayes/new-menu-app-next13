import { connectDB } from "/utils/db";
import Order from "/models/Order";


export default async (req, res) => {
    connectDB();
    const { method, query: { id }, body } = req;

  switch (method) {
    case "GET":
      try {
        const order = await Order.findById(id);
        if (!order)
          return res.status(404).json({ msg: "Order does not exists" });
        return res.status(200).json(order);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "PUT":
      try {
        const order = await Order.findByIdAndUpdate(id, body, {
          new: true,
          runValidators: true,
        });
        if (!order)
          return res.status(404).json({ msg: "Order does not exists" });
        return res.status(200).json(order);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "DELETE":
      try {
        const deletedOrder = await Order.findByIdAndDelete(id);
        if (!deletedOrder)
          return res.status(404).json({ msg: "Order does not exists" });
        return res.status(204).json();
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
};
