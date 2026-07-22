import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AddTransactionForm from "../components/ui/AddTransactionForm";
import { useTransactions } from "../context/TransactionsContext";

const Budget = () => {

  const {showTransactionModal} = useTransactions()
  
  return (
    <div className="flex flex-row bg-back-secondary">
      <Sidebar />
      <main className="flex-1 flex-wrap px-5 py-5 overflow-y-auto">
        {showTransactionModal && <AddTransactionForm />}
        <Header />
      </main>
    </div>
  );
};

export default Budget;
