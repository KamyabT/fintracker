import { useTransactions } from "../../context/TransactionsContext";
import CategoriesListHeader from "./CategoriesListHeader";
import CategoriesListTableHeader from "./CategoriesListTableHeader";
import CategoriesListItem from "./CategoriesListItem";
import { useState } from "react";
import Modal from "../ui/Modal";

const CategoriesList = () => {
  const { categories, handleDeleteCategory } = useTransactions();
  const [categoryToDelete, setCategoryToDelete] = useState();

  async function handleConfirmDelete() {
    await handleDeleteCategory(categoryToDelete);
    setCategoryToDelete(null)
  }

  function handleCancelDelete() {
    setCategoryToDelete(null);
  }

  return (
    <div>
      <CategoriesListHeader />
      <CategoriesListTableHeader />
      {categoryToDelete && (
        <Modal onYes={handleConfirmDelete} onCancel={handleCancelDelete} />
      )}
      {categories?.items.map((cate) => {
        return <CategoriesListItem cate={cate} key={cate.id} setCategoryToDelete={setCategoryToDelete}/>;
      })}
    </div>
  );
};

export default CategoriesList;
