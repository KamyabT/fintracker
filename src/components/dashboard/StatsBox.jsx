import { CircleDollarSign } from "lucide-react";

const StatsBox = () => {
  return (
    <div className="bg-back-white px-4 py-4 rounded-md border border-gray-200 shadow-sm">
      <div className="flex flex-row items-center justify-between mb-3">
        <CircleDollarSign color="green" size={42}/>
        <div>
          <h5 className="mb-2">Total Income</h5>
          <p className="font-semibold">$5,540.00</p>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <span>12.5%</span>
          <span>from last month</span>
        </div>
        <div>Chart </div>
      </div>
    </div>
  );
};

export default StatsBox;


