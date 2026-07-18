import { useReducer } from "react";
import { useTransactions } from "../context/TransactionsContext";
import { filtersReducer, initialState } from "../reducers/filtersReducer";

export function useTransactionFilters() {
  const [transactionsFilters, dispatch] = useReducer(filtersReducer, initialState);

  console.log(transactionsFilters , "inside custom hook")

  const { transactions } = useTransactions();
  const types = "Expense";
  const categoryId = "0rd2qqjr3moa5si";
  const query = "test";
  let filteredTransactions = [...transactions];
  console.log("all ", transactions);

  filteredTransactions = filteredTransactions.filter((transaction) => {
    return transaction.name === query;
  });

  filteredTransactions = filteredTransactions.filter((transaction) => {
    return transaction.type === types;
  });

  filteredTransactions = filteredTransactions.filter((transaction) => {
    return transaction.expand.category.id === categoryId;
  });

  let transactions1 = filteredTransactions;

  return { transactions1 , dispatch , transactionsFilters};
}
