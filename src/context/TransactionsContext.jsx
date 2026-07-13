import { createContext, useContext, useState } from "react";
import {
  getTransactions,
  getAllTransactions,
  getCategories,
  deleteTransaction,
  updateTransaction,
} from "../services/transactions";
import toast from "react-hot-toast";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const TransactionsContext = createContext();

export function TransactionsContextProvider({ children }) {
  const queryClient = useQueryClient();

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [transactionToEdit, setTransactionToEdit] = useState(null);

  /***********React Query***********/
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { data: allTransaction } = useQuery({
    queryKey: ["allTransaction"],
    queryFn: getAllTransactions,
  });

  const { data: transactionsData, isLoading } = useQuery({
    queryKey: ["transactions", currentPage, perPage],
    queryFn: () => getTransactions(currentPage, perPage),
  });

  const transactions = transactionsData?.items || [];
  const totalPages = transactionsData?.totalPages || 1;
  const totalItems = transactionsData?.totalItems || 0;

  /*****************Delete Transaction Request Initiation*****************/

  async function handleDeleteTransaction(transaction) {
    try {
      await deleteTransaction(transaction);
      toast.success("Transaction deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["allTransaction"] });
    } catch (error) {
      toast.error("Failed to delete transaction");
      console.log(error);
    }
  }

  /*****************Update Transaction Request Initiation*****************/

  async function handleUpdateTransaction(data) {
    try {
      await updateTransaction(data);
      toast.success("Transaction updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["allTransaction"] });
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
        totalPages,
        totalItems,
        currentPage,

        isLoading,

        allTransaction,
        categories,
        transactions,

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
