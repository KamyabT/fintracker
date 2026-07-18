import SelectPerPage from "../ui/SelectPerPage";
import TransactionsFilters from "./TransactionsFilters";

const TransactionsHeader = ({dispatch , transactionsFilters}) => {
  return (
    <div className="flex flex-row justify-between items-center mb-3">
      <p className="text-[18px] font-semibold">All Transactions</p>
      <div className="flex items-center">
        <TransactionsFilters dispatch={dispatch} transactionsFilters={transactionsFilters}/>
        <SelectPerPage />
      </div>
    </div>
  );
};

export default TransactionsHeader;
