import RecentTransactionsItem from "./RecentTransactionsItem";
import { useTransactions } from "../../context/TransactionsContext";
import { Link } from "react-router-dom";

const RecentTransactions = () => {
  const { transactions, isLoading } = useTransactions();
  console.log(transactions, 5555);

  return (
    <div className="bg-back-white px-4 py-4 rounded-md shadow-sm">
      <div className="flex flex-row justify-between items-center mb-3">
        <p className="text-[18px] font-semibold">Recent Transactions</p>
        <Link
          to="/transactions"
          className="bg-back-white px-3 py-2 border border-gray-300 rounded-lg text-primary font-semibold text-[14px] hover:bg-primary hover:text-white cursor-pointer"
        >
          View All
        </Link>
      </div>
      {isLoading && (
        <div className="flex justify-center">
          Loading recent transactions please wait...
        </div>
      )}
      {transactions?.map((transaction) => {
        return <RecentTransactionsItem transaction={transaction} key={transaction.id} />;
      })}
      <div className="flex justify-center mt-5">
        <ul className="flex flex-row">
          <li className="border border-gray-300 rounded-md px-2 cursor-pointer hover:bg-primary hover:text-white">
            Pervious
          </li>
          <li className="mx-2 px-2 cursor-pointer text-gray-500 text-[15px]">1</li>
          <li className="mx-2 px-2 cursor-pointer text-gray-500 text-[15px]">2</li>
          <li className="mx-2 px-2 cursor-pointer text-gray-500 text-[15px]">3</li>
          <li className="mx-2 px-2 cursor-pointer text-gray-500 text-[15px]">4</li>
          <li className="mx-2 px-2 cursor-pointer text-gray-500 text-[15px]">5</li>
          <li className="border border-gray-300 rounded-md px-2 cursor-pointer hover:bg-primary hover:text-white">
            Next
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecentTransactions;
