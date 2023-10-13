import { connectDB } from "/utils/db";
import Product from "/models/Product";


export default async (req, res) => {
    connectDB();
    const { method, query: { id }, body } = req;

  switch (method) {
    case "GET":
      try {
        const product = await Product.findById(id);
        if (!product)
          return res.status(404).json({ msg: "Product does not exists" });
        return res.status(200).json(product);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "PUT":
      try {
        const product = await Product.findByIdAndUpdate(id, body, {
          new: true,
          runValidators: true,
        });
        if (!product)
          return res.status(404).json({ msg: "Product does not exists" });
        return res.status(200).json(product);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "DELETE":
      try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct)
          return res.status(404).json({ msg: "Product does not exists" });
        return res.status(204).json();
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
};
