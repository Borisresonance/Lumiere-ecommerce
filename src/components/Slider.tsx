"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import "@fontsource/rouge-script";
import "@fontsource/merriweather";

const slides = [
  {
    id: 1,
    title: "En tu primera compra",
    description: "10% de descuento",
    img: "/products/anillo-doble-hoja.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-emerald-50 to-neutral-50",
  },
  {
    id: 2,
    title: "Nuevas piezas maximalistas",
    description: "Chunky y elegante, una combinación irresistible",
    img: "/products/anillo-doble-corazon.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-emerald-50 to-neutral-50",
  },
  {
    id: 3,
    title: " Minimalismo que impacta, durabilidad que perdura",
    description: "Informacion sobre nuestras piezas",
    img: "/products/collar-doble-infinito.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-emerald-50 to-neutral-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-2000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/*TEXT CONTAINER*/}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="font-rouge text-4xl  lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className=" font-merriweather font-light text-5xl lg:text-6xl 2xl:text-8xl">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4 ">
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/*IMAGE CONTAINER*/}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt="image"
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`select-none w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
