const ExpensesOverview = () => {
  return (
    <div className="bg-back-white px-4 py-4 rounded-md shadow-sm">
      <div className="flex flex-row justify-between items-center">
        <div>
          <span className="text-[18px] font-semibold">Expenses Overview</span>
          <span className="ms-2 text-sm text-gray-500">(This Month)</span>
        </div>
        <div>
          <select
            className="font-normal border px-2 py-1 border-gray-300 outline-none rounded-md"
            name=""
            id=""
          >
            <option value="">May 2026</option>
            <option value="">May 2026</option>
            <option value="">May 2026</option>
          </select>
        </div>
      </div>
      <div>Chart</div>
    </div>
  );
};

export default ExpensesOverview;
