import React, { useEffect } from 'react'
import ProductService from '../../../services/productService';
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function ProductPage({ product }) {
  const [editedSuccess, setEditedSuccess] = useState(false)
  const [productState, setProductState] = useState({
    name: "",
    description: "",
    imageUrl: "",
    price: 0,
  })

  useEffect(() => {
    setProductState({
      name: product.name,
      description: product.description,
      imageUrl: product.imageUrl,
      price: product.price
    })
  }, [product])

  useEffect(() => {
    if (editedSuccess) {
      setTimeout(() => {
        setEditedSuccess(false)
        console.log(" *---* menu updated! *---* ");
      }, "10000");
    }
  },[editedSuccess])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    editProduct();
  };

  const editProduct = async () => {
    try {
      const productId = product._id;
      const res = ProductService.editProduct(productId, productState)
      if (res) setEditedSuccess(true)
      console.log("product edited!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full ">
      <nav className="w-full h-[80px] bg-[#111] flex items-center justify-start px-12 ">
        <Link href="/admin/products" className="text-xl font-semibold text-[#fff] px-4 py-2 rounded-[10px] border-[1px] border-[#fff] hover:bg-primary-yellow transition-colors duration-300">
          {"<"}Back
        </Link>
      </nav>
      <div className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <Image
          src={productState.imageUrl}
          alt={productState.name}
          className="object-cover w-full h-64"
        />
        <div className="p-4">
          <form onSubmit={handleFormSubmit} className="flex flex-col">
            <div className="mb-4">
              <label htmlFor="productName" className="block mb-1 font-bold">
                Nombre del Producto
              </label>
              <input
                type="text"
                id="productName"
                value={productState.name}
                onChange={(e) => setProductState({
                  ...productState,
                  name: e.target.value,
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="productDescription"
                className="block mb-1 font-bold"
              >
                Descripción del Producto
              </label>
              <textarea
                id="productDescription"
                value={productState.description}
                onChange={(e) => setProductState({
                  ...productState,
                  description: e.target.value,
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="productImage" className="block mb-1 font-bold">
                URL de la Imagen
              </label>
              <input
                type="text"
                id="productImage"
                value={productState.imageUrl}
                onChange={(e) => setProductState({
                  ...productState,
                  imageUrl: e.target.value,
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="productPrice" className="block mb-1 font-bold">
                Precio del Producto
              </label>
              <input
                type="number"
                id="productPrice"
                value={productState.price}
                onChange={(e) => setProductState({
                  ...productState,
                  price: e.target.value,
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className={`px-4 py-2 font-bold transition-colors duration-300 rounded-md ${editedSuccess ? "bg-[#30da39] text-[#fff] " : "bg-primary-yellow text-[#000] hover:text-[#fff] hover:bg-[#000] "} `} 
            >
            {
              editedSuccess 
                ? <span className="font-bold text-green-500">Producto editado con Exito!</span>
                : <span>Guardar Cambios</span>
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  try {
    const products = await ProductService.getProducts()
    const paths = products.map((product) => ({
      params: { id: product._id },
    }));
    return {
      paths,
      fallback: true,
    }
  } catch(error) {
    console.log(error);
    return {
      paths: [],
      fallback: true,
    }
  }
}

export async function getStaticProps(context) {
  try {
    const productId = context.params.id;
    const product = await ProductService.getProduct(productId)
  
    return {
      props: {
        product,
      },
    }; 
  } catch (error) {
    console.log(error);
    return {
      props: { product: {} },
      revalidate: 60,
    }
  }
}
