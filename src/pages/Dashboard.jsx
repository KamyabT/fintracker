import Sidebar from "../components/Sidebar";
import StatsBox from "../components/dashboard/StatsBox";
import ExpensesOverview from "../components/dashboard/ExpensesOverview";
import ExpensesByCategory from "../components/dashboard/ExpensesByCategory";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import MonthSummary from "../components/dashboard/MonthSummary";
import { useTransactions } from "../context/TransactionsContext";
import { getTransactions } from "../services/transactions";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [res, setRes] = useState(null);

  useEffect(() => {
    async function getData() {
      const result = await getTransactions();
      setRes(result);
      console.log(result, "results");
    }

    getData();
  }, []);

  const { transactions } = useTransactions();
  return (
    <div className="flex flex-row bg-back-secondary ">
      <Sidebar />
      <main className="flex-1 px-5 py-5">
        <section className="grid gap-4 md:grid-cols-4">
          {res?.data.items.map((transaction) => {
            return <StatsBox transaction={transaction} />;
          })}
          <StatsBox />
          <StatsBox />
        </section>
        <section className="grid grid-cols-2 gap-4 mt-5">
          <ExpensesOverview />
          <ExpensesByCategory />
        </section>
        <section className="grid grid-cols-2 gap-4 mt-5">
          <RecentTransactions />
          <MonthSummary />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
