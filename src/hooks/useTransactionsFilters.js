import { useReducer } from "react";
import { useTransactions } from "../context/TransactionsContext";
import { filtersReducer, initialState } from "../reducers/filtersReducer";

export function useTransactionFilters() {
  const [transactionsFilters, dispatch] = useReducer(filtersReducer, initialState);
  const { transactions } = useTransactions();
  const { search, type, category } = transactionsFilters;
  let filteredTransactions = [...transactions];

  if (search && search !== "") {
    filteredTransactions = filteredTransactions.filter((transaction) => {
      return transaction.transactionName.toLowerCase().includes(search.toLowerCase());
    });
  }

  if (type !== "All") {
    filteredTransactions = filteredTransactions.filter((transaction) => {
      return transaction.type === type;
    });
  }

  if (category !== "All") {
    filteredTransactions = filteredTransactions.filter((transaction) => {
      return transaction.expand.category.id === category;
    });
  }

  return { filteredTransactions, dispatch, transactionsFilters };
}
