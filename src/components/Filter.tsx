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
          <option value="physical">Anillos</option>
          <option value="digital">Pulseras</option>
          <option value="digital">Aretes</option>
          <option value="digital">Collares</option>
          <option value="digital">Earcuffs</option>
          <option value="digital">Hoops</option>
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
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
        >
          <option>Ordernar por</option>
          <option value="">Precio (bajo a alto)</option>
          <option value="">Precio (alto a bajo)</option>
        </select>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Filter;
