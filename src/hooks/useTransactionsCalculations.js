import { useMemo } from "react";
import { useTransactions } from "../context/TransactionsContext";
import { isThisMonth } from "date-fns";

export function useTransactionsCalculations() {
  const { allTransaction } = useTransactions();

  /***********Is This Month***********/
  const thisMonth = useMemo(() => {
    return allTransaction?.items?.filter((transaction) =>
      isThisMonth(new Date(transaction.transactionDate)),
    );
  }, [allTransaction?.items]);

  /***********Sorting By Cate***********/

  const sortedBycate = useMemo(() => {
    return (thisMonth ?? []).reduce((acc, transaction) => {
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
  }, [thisMonth]);

  /***********Final Data After Sorting***********/

  const finalData = useMemo(() => {
    return Object.entries(sortedBycate).map(([name, data]) => ({
      name,
      amount: data.amount,
      color: data.color,
    }));
  }, [sortedBycate]);

  /***********Total Amount After Sorting***********/

  const totalAmount = useMemo(() => {
    return finalData.reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);
  }, [finalData]);

  return { totalAmount, finalData };
}
