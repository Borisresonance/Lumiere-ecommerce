//"use client";

import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import Category from "@/components/Category";
import { Suspense, useContext } from "react";
import { useEffect } from "react";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";

const HomePage = async () => {
  //hook to bring wixContext
  /*  const wixClient = useWixClient();

  useEffect(() => {
    
    const getProducts = async () => {
      const res = await wixClient.products.queryProducts().find();

      console.log(res); // debug
    };

    getProducts();
  }, [wixClient]); */

  /*const wixClient = await wixClientServer();

  const res = await wixClient.products.queryProducts().find();

  console.log(res);
*/
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1>Featured Products</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList
            categoryId={process.env.FEATURE_PRODUCTS_CATEGORY_ID || ""}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24 px4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="py-5">Categorias</h1>
        <Category />
      </div>
      <div className="mt-24 px4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1>Productos Nuevos</h1>
        <ProductList categoryId={process.env.NEW_PRODUCTS_CATEGORY_ID || ""} />
      </div>
      <div className="mt-24 px4 md:px-8 lg:px-16 xl:32 2xl:px-64"></div>
    </div>
  );
};

export default HomePage;
