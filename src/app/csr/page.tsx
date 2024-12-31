"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]); 
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center mt-4">Loading Products...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Client-Side Rendering (CSR)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded p-4">
            <Image
              src={product.image}
              alt={product.title}
              layout="responsive"
              width={16}
              height={9}
              className="h-40 w-full object-cover mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">{product.title}</h2>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-gray-800">Price: ${product.price}</p>
            <p className="text-yellow-500 font-medium">
              Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
