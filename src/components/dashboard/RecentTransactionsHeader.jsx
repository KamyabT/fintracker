import { Link } from "react-router-dom";

const RecentTransactionsHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center mb-3">
      <p className="text-[18px] font-semibold">Recent Transactions</p>
      <Link
        to="/transactions"
        className="bg-back-white px-3 py-2 border border-gray-300 rounded-lg text-primary font-semibold text-[14px] hover:bg-primary hover:text-white cursor-pointer"
      >
        View All
      </Link>
    </div>
  );
};

export default RecentTransactionsHeader;
