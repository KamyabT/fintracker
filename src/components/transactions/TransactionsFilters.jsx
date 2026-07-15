const TransactionsFilters = () => {
  return (
    <div className="flex flex-row items-center space-x-5 me-5">
      <div className="flex flex-row items-center">
        <label className="font-medium text-[14px] text-black-500 me-3" htmlFor="">
          Search
        </label>
        <input
          className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-primary"
          type="search"
          placeholder="Search..."
        />
      </div>
      <div>
        <label className="font-medium text-[14px] text-black-500 me-3" htmlFor="">
          Filter by type
        </label>
        <select
          className="font-medium border px-3 py-2 border-gray-300 outline-none rounded-lg text-[14px] cursor-pointer"
          name=""
          id=""
        >
          <option value="">Income</option>
          <option value="">outcome</option>
        </select>
      </div>
      <div>
        <label className="font-medium text-[14px] text-black-500 me-3" htmlFor="">
          Filter by category
        </label>
        <select
          className="font-medium border px-3 py-2 border-gray-300 outline-none rounded-lg text-[14px] cursor-pointer"
          name=""
          id=""
        >
          <option value="">Food</option>
          <option value="">Bills</option>
        </select>
      </div>
    </div>
  );
};

export default TransactionsFilters;
