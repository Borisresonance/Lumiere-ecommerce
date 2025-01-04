import Image from "next/image";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Campaign */}
      <div className="">
        <div className="w-2/3">
          <h1 className="text-3xl font-semibold">
            Obten 20% de descuento en tu siguiente compra
          </h1>
          <button>Compra ahora</button>
        </div>
        <div className="relative w-1/3">
          <Image
            src="/woman.png"
            alt="Campaign"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ListPage;
