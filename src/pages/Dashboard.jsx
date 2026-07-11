import Sidebar from "../components/Sidebar";
import StatsBox from "../components/dashboard/StatsBox";
import ExpensesOverview from "../components/dashboard/ExpensesOverview";
import ExpensesByCategory from "../components/dashboard/ExpensesByCategory";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import MonthSummary from "../components/dashboard/MonthSummary";
import { useTransactions } from "../context/TransactionsContext";
import { useTransactionStats } from "../hooks/useTransactionStats";
import { CircleDollarSign, Wallet, PiggyBank } from "lucide-react";
import Header from "../components/Header";
import AddTransactionForm from "../components/ui/AddTransactionForm";

const Dashboard = () => {
  const { totalIncome, totalExpenses, netBalance, savingRate } = useTransactionStats();
  const { add } = useTransactions();

  const stats = [
    {
      title: "Total Income",
      amount: totalIncome,
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
      <main className="flex-1 flex-wrap px-5 py-5 overflow-y-auto">
        {add && <AddTransactionForm />}
        <Header />
        <section className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => {
            return <StatsBox stat={stat} key={stat.title} />;
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
