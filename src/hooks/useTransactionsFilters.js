import { useTransactions } from "../context/TransactionsContext";

export function useTransactionFilters() {
  const { transactions } = useTransactions();
  const types = "Expense";
  const categoryId = "0rd2qqjr3moa5si";
  let filteredTransactions;
  console.log("all ", transactions);

  filteredTransactions = transactions.filter((transaction) => {
    return transaction.type === types;
  });

  transactions.filter((transaction) => {
    return transaction.expand.category.id === categoryId;
  });

  let transactions1 = filteredTransactions;

  return { transactions1 };
}
