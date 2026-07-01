import { useTransactions } from "../context/TransactionsContext";

export function useTransactionStats() {
  const { allTransactions } = useTransactions();

  const totalIncome = allTransactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = allTransactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const netBalance = totalIncome - totalExpenses;

  const savingRate = "40%";

  return { totalIncome, totalExpenses, netBalance, savingRate };
}
