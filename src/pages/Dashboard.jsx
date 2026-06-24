import Sidebar from "../components/Sidebar";
import StatsBox from "../components/dashboard/StatsBox";
import ExpensesOverview from "../components/dashboard/ExpensesOverview";
import ExpensesByCategory from "../components/dashboard/ExpensesByCategory";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import MonthSummary from "../components/dashboard/MonthSummary";

const Dashboard = () => {
  return (
    <div className="flex flex-row bg-back-secondary ">
      <Sidebar />
      <main className="flex-1 px-5 py-5">
        <section className="grid grid-cols-4 gap-4">
          <StatsBox />
          <StatsBox />
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
