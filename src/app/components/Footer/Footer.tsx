"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { BsFillArrowUpCircleFill, BsArrowBarRight } from "react-icons/bs";
import Image from "next/image";

export const Footer = () => {
  const [scrolled, setScrolled] = useState(false);
  const emailAddress = "markbrvaldez@gmail.com";
  const sendhandleClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <footer className="bg-[#164e63]">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 gap-2 px-9 py-6 lg:py-16 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h2 className="mt-5">
                <Image
                  src={"/images/pills.png"}
                  width={100}
                  height={100}
                  alt="logo"
                />
              </h2>
            </div>
            <div className="ml-2 ">
              <h2 className="mt-5 mb-3 font-semibold text-slate-200  uppercase">
                Featured Links
              </h2>
              <ul className="text-white  items-center md:grid md:grid-cols-3  mt-5">
                <li className="mb-1 w-100 md:bg-[#164e63] md:p-0 bg-[#1c2f4e] p-3 rounded-md">
                  <Link
                    href="#"
                    className="hover:underline flex flex-row gap-3 items-center"
                  >
                    <BsArrowBarRight className="icons text-xl" /> MEDECINE
                  </Link>
                </li>

                <li className="mb-1  w-100 md:bg-[#164e63] md:p-0 bg-[#1c2f4e] p-3 rounded-md">
                  <Link
                    href="#"
                    className="hover:underline  flex flex-row gap-3 items-center"
                  >
                    <BsArrowBarRight className="icons text-xl" /> Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mt-5 text-base  mb-4  font-semibold text-slate-200 uppercase ">
                Information
              </h2>
              <ul className="text-slate-200 text-sm font-sans font-medium">
                <li className="mb-2">
                  <span className="flex flex-row items-center gap-3 ">
                    <ImLocation2 className="icons" /> Montalban Rodriguez, Rizal
                  </span>
                </li>
                <li className="mb-2">
                  <span className="flex flex-row items-center gap-3">
                    <MdEmail className="icons" /> storemacy@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 ${
              scrolled ? "block" : "hidden"
            } bg-[#193055] text-white rounded-full p-2  hover:bg-green-600 transition-all duration-300`}
          >
            <BsFillArrowUpCircleFill className="text-2xl" />
          </button>
        </div>
      </footer>
      <div className="py-2 w-100 bg-[#164e63e3]  md:flex md:items-center md:justify-around">
        <span className="text-sm text-gray-400  sm:text-center p-2">
          © 2023 - 2023. All Rights Reserved.
          <span className="text-gray-300 ml-2  text-sm">STOREMACY</span>
        </span>
        <div className="flex mt-4 space-x-5    justify-center md:mt-0">
          <Link
            href="https://www.facebook.com/markprudentevaldez"
            target="_blank"
            className="text-gray-400  hover:text-amber-600 text-sm"
          >
            <AiFillFacebook className="text-xl" />
            <span className="sr-only">Facebook page</span>
          </Link>

          <Link
            target="_blank"
            href="https://maps.app.goo.gl/ksFjz7q4Xg75CoWa9"
            className="text-gray-400 text-sm hover:text-amber-600"
          >
            <ImLocation2 className="text-xl" />
            <span className="sr-only">Location</span>
          </Link>

          <Link
            href={"#header"}
            onClick={sendhandleClick}
            className="text-gray-400 text-sm hover:text-amber-600"
          >
            <BiLogoGmail className="text-xl" />
            <span className="sr-only">EMAL</span>
          </Link>
        </div>
      </div>
    </>
  );
};
