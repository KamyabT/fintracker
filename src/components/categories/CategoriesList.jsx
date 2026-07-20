import { useTransactions } from "../../context/TransactionsContext";
import CategoriesListHeader from "./CategoriesListHeader";
import CategoriesListTableHeader from "./CategoriesListTableHeader";
import CategoriesListItem from "./CategoriesListItem";

const CategoriesList = () => {
  const { categories } = useTransactions();

  return (
    <div>
      <CategoriesListHeader />
      <CategoriesListTableHeader />
      {categories?.items.map((cate) => {
        return <CategoriesListItem cate={cate} key={cate.id} />;
      })}
    </div>
  );
};

export default CategoriesList;
