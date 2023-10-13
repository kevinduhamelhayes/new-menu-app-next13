import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductService from "../../../services/productService";

export default function Create() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    imageUrl: "",
    category: "",
    price: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    createProduct();
  };

  const createProduct = async () => {
    try {
      console.log(newProduct);
      await ProductService.createProduct(newProduct)
      //  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(newProduct),
      // });
      console.log("product added!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-start">
      <nav className="w-full h-[80px] bg-[#111] flex items-center justify-start px-12 ">
        <Link
          href="/admin/products"
          className="text-xl font-semibold text-[#000] px-4 py-2 rounded-[10px] border-[2px] border-primary-yellow hover:border-[#fff] bg-[#fff] hover:bg-primary-yellow "
        >
          {"<"}Back
        </Link>
      </nav>
      <main>
        <div className="flex flex-col items-center justify-center my-20 ">
          <span className="text-[20px] font-semibold mb-3 ">
            Hola, aqui puedes añadir un producto
          </span>
          <h1 className="font-bold text-[30px] ">Rico Gusto :) </h1>
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              value={newProduct.name}
              onChange={(event) =>
                setNewProduct({ ...newProduct, name: event.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Descripción
            </label>
            <textarea
              id="description"
              value={newProduct.description}
              onChange={(event) =>
                setNewProduct({
                  ...newProduct,
                  description: event.target.value,
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-bold mb-2"
            >
              Imagen
            </label>
            <input
              type="text"
              id="image"
              value={newProduct.imageUrl}
              onChange={(event) =>
                setNewProduct({ ...newProduct, imageUrl: event.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-bold mb-2"
            >
              Categoria
            </label>
            <input
              type="text"
              id="category"
              value={newProduct.category}
              onChange={(event) =>
                setNewProduct({ ...newProduct, category: event.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Precio
            </label>
            <input
              type="number"
              id="price"
              value={newProduct.price}
              onChange={(event) =>
                setNewProduct({ ...newProduct, price: event.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#0ca2ff] hover:bg-[#0a93e8] text-white px-4 py-2 rounded-md transition-colors duration-300"
          >
            Crear Producto
          </button>
        </form>
      </main>
    </section>
  );
}
