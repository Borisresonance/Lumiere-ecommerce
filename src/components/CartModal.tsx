"use client";
import Image from "next/image";

const CartModal = () => {
  const cartItems = true; //temporal

  return (
    //if else statement to display the message
    <div className="w-max absolute p-4 rouded-md shadow-[0_3px_10px_rgb(0,0,0,0.2) bg-white top-12 right-0 flex flex-col gap-6 z-20]">
      {cartItems ? (
        <div> No hay productos en el carrito</div>
      ) : (
        <>
          <h2 className="text-xl">Carrito de compras</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="/collar.jpeg"
                alt="Product"
                width={70}
                height={70}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="pa-1 bg-gray-50 rounded-sm">$48.000</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">Disponible</div>
                </div>

                {/* BOTTOM */}
                <div className="flex justify-between text-sm ">
                  <span className="text-gray-500">Cantidad 2</span>
                  <span className="text-blue-500">Remover</span>
                </div>
              </div>
            </div>
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="/collar.jpeg"
                alt="Product"
                width={70}
                height={70}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="pa-1 bg-gray-50 rounded-sm">$48.000</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">Disponible</div>
                </div>

                {/* BOTTOM */}
                <div className="flex justify-between text-sm ">
                  <span className="text-gray-500">Cantidad 2</span>
                  <span className="text-blue-500">Remover</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$49.000</span>
            </div>
            <p className="text-gray-50">
              This is the item description for Lumiere
            </p>
            <div className="flex justify-between">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                Ver Carrito
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Finalizar Compra
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
