import { createContext, useContext, useEffect, useState } from "react";
import {
  getTransactions,
  getAllTransactions,
  getCategories,
  deleteTransaction,
  updateTransaction,
} from "../services/transactions";
import toast from "react-hot-toast";

const TransactionsContext = createContext();

export function TransactionsContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allTransactions, setAllTransactions] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [perPage, setPerPage] = useState(5);

  // modal state
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [transactionToEdit, setTransactionToEdit] = useState(null);

  useEffect(() => {
    async function getTransactionsList() {
      setIsLoading(true);
      setError(null);
      try {
        const [categoriesData, allDatas, pageData] = await Promise.all([
          getCategories(),
          getAllTransactions(),
          getTransactions(currentPage, perPage),
        ]);
        setAllCategories(categoriesData);
        setAllTransactions(allDatas.items);
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
        allTransactions,
        allCategories,
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