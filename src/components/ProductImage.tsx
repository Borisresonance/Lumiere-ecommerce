"use client";

import Image from "next/image";
import { useState } from "react";
const images = [
  {
    id: 1,
    src: "/products/anillo-doble-corazon.jpeg",
  },
  {
    id: 2,
    src: "/products/anillo-doble-hoja.jpeg",
  },
  {
    id: 3,
    src: "/products/nails.jpeg",
  },
  {
    id: 4,
    src: "/products/rings1.jpeg",
  },
];

const ProductImage = () => {
  // fetch images from CMS future
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].src}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              className="object-cover rounded-md hover:opacity-0 transition-opacity duration-150 "
              src={img.src}
              alt="collar image"
              fill
              sizes="25vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
