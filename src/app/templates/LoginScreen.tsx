"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";

export default function LoginScreen() {
  const [Username, setUsername] = useState<string>("");
  const [Password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = {
      Username, // Change this to use the username
      Password,
    };

    try {
      const response = await fetch("https://kvnshapi.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const responseData = await response.json();

        Cookies.set("token", responseData.token);
        Cookies.set("userId", responseData.userId);
        console.log(response);
        setUsername("");
        setPassword("");
        window.location.href = "/";

        // Redirect to the dashboard or perform any other actions
      } else {
        // Login failed
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div id="Login" className="mb-12 mt-12">
      <div className="flex flex-col md:flex-row justify-center gap-24 md:gap-9">
        <div className="flex flex-col py-4 gap-1 md:w-1/2 lg:w-1/4">
          <div className="flex flex-col gap-5 md:py-5 lg:py-12   ">
            <span className="font-bold text-[#051c40] text-3xl uppercase px-5 md:px-0 ">
              LOGIN
            </span>
            <form
              onSubmit={handleLogin}
              className="text-sm px-5 md:px-0 flex flex-col gap-4 "
            >
              <input
                type="text"
                placeholder="USERNAME"
                className="input-text"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="PASSWORD"
                className="input-text"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="submit"
                value="LOGIN"
                className="p-2 w-full bg-blue-900 text-white font-sans font-bold cursor-pointer hover:bg-blue-600 transition-all ease-in-out duration-75 delay-75"
              />
            </form>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/4 py-5 md:py-2  items-center">
          <div
            className="h-96 bg-gradient-to-r from-blue-900 to-blue-500  w-full "
            style={{
              backgroundImage: "url('/images/logo.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
