const CategoriesListHeader = () => {
  return (
    <div className="flex flex-row justify-between mb-3">
      <div>
        <p className="text-[18px] font-semibold">All Categories</p>
      </div>
      <div className="flex flex-row space-x-4">
        <input
          className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-primary"
          type="search"
          name=""
          id=""
          placeholder="Search categories..."
        />
        <select
          className="font-medium border px-3 py-2 border-gray-300 outline-none rounded-lg text-[14px] cursor-pointer focus:border-primary"
          name=""
          id=""
        >
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>
    </div>
  );
};

export default CategoriesListHeader;
