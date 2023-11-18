"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

interface CartProduct {
  productId: {
    _id: string;
    Name: string;
    Description: string;
    Price: string;
    Stock: string;
    Image: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  quantity: number;
  _id: string;
}

interface CartData {
  cart: {
    _id: string;
    userid: string;
    products: CartProduct[];
    totalPrice: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  totalCount: number;
}

export default function History() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const [totalProducts, setTotalProducts] = useState<number | null>(null);
  const [totalPrice, setTotalPrice] = useState<string | null>(null);
  const [checkOutID, setcheckOutID] = useState<string | null>(null);
  const [userToken, setUserToken] = useState<string | undefined>(
    Cookies.get("userId") || "2323"
  );

  useEffect(() => {
    const userIdToken = Cookies.get("userId");
    setUserToken(userIdToken || "323");
    const token = Cookies.get("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      window.location.href = "/";
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    // Function to fetch cart total
    const fetchCartTotal = () => {
      fetch(`https://pharmacyapiendpoint.onrender.com/cart/${userToken}`)
        .then((response) => response.json())
        .then((data: CartData) => {
          const totalCount = data.totalCount;
          const totalCartPrice = data.cart.totalPrice;
          const idCheckOut = data.cart._id;
          setTotalPrice(String(totalCartPrice));
          setTotalProducts(totalCount);
          setcheckOutID(idCheckOut);
          setCartProducts(data.cart.products);
        })
        .catch((error) => console.error("Error fetching cart total:", error));
    };

    // Initial fetch when the component mounts
    fetchCartTotal();

    // Set up an interval to fetch data every 2 seconds
    const intervalId = setInterval(fetchCartTotal, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [userToken]);

  return (
    <div className="container mx-auto md:mt-32 mt-24">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping History </h1>
            <h2 className="font-semibold text-2xl">
              {" "}
              {totalProducts !== null ? (
                <p>{totalProducts}</p>
              ) : (
                <p>Loading total...</p>
              )}
            </h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details{" "}
              {checkOutID !== null ? (
                <p>{checkOutID}</p>
              ) : (
                <p>Loading total...</p>
              )}
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Total
            </h3>
          </div>

          <div>
            {cartProducts.map((product) => (
              <div
                className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                key={product._id}
              >
                <div className="flex w-2/5">
                  <div className="w-20">
                    <Image
                      src={"/images/pills.png"} // Use the actual product image URL
                      alt={product.productId.Name}
                      height={2}
                      width={50}
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">
                      {product.productId.Name}
                    </span>
                    <span className="text-red-500 text-xs">
                      {product.productId.Description}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <p className="mx-2  text-center w-8">{product.quantity}</p>
                </div>

                <span className="text-center w-1/5 font-semibold text-sm">
                  {`₱${product.productId.Price}`}{" "}
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  {`₱${(
                    parseInt(product.productId.Price) * product.quantity
                  ).toFixed(2)}`}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              {totalProducts !== null ? (
                <p> Items {totalProducts}</p>
              ) : (
                <p>Loading total...</p>
              )}
            </span>
            <span className="font-semibold text-sm">
              {totalPrice !== null ? (
                <p>₱{parseInt(totalPrice).toFixed(2)}</p>
              ) : (
                <p>Loading total...</p>
              )}
            </span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - ₱ 50.00</option>
            </select>
          </div>

          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>
                {totalPrice !== null ? (
                  <p>₱{(parseInt(totalPrice) + 50).toFixed(2)}</p>
                ) : (
                  <p>Loading total...</p>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
