import Button from "../ui/Button";
import RecentTransactionsList from "./RecentTransactionsList";
import { useTransactions } from "../../context/TransactionsContext";
import { Link } from "react-router-dom";

const RecentTransactions = () => {
  const { transactions } = useTransactions();
  console.log(transactions, 5555);

  return (
    <div className="bg-back-white px-4 py-4 rounded-md shadow-sm">
      <div className="flex flex-row justify-between items-center mb-3">
        <p className="font-semibold">Recent Transactions</p>
        <Link
          to="/transactions"
          className="bg-back-white px-3 py-2 border border-gray-300 rounded-lg text-primary font-semibold text-[14px] hover:bg-primary hover:text-white cursor-pointer"
        >
          View All
        </Link>
      </div>
      {transactions?.map((transaction) => {
        return <RecentTransactionsList transaction={transaction} />;
      })}
      <div>Pagination</div>
    </div>
  );
};

export default RecentTransactions;
