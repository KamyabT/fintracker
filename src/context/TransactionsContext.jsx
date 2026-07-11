import { createContext, useContext, useEffect, useState } from "react";
import {
  getTransactions,
  getAllTransactions,
  getCategories,
  deleteTransaction,
} from "../services/transactions";
import toast from "react-hot-toast";

const TransactionsContext = createContext();

export function TransactionsContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allTransactions, setAllTransactions] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const [add, setAdd] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [perPage, setPerPage] = useState(5);

  useEffect(() => {
    async function getTransactionsList() {
      setIsLoading(true);
      setError(null);

      try {
        const [allCategories, allDatas, pageData] = await Promise.all([
          getCategories(),
          getAllTransactions(),
          getTransactions(currentPage, perPage),
        ]);
        setAllCategories(allCategories);
        setAllTransactions(allDatas.items);

        setTransactions(pageData.items);
        setCurrentPage(pageData.page);
        setTotalPages(pageData.totalPages);
        setTotalItems(pageData.totalItems);
      } catch (error) {
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
      // refetch to update the list
      // hint: trigger useEffect by changing a state it depends on
      // or call fetchTransactions directly
      setCurrentPage(1); // this triggers useEffect to refetch
    } catch (error) {
      toast.error("Failed to delete transaction");
      console.log(error);
    }
  }

  return (
    <TransactionsContext.Provider
      value={{
        add,
        isLoading,
        transactions,
        totalPages,
        currentPage,
        allTransactions,
        allCategories,
        setPerPage,
        setAdd,
        setCurrentPage,
        handleDeleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}
