import { connectDB } from "/utils/db";
import Product from "/models/Product";


export default async function index(req, res) {
    connectDB()
    const { method, body } = req;

    if (method === 'GET') {
        try {
            const products = await Product.find();
            return res.status(200).json(products);   
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    if (method === 'POST') {
        try {
            const newProduct = new Product(body);
            const SavedProduct = await newProduct.save();
            return res.status(201).json(SavedProduct);   
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    return res.status(400).json({ msg: 'This method is not supported' });
}