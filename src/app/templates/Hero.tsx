import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div
      className="w-full bg-center bg-cover overflow-hidden bg-no-repeat"
      /*  style={{
        backgroundImage: "url('/images/bgmatatag.jpg')",
        height: "500px",
        backgroundPosition: "50%",
      }} */
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
        <div className="text-center">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center h-80  "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
