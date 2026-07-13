import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TransactionsList from "../components/TransactionsList";
import AddTransactionForm from "../components/ui/AddTransactionForm";
import { useTransactions } from "../context/TransactionsContext";
import TransactionsHeader from "../components/transactions/TransactionsHeader";
import Pagination from "../components/ui/Pagination";
import Modal from "../components/ui/Modal";
import { useState } from "react";

const Transactions = () => {
  const {
    transactions,
    isLoading,
    showTransactionModal,
    handleDeleteTransaction,
    openEditModal,
  } = useTransactions();

  const [transactionToDelete, setTransactionToDelete] = useState(null);

  async function handleConfirmDelete() {
    await handleDeleteTransaction(transactionToDelete);
    setTransactionToDelete(null);
  }

  function handleCancelDelete() {
    setTransactionToDelete(null);
  }

  return (
    <div className="flex flex-row bg-back-secondary">
      {transactionToDelete && (
        <Modal onYes={handleConfirmDelete} onCancel={handleCancelDelete} />
      )}
      {showTransactionModal && <AddTransactionForm />}
      <Sidebar />
      <main className="flex-1 px-5 py-5">
        <Header />
        <section className="bg-back-white px-4 py-4 rounded-md shadow-sm">
          <TransactionsHeader />
          <div className="space-y-3">
            {!isLoading && transactions?.length > 0 &&
              transactions?.map((transaction) => (
                <TransactionsList
                  transaction={transaction}
                  key={transaction.id}
                  showActions={true}
                  setTransactionToDelete={setTransactionToDelete}
                  setTransactionToEdit={openEditModal} // 👈 use context function
                />
              ))
            }
            {isLoading && (
              <div className="flex justify-center font-semibold text-[16px] text-gray-500">
                Loading transactions...
              </div>
            )}
          </div>
          <Pagination />
        </section>
      </main>
    </div>
  );
};

export default Transactions;