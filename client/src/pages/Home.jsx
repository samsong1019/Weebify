import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import AllProducts from "../components/AllProducts";

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Categories />
      <Slider />
      <AllProducts />
    </div>
  );
}
