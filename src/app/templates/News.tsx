import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function News() {
  return (
    <div id="News" className="my-6">
      <div className="py-16">
        <div className="container m-auto px-6">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-6/12 lg:p-0 p-7">
              <h1 className="text-4xl font-bold leading-tight mb-5 capitalize font-sans">
                Download the medecine <br /> mobile app
              </h1>
              <p className="text-xl">
                Your home for health is one tap away. <br /> Order health
                products. and read health tips
              </p>

              <div className="py-5">
                <Link
                  href="#"
                  className="text-white rounded-full py-2 px-5 text-lg font-semibold bg-blue-600 inline-block border border-blue-600 mr-3"
                >
                  DOWNLOAD
                </Link>
                <Link
                  href="#"
                  className="text-black rounded-full py-2 px-5 text-lg font-semibold bg-gray-400 inline-block border hover:bg-white hover:text-black"
                >
                  Requist a demo
                </Link>
              </div>
            </div>
            <div className="lg:w-5/12 order-2">
              <Image
                src={"/images/mobile.webp"}
                alt=""
                width={100}
                height={100}
                className="object-fill h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
