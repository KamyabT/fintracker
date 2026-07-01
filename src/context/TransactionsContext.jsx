import { createContext, useContext, useEffect, useState } from "react";
import { getTransactions, getAllTransactions } from "../services/transactions";
import toast from "react-hot-toast";

const TransactionsContext = createContext();

export function TransactionsContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allTransactions, setAllTransactions] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const perPage = 5;

  useEffect(() => {
    async function getTransactionsList() {
      setIsLoading(true);
      setError(null);

      try {
        const allDatas = await getAllTransactions();
        setAllTransactions(allDatas.data.items);
      } catch (error) {
        setError("Failed to load transactions");
        toast.error("Failed to load transactions");
      }

      try {
        const result = await getTransactions(currentPage, perPage);
        const items = result.data.items;

        setTransactions(items);
        setCurrentPage(result.data.page);
        setTotalPages(result.data.totalPages);
        setTotalItems(result.data.totalItems);
      } catch (error) {
        setError("Failed to load transactions");
        toast.error("Failed to load transactions");
      } finally {
        setIsLoading(false);
      }
    }

    getTransactionsList();
  }, [currentPage]);

  return (
    <TransactionsContext.Provider
      value={{
        isLoading,
        transactions,
        totalPages,
        currentPage,
        setCurrentPage,
        allTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}
