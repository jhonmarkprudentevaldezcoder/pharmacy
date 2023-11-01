"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
export default function Welcome() {
  return (
    <div className="ml-20 mr-20">
      <h1 className="text text-center font-sans font-bold text-3xl my-12 text-gray-600">
        Most Popular Products
      </h1>
      {/* eslint-disable react/no-unescaped-entities */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={6}
        autoplay={{
          delay: 8000, // Delay in milliseconds between each slide
          disableOnInteraction: false, // Autoplay will not stop when user interacts with Swiper
        }}
      >
        <SwiperSlide>
          <div className="flex w-full h-full bg-gray-400 rounded-lg bg-opacity-50 py-8">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto  ">
                <Image
                  src={"/images/pills.png"}
                  width={100}
                  height={100}
                  alt="logo"
                  className="rounded-full m-auto"
                />
                <h1 className="text-base font-bold uppercase text-white mt-12">
                  Axmel (Amoxicillin) 250mg/5mL Powder for Suspension 60mL
                </h1>
                <div className="flex flex-col ">
                  <p className="text-white">description</p>
                  <p className="text-white">₱ 100.00</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full h-full bg-gray-400 rounded-lg bg-opacity-50 py-8">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto  ">
                <Image
                  src={"/images/pills.png"}
                  width={100}
                  height={100}
                  alt="logo"
                  className="rounded-full m-auto"
                />
                <h1 className="text-base font-bold uppercase text-white mt-12">
                  Axmel (Amoxicillin) 250mg/5mL Powder for Suspension 60mL
                </h1>
                <div className="flex flex-col ">
                  <p className="text-white">description</p>
                  <p className="text-white">₱ 100.00</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full h-full bg-gray-400 rounded-lg bg-opacity-50 py-8">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto  ">
                <Image
                  src={"/images/pills.png"}
                  width={100}
                  height={100}
                  alt="logo"
                  className="rounded-full m-auto"
                />
                <h1 className="text-base font-bold uppercase text-white mt-12">
                  Axmel (Amoxicillin) 250mg/5mL Powder for Suspension 60mL
                </h1>
                <div className="flex flex-col ">
                  <p className="text-white">description</p>
                  <p className="text-white">₱ 100.00</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="flex w-full h-full bg-gray-400 rounded-lg bg-opacity-50 py-8">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto  ">
                <Image
                  src={"/images/pills.png"}
                  width={100}
                  height={100}
                  alt="logo"
                  className="rounded-full m-auto"
                />
                <h1 className="text-base font-bold uppercase text-white mt-12">
                  Axmel (Amoxicillin) 250mg/5mL Powder for Suspension 60mL
                </h1>
                <div className="flex flex-col ">
                  <p className="text-white">description</p>
                  <p className="text-white">₱ 100.00</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="flex w-full h-full bg-gray-400 rounded-lg bg-opacity-50 py-8">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto  ">
                <Image
                  src={"/images/pills.png"}
                  width={100}
                  height={100}
                  alt="logo"
                  className="rounded-full m-auto"
                />
                <h1 className="text-base font-bold uppercase text-white mt-12">
                  Axmel (Amoxicillin) 250mg/5mL Powder for Suspension 60mL
                </h1>
                <div className="flex flex-col ">
                  <p className="text-white">description</p>
                  <p className="text-white">₱ 100.00</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="flex w-full h-full bg-gray-400 rounded-lg bg-opacity-50 py-8">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto  ">
                <Image
                  src={"/images/pills.png"}
                  width={100}
                  height={100}
                  alt="logo"
                  className="rounded-full m-auto"
                />
                <h1 className="text-base font-bold uppercase text-white mt-12">
                  Axmel (Amoxicillin) 250mg/5mL Powder for Suspension 60mL
                </h1>
                <div className="flex flex-col ">
                  <p className="text-white">description</p>
                  <p className="text-white">₱ 100.00</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="flex w-full h-full bg-gray-400 rounded-lg bg-opacity-50 py-8">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto  ">
                <Image
                  src={"/images/pills.png"}
                  width={100}
                  height={100}
                  alt="logo"
                  className="rounded-full m-auto"
                />
                <h1 className="text-base font-bold uppercase text-white mt-12">
                  Axmel (Amoxicillin) 250mg/5mL Powder for Suspension 60mL
                </h1>
                <div className="flex flex-col ">
                  <p className="text-white">description</p>
                  <p className="text-white">₱ 100.00</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="flex w-full h-full bg-gray-400 rounded-lg bg-opacity-50 py-8">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto  ">
                <Image
                  src={"/images/pills.png"}
                  width={100}
                  height={100}
                  alt="logo"
                  className="rounded-full m-auto"
                />
                <h1 className="text-base font-bold uppercase text-white mt-12">
                  Axmel (Amoxicillin) 250mg/5mL Powder for Suspension 60mL
                </h1>
                <div className="flex flex-col ">
                  <p className="text-white">description</p>
                  <p className="text-white">₱ 100.00</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="flex w-full h-full bg-gray-400 rounded-lg bg-opacity-50 py-8">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto  ">
                <Image
                  src={"/images/pills.png"}
                  width={100}
                  height={100}
                  alt="logo"
                  className="rounded-full m-auto"
                />
                <h1 className="text-base font-bold uppercase text-white mt-12">
                  Axmel (Amoxicillin) 250mg/5mL Powder for Suspension 60mL
                </h1>
                <div className="flex flex-col ">
                  <p className="text-white">description</p>
                  <p className="text-white">₱ 100.00</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="flex w-full h-full bg-gray-400 rounded-lg bg-opacity-50 py-8">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto  ">
                <Image
                  src={"/images/pills.png"}
                  width={100}
                  height={100}
                  alt="logo"
                  className="rounded-full m-auto"
                />
                <h1 className="text-base font-bold uppercase text-white mt-12">
                  Axmel (Amoxicillin) 250mg/5mL Powder for Suspension 60mL
                </h1>
                <div className="flex flex-col ">
                  <p className="text-white">description</p>
                  <p className="text-white">₱ 100.00</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="flex w-full h-full bg-gray-400 rounded-lg bg-opacity-50 py-8">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto  ">
                <Image
                  src={"/images/pills.png"}
                  width={100}
                  height={100}
                  alt="logo"
                  className="rounded-full m-auto"
                />
                <h1 className="text-base font-bold uppercase text-white mt-12">
                  Axmel (Amoxicillin) 250mg/5mL Powder for Suspension 60mL
                </h1>
                <div className="flex flex-col ">
                  <p className="text-white">description</p>
                  <p className="text-white">₱ 100.00</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="flex w-full h-full bg-gray-400 rounded-lg bg-opacity-50 py-8">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto  ">
                <Image
                  src={"/images/pills.png"}
                  width={100}
                  height={100}
                  alt="logo"
                  className="rounded-full m-auto"
                />
                <h1 className="text-base font-bold uppercase text-white mt-12">
                  Axmel (Amoxicillin) 250mg/5mL Powder for Suspension 60mL
                </h1>
                <div className="flex flex-col ">
                  <p className="text-white">description</p>
                  <p className="text-white">₱ 100.00</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}
