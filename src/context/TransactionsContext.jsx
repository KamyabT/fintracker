import { createContext, useContext, useEffect, useState } from "react";
import { getTransactions } from "../services/transactions";
import toast from "react-hot-toast";

const TransactionsContext = createContext();

export function TransactionsContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [totalIncomes, setTotalIncomes] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState([]);
  const [netBalance, setNetBalance] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const perPage = 5; // how many per page

  const savingRate = "%45";

  useEffect(() => {
    async function getTransactionsList() {
      setIsLoading(true);
      setError(null);

      try {
        const result = await getTransactions(currentPage, perPage);
        const items = result.data.items;
        console.log(result.data, 5555);
        setTransactions(items);
        setCurrentPage(result.data.page);
        setTotalPages(result.data.totalPages);
        setTotalItems(result.data.totalItems);
        const totalIncome = items
          .filter((transaction) => transaction.type === "Income")
          .reduce((sum, transaction) => sum + transaction.amount, 0);

        setTotalIncomes(totalIncome);

        const totalExpense = items
          .filter((transaction) => transaction.type === "Expense")
          .reduce((sum, transaction) => sum + transaction.amount, 0);
        setTotalExpenses(totalExpense);

        setNetBalance(totalIncome + totalExpense);
      } catch (error) {
        setError("Failed to load transactions");
        toast.error("Failed to load transactions");
      } finally {
        setIsLoading(false);
      }
    }

    getTransactionsList();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        totalIncomes,
        totalExpenses,
        netBalance,
        savingRate,
        isLoading,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}
