

const MonthSummary = () => {
  return (
    <div className="bg-back-white px-6 py-5 rounded-md border border-gray-200 shadow-sm">
      <div>
        <p className="text-[18px] font-semibold">This Month Summary</p>
      </div>
      <div className="flex flex-col">
        <div>
          <div className="flex flex-row justify-between">
            <p>Income</p>
            <p>$5,540.00</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Expenses</p>
            <p>$3,120.50</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Net Balance</p>
            <p>$2,420.50</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Saving Rate</p>
            <p>43.6%</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MonthSummary;
