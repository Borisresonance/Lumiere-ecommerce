"use client";

import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import Category from "@/components/Category";
import { useContext } from "react";
import { useEffect } from "react";
import { useWixClient } from "@/hooks/useWixClient";

const HomePage = () => {
  //hook to bring wixContext
  const wixClient = useWixClient();

  useEffect(() => {
    /*************   *************/
    /**
     * Fetches products from the Wix store using the WixClientContext,
     * and logs the response to the console for debugging purposes.
     */
    /****** *******/
    const getProducts = async () => {
      const res = await wixClient.products.queryProducts().find();

      console.log(res); // debug
    };

    getProducts();
  }, [wixClient]);

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1>Featured Products</h1>
        <ProductList />
      </div>
      <div className="mt-24 px4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="py-5">Categorias</h1>
        <Category />
      </div>
      <div className="mt-24 px4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1>Productos Nuevos</h1>
        <ProductList />
      </div>
      <div className="mt-24 px4 md:px-8 lg:px-16 xl:32 2xl:px-64"></div>
    </div>
  );
};

export default HomePage;
