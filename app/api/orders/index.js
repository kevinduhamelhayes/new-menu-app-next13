import { connectDB } from "/utils/db";
import Order from "/models/Order";


export default async function index(req, res) {
    connectDB()
    const { method, body } = req;

    if (method === 'GET') {
        try {
            const orders = await Order.find();
            console.log(orders);
            return res.status(200).json(orders);   
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    if (method === 'POST') {
        try {
            const newOrder = new Order(body);
            const SavedOrder = await newOrder.save();
            return res.status(201).json(SavedOrder);   
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    return res.status(400).json({ msg: 'This method is not supported' });
}