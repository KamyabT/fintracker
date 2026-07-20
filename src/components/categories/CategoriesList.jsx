import { useTransactions } from "../../context/TransactionsContext";
import CategoriesListHeader from "./CategoriesListHeader";
import CategoriesListTableHeader from "./CategoriesListTableHeader";

const CategoriesList = () => {
  const { categories } = useTransactions();

  return (
    <div>
      <CategoriesListHeader />
      <CategoriesListTableHeader/>
      <div className="grid grid-cols-[1fr_1fr_1fr_0.5fr_0.5fr_1fr_1fr] border-b-1 border-gray-100 py-3 mb-0">
        <div>Food</div>
        <div>Expense</div>
        <div>Icon</div>
        <div>Color</div>
        <div>53</div>
        <div>$5000</div>
        <div>Ations</div>
      </div>
    </div>
  );
};

export default CategoriesList;
