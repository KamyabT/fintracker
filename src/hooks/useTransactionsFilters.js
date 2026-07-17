import { useReducer } from "react";
import { filtersReducer, initialState } from "../reducers/filtersReducer";

export function useTransactionFilters(transactions) {

    const [filteredTransactions , dispatch] = useReducer(filtersReducer , initialState)


  let filteredTransactions = [...tranactions];

  console.log(" filters hook");
}
