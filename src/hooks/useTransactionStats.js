import { useMemo } from "react";
import { useTransactions } from "../context/TransactionsContext";

export function useTransactionStats() {
  const { allTransaction } = useTransactions();

  const { totalIncome, totalExpenses } = useMemo(() => {
    return (
      allTransaction?.items?.reduce(
        (acc, transaction) => {
          if (transaction.type === "Income") {
            acc.totalIncome += transaction.amount;
          }
          if (transaction.type === "Expense") {
            acc.totalExpenses += transaction.amount;
          }

          return acc;
        },
        {
          totalIncome: 0,
          totalExpenses: 0,
        },
      ) ?? { totalIncome: 0, totalExpenses: 0 }
    );
  }, [allTransaction?.items]);

  const netBalance = totalIncome - totalExpenses;

  const savingRate = "40%";

  return { totalIncome, totalExpenses, netBalance, savingRate };
}
