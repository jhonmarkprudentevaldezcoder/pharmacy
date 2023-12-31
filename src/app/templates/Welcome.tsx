"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Link from "next/link";
import Cookies from "js-cookie";
import { addToMyCart } from "../utils/cart";

export default function Welcome() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [userToken, setUserToken] = useState<string | undefined>(
    Cookies.get("userId") || ""
  );

  useEffect(() => {
    const token = Cookies.get("token");
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

  const breakpoints: { [key: string]: { slidesPerView: number } } = {
    "320": { slidesPerView: 1 },
    "480": { slidesPerView: 2 },
    "768": { slidesPerView: 3 },
    "992": { slidesPerView: 4 },
    "1200": { slidesPerView: 6 },
  };

  const [slidesPerView, setSlidesPerView] = useState(
    breakpoints[1200].slidesPerView
  );
  const [products, setProducts] = useState<Products[]>([]);

  type Products = {
    _id: string;
    Name: string;
    Description: string;
    Price: number;
    Stock: number;
    Image: string;
  };
  useEffect(() => {
    const updateSlidesPerView = () => {
      const screenWidth = window.innerWidth;

      const breakpoint = Object.keys(breakpoints)
        .reverse()
        .find((bp) => screenWidth >= parseInt(bp));

      if (breakpoint) {
        setSlidesPerView(breakpoints[breakpoint].slidesPerView);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);
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
        const userId = userToken;
        if (userId) {
          const result = await addToMyCart(productId, quantity, userId);
          console.log("Product added to cart:", result);
          setSelectedProduct(productId);
          console.log(selectedProduct);
        } else {
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
      <div className=" shadow rounded-md p-4  w-full mx-auto px-32">
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
    <div className="ml-20 mr-20 " id="medecines">
      <h1 className="text text-center font-sans font-bold text-3xl my-12 text-gray-600">
        Most Popular Products
      </h1>
      {/* eslint-disable react/no-unescaped-entities */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 hover:bg-gray-100 bg-white shadow-md">
              <Link
                className="relative m flex h-40 overflow-hidden rounded-xl"
                href="#"
              >
                <Image
                  src={"/images/medd.jpg"}
                  width={100}
                  height={100}
                  alt={product.Name}
                  className="h-full w-full m-auto p-3 rounded-lg"
                />
              </Link>

              <div className="mt-4 px-5 pb-5">
                <h5 className="text-xl tracking-tight text-slate-900">
                  {product.Name}
                </h5>

                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">
                      ₱{product.Price}
                    </span>
                  </p>
                </div>

                <div
                  onClick={() => handleAddToCart(product._id)}
                  className="flex items-center cursor-pointer justify-center rounded-md bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {selectedProduct === product._id
                    ? "Added to Cart"
                    : "Add to Cart"}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
