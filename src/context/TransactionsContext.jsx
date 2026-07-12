import { createContext, useContext, useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [perPage, setPerPage] = useState(5);

  // modal state
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [transactionToEdit, setTransactionToEdit] = useState(null);

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

    const { data: allTransaction } = useQuery({
    queryKey: ["allTransaction"],
    queryFn: getAllTransactions,
  });

      const { data: transactionss } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions(currentPage, perPage),
  });

  useEffect(() => {
    async function getTransactionsList() {
      setIsLoading(true);
      setError(null);
      try {
        const [pageData] = await Promise.all([
          getTransactions(currentPage, perPage),
        ]);
        setTransactions(pageData.items);
        setCurrentPage(pageData.page);
        setTotalPages(pageData.totalPages);
        setTotalItems(pageData.totalItems);
      } catch (error) {
        toast.error("Failed to load data");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getTransactionsList();
  }, [currentPage, perPage]);

  async function handleDeleteTransaction(transaction) {
    try {
      await deleteTransaction(transaction);
      toast.success("Transaction deleted successfully!");
      setCurrentPage(1);
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
        isLoading,
        transactions,
        totalPages,
        currentPage,
        allTransaction,
        transactionss,
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
