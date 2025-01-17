import CustomizeProducts from "@/components/CustomizeProducts";
import Add from "@/components/Add";
import ProductImage from "@/components/ProductImage";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* IMG CONTAINER */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductImage />
        </div>

        {/* TEXT CONTAINER */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl font-medium">Anillo esperanza</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consectetur, nisl eget pharetra lacinia, nunc libero scelerisque
            turpis, vel faucibus justo nisi sit amet nisl. Donec auctor
          </p>
          <div className="h-[2px] bg-gray-100" />
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">$59.000</h3>
            <h2 className="font font-medium text-2xl">$49.000</h2>
          </div>
          <div className="h-[2px] bg-gray-100" />
          <CustomizeProducts />
          <Add />
          <div className="h-[2px] bg-gray-100" />
          <div>
            <h4>Titulo</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut`</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
