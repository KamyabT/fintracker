import TransactionsList from "../TransactionsList";
import RecentTransactionsHeader from "./RecentTransactionsHeader";
import { useTransactions } from "../../context/TransactionsContext";
import DashboardPagination from "./DashboardPagination";

const RecentTransactions = () => {
  const { dashboardTransactions, isLoadingDashboardTransactions } = useTransactions();

  console.log("dash ", dashboardTransactions);

  return (
    <div className="bg-back-white px-4 py-4 rounded-md shadow-sm">
      <RecentTransactionsHeader />
      {!isLoadingDashboardTransactions && dashboardTransactions?.length > 0 && (
        <div className="space-y-3">
          {dashboardTransactions?.map((transaction) => {
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
      {isLoadingDashboardTransactions && (
        <div className="flex justify-center font-semibold text-[16px] text-gray-500">
          Loading recent transactions please wait...
        </div>
      )}
      <DashboardPagination />
    </div>
  );
};

export default RecentTransactions;
