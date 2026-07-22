const CategoriesListHeader = () => {
  return (
    <div className="flex flex-row justify-between mb-3">
      <div>
        <p className="text-[18px] font-semibold">All Categories</p>
      </div>
      <div className="flex items-center flex-row space-x-4">
        <label className="font-medium text-[14px] text-black-500 me-3" htmlFor="">
          Search
        </label>
        <input
          className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-primary"
          type="search"
          name=""
          id=""
          placeholder="Search categories..."
        />
      </div>
    </div>
  );
};

export default CategoriesListHeader;
