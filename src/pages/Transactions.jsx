import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useTransactionStats } from "../hooks/useTransactionStats";
import RecentTransactions from "../components/dashboard/RecentTransactions";

const Transactions = () => {
  const { setAdd } = useTransactionStats();

  return (
    <div className="flex flex-row bg-back-secondary ">
      <Sidebar />
      <main className="flex-1 px-5 py-5">
        <Header setAdd={setAdd} />
        <section className="">
          <RecentTransactions />
        </section>
      </main>
    </div>
  );
};

export default Transactions;
