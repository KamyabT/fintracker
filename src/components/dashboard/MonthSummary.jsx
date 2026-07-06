import { CircleCheck } from "lucide-react";

const MonthSummary = () => {
  return (
    <div className="bg-back-white px-6 py-5 rounded-md border border-gray-200 shadow-sm">
      <div className="mb-3">
        <p className="text-[18px] font-semibold">This Month Summary</p>
      </div>
      <div className="flex flex-col">
        <div>
          <div className="flex flex-row justify-between border-b-1 border-gray-100 py-3 ">
            <p className="font-semibold text-gray-600">Income</p>
            <p className="font-semibold">$5,540.00</p>
          </div>
          <div className="flex flex-row justify-between border-b-1 border-gray-100 py-3 ">
            <p className="font-semibold text-gray-600">Expenses</p>
            <p className="font-semibold">$3,120.50</p>
          </div>
          <div className="flex flex-row justify-between border-b-1 border-gray-100 py-3 ">
            <p className="font-semibold text-gray-600">Net Balance</p>
            <p className="font-semibold">$2,420.50</p>
          </div>
          <div className="flex flex-row justify-between py-3 ">
            <p className="font-semibold text-gray-600">Saving Rate</p>
            <p className="font-semibold">43.6%</p>
          </div>
        </div>
        <div className="flex flex-col bg-back-secondary shadow-xs mt-5 border-1 border-gray-100 rounded-lg p-5 space-y-3">
          <div className="flex flex-row justify-between ">
            <p className="font-semibold">Monthly Budget Progress</p>
            <p>Edit Budget</p>
          </div>
          <div>Progress Bar</div>
          <div className="flex flex-row justify-between ">
            <p className="font-medium text-[14px] text-gray-600">$3,120.50/$4,000.00</p>
            <p className="font-medium text-[14px] text-gray-600">78%</p>
          </div>
          <div className="flex flex-row items-center">
            <span className="me-2">
              <CircleCheck color="green" size={16}/>
            </span>
            <p className="font-medium text-[12px] text-gray-500">You're on track! Keep it up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthSummary;
