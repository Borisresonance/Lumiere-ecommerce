const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Tipo</option>
          <option value="physical">Anillo</option>
          <option value="digital">Pulcera</option>
          <option value="digital">Arete</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="Precio minimo"
          className="rounded-2xl text-xs pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="Precio maximo"
          className="rounded-2xl text-xs pl-2 w-24 ring-1 ring-gray-400"
        />
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Material</option>
          <option value="physical">Acero inoxidable</option>
          <option value="digital">Rodio</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Color</option>
          <option value="physical">Dorado</option>
          <option value="digital">Plateado</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
        >
          <option>Ordernar por</option>
          <option value="">Precio (bajo a alto)</option>
          <option value="">Precio (alto a bajo)</option>
          <option value="">Nuevo</option>
          <option value="">Anterior</option>
        </select>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Filter;
