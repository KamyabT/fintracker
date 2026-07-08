import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TransactionsList from "../components/TransactionsList";
import AddTransactionForm from "../components/ui/AddTransactionForm";
import { useTransactions } from "../context/TransactionsContext";
import TransactionsHeader from "../components/transactions/TransactionsHeader";
import Pagination from "../components/ui/Pagination";

const Transactions = () => {
  const { transactions, isLoading, add, setAdd } = useTransactions();

  return (
    <div className="flex flex-row bg-back-secondary ">
      {add && <AddTransactionForm />}
      <Sidebar />
      <main className="flex-1 px-5 py-5">
        <Header setAdd={setAdd} />
        <section className="bg-back-white px-4 py-4 rounded-md shadow-sm">
          <TransactionsHeader />
          <div className="">
            <div className="space-y-3">
              {!isLoading &&
                transactions?.length > 0 &&
                transactions?.map((transaction) => {
                  return (
                    <TransactionsList transaction={transaction} key={transaction.id} showActions={true}/>
                  );
                })}
              {isLoading && (
                <div className="flex justify-center font-semibold text-[16px] text-gray-500">
                  Loading recent transactions please wait...
                </div>
              )}
            </div>
            <Pagination />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Transactions;
