import Link from "next/link";
import Image from "next/image";
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";

const ProductList = async ({
  categoryId,
  limit,
}: {
  categoryId: string;
  limit?: number;
}) => {
  console.log("Querying with categoryId:", categoryId); // Debug line

  const wixClient = await wixClientServer();
  //product limit is optional and will show 20 by default
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || 20)
    .find();

  console.log(res);

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
        <Link
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
              src="/products/anillo-doble-corazon.jpeg"
              alt="collar image"
              fill
              sizes="25vw"
            />
            <Image
              className="absolute object-cover rounded-md"
              src="/products/anillo-doble-hoja.jpeg"
              alt=""
              fill
              sizes="25vw"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-merriweather">Product Name</span>
            <span className="font-semibold">$48.000</span>
          </div>
          <div className="text-sm text-gray-500">
            This is a tailored description of the product
          </div>
          <button className="rounded-2xl ring-1 ring-lama text-salmon w-max py-2 px-4 text-xs hover:bg-salmon hover:text-white">
            Añadir al carrito
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
