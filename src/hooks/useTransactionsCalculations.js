import { useTransactions } from "../context/TransactionsContext";
import { isThisMonth } from "date-fns";

export function useTransactionsCalculations(){
  const { allTransactions } = useTransactions();

  const thisMonth = allTransactions?.filter((transaction) =>
    isThisMonth(transaction.transactionDate),
  );

  const sortedBycate = (thisMonth ?? []).reduce((acc, transaction) => {
    const { name, color } = transaction.expand.category;
    if (!acc[name]) {
      acc[name] = {
        amount: 0,
        color,
      };
    }
    acc[name].amount += transaction.amount;
    return acc;
  }, {});

  const finalData = Object.entries(sortedBycate).map(([name, data]) => ({
    name,
    amount: data.amount,
    color: data.color,
  }));

  const totalAmount = finalData.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);


    return {totalAmount , finalData}
}