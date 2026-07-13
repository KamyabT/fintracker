import TransactionsList from "../TransactionsList";
import RecentTransactionsHeader from "./RecentTransactionsHeader";
import { useTransactions } from "../../context/TransactionsContext";
import Pagination from "../../components/ui/Pagination";

const RecentTransactions = () => {
  const { transactions, isLoading } = useTransactions();

  return (
    <div className="bg-back-white px-4 py-4 rounded-md shadow-sm">
      <RecentTransactionsHeader />
      {!isLoading && transactions?.length > 0 && (
        <div className="space-y-3">
          {transactions?.map((transaction) => {
            return (
              <TransactionsList
                transaction={transaction}
                key={transaction.id}
                showActions={false}
              />
            );
          })}
        </div>
      )}
      {isLoading && (
        <div className="flex justify-center font-semibold text-[16px] text-gray-500">
          Loading recent transactions please wait...
        </div>
      )}
      <Pagination />
    </div>
  );
};

export default RecentTransactions;
