"use client";
import { useState } from "react";
const Add = () => {
  const [quantity, setQuantity] = useState(1);

  //Temporal
  const stock = 4;

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium"> Escoge la cantidad</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          <div className="text-sm">
            Solo quedan 1 articulo en stock, No te lo pierdas!
          </div>
        </div>

        <button className="w-36 text-sm rounded-3xl ring-1 ring-salmon text-salmon py-2 px-2 hover:bg-salmon hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Add;
