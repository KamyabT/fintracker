import SelectPerPage from "../ui/SelectPerPage";
import TransactionsFilters from "./TransactionsFilters";

const TransactionsHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center mb-3">
      <p className="text-[18px] font-semibold">All Transactions</p>
      <div className="flex items-center">
        <TransactionsFilters />
        <SelectPerPage />
      </div>
    </div>
  );
};

export default TransactionsHeader;
