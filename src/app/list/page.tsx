import ProductList from "@/components/ProductList";
import Filter from "@/components/Filter";
import Image from "next/image";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Campaign */}
      <div className="rounded-3xl hidden bg-black p-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-white bg-black p-4">
            Obtén 10% de descuento en tu primera compra
          </h1>
          <button className="rounded-3xl bg-white text-black w-max py-3 px-5 text-sm">
            Comprar ahora
          </button>
        </div>
        <div className=" relative w-1/3">
          <Image
            src="/products/rings1.jpeg"
            alt="Campaign"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
      </div>
      {/* Filtro */}
      <Filter />
      {/* Productos */}
      <h1 className="mt-12 text-xl font-semibold">Resultados de busqueda</h1>
      <ProductList />
    </div>
  );
};

export default ListPage;
