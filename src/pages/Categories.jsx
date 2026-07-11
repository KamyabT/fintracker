import AddCategoriesForm from "../components/categories/AddCategoriesForm";
import AddTransactionForm from "../components/ui/AddTransactionForm";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Button from "../components/ui/Button";
import CategoriesList from "../components/categories/CategoriesList";
import { useState } from "react";
import { useTransactions } from "../context/TransactionsContext";

const Categories = () => {
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const { add } = useTransactions();

  function handleShowCategoryForm() {
    setShowCategoryForm(true);
  }

  return (
    <div className="flex flex-row bg-back-secondary ">
      <Sidebar />
      <main className="flex-1 flex-wrap px-5 py-5 overflow-y-auto">
        {showCategoryForm && (
          <AddCategoriesForm setShowCategoryForm={setShowCategoryForm} />
        )}
        {add && <AddTransactionForm />}
        <Header />
        <section className="flex flex-col  bg-back-white space-y-6 px-4 py-4 rounded-md shadow-sm">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col justify-between">
              <h3 className="font-semibold text-xl mb-1">Categories</h3>
              <span className="text-gray-500 text-sm font-normal">
                Manage your income and expense categories
              </span>
            </div>
            <div className="flex items-center">
              <Button
                classesList="bg-primary text-white px-4 py-2 rounded-lg font-normal text-[14px] hover:bg-primary-dark cursor-pointer me-4"
                type="button"
                onClick={handleShowCategoryForm}
              >
                + Add Category
              </Button>
            </div>
          </div>
          <div>
            <CategoriesList />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Categories;
