import { createContext, useContext, useState } from "react";
import {
  getTransactions,
  getAllTransactions,
  getCategories,
  deleteTransaction,
  updateTransaction,
} from "../services/transactions";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const TransactionsContext = createContext();

export function TransactionsContextProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  // modal state
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [transactionToEdit, setTransactionToEdit] = useState(null);

  const { data: categories , isLoading : categoryLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { data: allTransaction , isLoading : allTransactionsLoading } = useQuery({
    queryKey: ["allTransaction"],
    queryFn: getAllTransactions,
  });

  const { data: transactions , isLoading } = useQuery({
    queryKey: ["transactions", currentPage, perPage],
    queryFn: () => getTransactions(currentPage, perPage),
  });

  async function handleDeleteTransaction(transaction) {
    try {
      await deleteTransaction(transaction);
      toast.success("Transaction deleted successfully!");

    } catch (error) {
      toast.error("Failed to delete transaction");
      console.log(error);
    }
  }

  async function handleUpdateTransaction(data) {
    try {
      await updateTransaction(data);
      toast.success("Transaction updated successfully!");
      setTransactionToEdit(null);
      setShowTransactionModal(false);
      setCurrentPage(1);
    } catch (error) {
      toast.error("Failed to update transaction");
      console.log(error);
    }
  }

  function openAddModal() {
    setTransactionToEdit(null);
    setShowTransactionModal(true);
  }

  function openEditModal(transaction) {
    setTransactionToEdit(transaction);
    setShowTransactionModal(true);
  }

  function closeModal() {
    setTransactionToEdit(null);
    setShowTransactionModal(false);
  }
  
  return (
    <TransactionsContext.Provider
      value={{
        transactions: transactions?.items ?? [],
        totalPages: transactions?.totalPages ?? 1,
        totalItems: transactions?.totalItems ?? 0,
        currentPage: transactions?.page ?? currentPage,

        isLoading,
        categoryLoading,
        allTransactionsLoading,
        allTransaction,
        categories,
        showTransactionModal,
        transactionToEdit,
        setPerPage,
        setCurrentPage,
        handleDeleteTransaction,
        handleUpdateTransaction,
        openAddModal,
        openEditModal,
        closeModal,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}
