"use client";

import Carousel from "./components/Carousel/Carousel";
import About from "./templates/About";
import Updates from "./templates/Updates";
import Welcome from "./templates/Welcome";

export default function Home() {
  return (
    <div className="bg-white ">
      <Carousel />
      <Welcome />
      <Updates />
      <About />
    </div>
  );
}
