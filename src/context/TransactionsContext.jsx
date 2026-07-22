import { createContext, useContext, useState } from "react";
import {
  getTransactions,
  getAllTransactions,
  getCategories,
  deleteTransaction,
  updateTransaction,
  addNewTransaction,
  addNewCategory,
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

  const [dashboardPage, setDashboardPage] = useState(1);
  const DASHBOARD_PER_PAGE = 5;
  /***********React Queries***********/
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 60 * 1000,
  });

  const { data: allTransaction } = useQuery({
    queryKey: ["allTransaction"],
    queryFn: getAllTransactions,
    staleTime: 60 * 1000,
  });

  const { data: transactionsData, isLoading } = useQuery({
    queryKey: ["transactions", currentPage, perPage],
    queryFn: () => getTransactions(currentPage, perPage),
    staleTime: 60 * 1000,
  });

  const { data: dashboardTransactionsData, isLoading: isLoadingDashboardTransactions } =
    useQuery({
      queryKey: ["dashboardTransactions", dashboardPage],
      queryFn: () => getTransactions(dashboardPage, DASHBOARD_PER_PAGE),
    });

  const transactions = transactionsData?.items || [];
  const totalPages = transactionsData?.totalPages || 1;
  const totalItems = transactionsData?.totalItems || 0;
  const dashboardTransactions = dashboardTransactionsData?.items || [];
  const dashboardTotalPages = dashboardTransactionsData?.totalPages || 1;
  /*****************Add Transaction Request Initiation*****************/

  async function handleAddTransaction(data) {
    try {
      await addNewTransaction(data);
      toast.success("Transaction added successfully!");
      closeModal();
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["allTransaction"] });
    } catch (error) {
      toast.error("Failed to add transaction");
      throw error;
    }
  }

  /*****************Delete Transaction Request Initiation*****************/

  async function handleDeleteTransaction(transaction) {
    try {
      await deleteTransaction(transaction);
      toast.success("Transaction deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["allTransaction"] });
    } catch (error) {
      toast.error("Failed to delete transaction");
      throw error;
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
    } catch (error) {
      toast.error("Failed to update transaction", error.name);
      throw error;
    }
  }

  /*****************Add Category Request Initiation*****************/

  async function handleAddCategory(data) {
    try {
      await addNewCategory(data);
      toast.success("Transaction added successfully!");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    } catch (error) {
      toast.error("Failed to add transaction");
      throw error;
    }
  }

  /*****************Delete Category Request Initiation*****************/
  async function handleDeleteCategory(category) {
    try {
      await deleteTransaction(category);
      toast.success("Transaction deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["allTransaction"] });
    } catch (error) {
      toast.error("Failed to delete transaction");
      throw error;
    }
  }
  /*****************Edit Category Request Initiation*****************/

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
        isLoadingDashboardTransactions,

        allTransaction,
        categories,
        transactions,

        dashboardTransactions,
        dashboardTotalPages,
        dashboardPage,
        setDashboardPage,

        showTransactionModal,
        transactionToEdit,

        setPerPage,
        setCurrentPage,

        handleDeleteTransaction,
        handleUpdateTransaction,
        handleAddTransaction,
        handleAddCategory,
        handleDeleteCategory,

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
