import { createContext, useContext, useEffect, useState } from "react";
import { getTransactions } from "../services/transactions";

const TransactionsContext = createContext();

export function TransactionsContextProvider({ children }) {
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    async function getTransactionsList() {
      const result = await getTransactions();
      setTransactions(result.data.items);
      console.log("get transactions List :", result);
    }

    getTransactionsList();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}
