import { createContext, useContext, useEffect, useState } from "react";
import {
  getTransactions,
  getAllTransactions,
  getCategories,
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
  const [perPage , setPerPage] = useState(5)

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
        const items = pageData.data.items;

        setTransactions(items);
        setCurrentPage(pageData.data.page);
        setTotalPages(pageData.data.totalPages);
        setTotalItems(pageData.data.totalItems);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getTransactionsList();
  }, [currentPage, perPage]);

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
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}
