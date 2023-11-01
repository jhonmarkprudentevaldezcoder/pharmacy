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

export default function Welcome() {
  const [loading, setLoading] = useState(true);

  const breakpoints = {
    320: { slidesPerView: 1 },
    480: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 },
    1200: { slidesPerView: 6 },
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
    // Function to update slidesPerView based on screen width
    const updateSlidesPerView = () => {
      const screenWidth = window.innerWidth;

      // Find the matching breakpoint for the current screen width
      const breakpoint = Object.keys(breakpoints)
        .reverse()
        .find((bp) => screenWidth >= parseInt(bp));

      if (breakpoint) {
        // Set the number of slides per view based on the matching breakpoint
        setSlidesPerView(breakpoints[breakpoint].slidesPerView);
      }
    };

    // Initial update
    updateSlidesPerView();

    // Add an event listener to update slidesPerView when the window size changes
    window.addEventListener("resize", updateSlidesPerView);

    // Clean up the event listener when the component unmounts
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

  if (loading) {
    return <p>Loading...</p>;
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
          delay: 8000, // Delay in milliseconds between each slide
          disableOnInteraction: false, // Autoplay will not stop when user interacts with Swiper
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={product._id}>
            {/*  <div className="flex w-full cursor-pointer h-80 hover:bg-gray-200 transition-all ease-in-out duration-300 delay-75 bg-gray-400 rounded-lg bg-opacity-50 py-8">
              <div className="container px-4 mx-auto">
                <div className="max-w-4xl mx-auto">
                  <Image
                    src={"/images/pills.png"}
                    width={100}
                    height={100}
                    alt={product.Name}
                    className="rounded-full m-auto"
                  />
                  <h1 className="text-base font-bold uppercase text-white mt-12">
                    {product.Name}
                  </h1>
                  <div className="flex flex-col">
                    <p className="text-gray-900">{product.Description}</p>
                    <p className="text-white">₱ {product.Price}</p>
                  </div>
                </div>
              </div>
            </div> */}
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

                <Link
                  href="#"
                  className="flex items-center justify-center rounded-md bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
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
                  Add to cart
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
