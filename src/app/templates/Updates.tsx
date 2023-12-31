import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { addToMyCart } from "../utils/cart";

export default function Updates() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [userToken, setUserToken] = useState<string | undefined>(
    Cookies.get("userId") || ""
  );

  useEffect(() => {
    const token = Cookies.get("token");
    const userIdToken = Cookies.get("userId");
    setUserToken(userIdToken || "");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const addToCart = () => {
    if (isLoggedIn) {
      window.alert("added");
    } else {
      window.location.href = "/Login";
    }
  };

  type Products = {
    _id: string;
    Name: string;
    Description: string;
    Price: number;
    Stock: number;
    Image: string;
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          `https://pharmacyapiendpoint.onrender.com/product`
        );

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
          console.log(products);
        } else {
          console.error("Error fetching student grades.");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId: string) => {
    if (isLoggedIn) {
      try {
        const userId = userToken; // The value of userToken can be undefined
        if (userId) {
          const result = await addToMyCart(productId, quantity, userId);
          console.log("Product added to cart:", result);
          setSelectedProduct(productId);
          console.log(selectedProduct);
        } else {
          // Handle the case where userToken is undefined
          console.error("User is not logged in. User token is undefined.");
        }
      } catch (error) {
        console.error("Error adding product to cart:", error);
      }
    } else {
      window.location.href = "/Login";
    }
  };

  if (loading) {
    return (
      <div className=" shadow rounded-md p-4 w-full mx-auto py-32 px-32">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" my-12 mx-auto md:px-2" id="all">
      <div className="  bg-white">
        <h1 className="text-center text-2xl font-bold text-gray-800">
          All Products
        </h1>
      </div>

      <div className="flex flex-wrap items-center py-4   justify-center   bg-white text-gray-800">
        <a
          rel="noopener noreferrer"
          href="#all"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Baby Care</span>
        </a>
        <a
          rel="noopener noreferrer"
          href="#all"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Family Care</span>
        </a>
        <a
          rel="noopener noreferrer"
          href="#all"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span>Alternate</span>
        </a>
        <a
          rel="noopener noreferrer"
          href="#all"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
          </svg>
          <span>Fitness</span>
        </a>
      </div>

      <section className=" bg-gray-100">
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <article
              key={product._id}
              onClick={() => {
                console.log(product._id);
              }}
              className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
            >
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Image
                  src={"/images/med.webp"}
                  width={100}
                  height={100}
                  alt="product"
                  className="h-full w-full m-auto"
                />
              </div>

              <div className="mt-1 p-2">
                <h2 className="text-slate-700"> {product.Name}</h2>
                <p className="mt-1 text-sm text-slate-400">
                  {product.Description}
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-base font-bold text-blue-500 font-sans">
                    ₱ {product.Price}
                  </p>

                  <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <div
                      className="text-sm cursor-pointer"
                      onClick={() => handleAddToCart(product._id)}
                    >
                      {selectedProduct === product._id
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
