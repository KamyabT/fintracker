import Sidebar from "../components/Sidebar";
import StatsBox from "../components/dashboard/StatsBox";
import ExpensesOverview from "../components/dashboard/ExpensesOverview";
import ExpensesByCategory from "../components/dashboard/ExpensesByCategory";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import MonthSummary from "../components/dashboard/MonthSummary";
import { useTransactions } from "../context/TransactionsContext";
import { getTransactions } from "../services/transactions";
import { useEffect, useState } from "react";
import { CircleDollarSign, Wallet, PiggyBank } from "lucide-react";

const Dashboard = () => {
  const { totalIncomes, totalExpenses , netBalance , savingRate } = useTransactions();
  const [res, setRes] = useState(null);

  useEffect(() => {
    async function getData() {
      const result = await getTransactions();
      setRes(result);
      console.log(result, "results");
    }

    getData();
  }, []);

  const stats = [
    {
      title: "Total Income",
      amount: totalIncomes,
      icon: <CircleDollarSign color="green" size={42} />,
    },
    {
      title: "Total Expense",
      amount: totalExpenses,
      icon: <CircleDollarSign color="red" size={42} />,
    },
    {
      title: "Net Balance",
      amount: netBalance,
      icon: <Wallet color="blue" size={42} />,
    },
    {
      title: "Saving Rate",
      amount: savingRate,
      icon: <PiggyBank color="purple" size={42} />,
    },
  ];

  return (
    <div className="flex flex-row bg-back-secondary ">
      <Sidebar />
      <main className="flex-1 px-5 py-5">
        <section className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => {
            return <StatsBox stat={stat} key={stat.title}/>;
          })}
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
