import AddCategoriesForm from "../components/categories/AddCategoriesForm";
import Sidebar from "../components/Sidebar";

const Categories = () => {
  return (
    <div className="flex flex-row bg-back-secondary ">
      <Sidebar />
      <main className="flex-1 px-5 py-5">
        <h1>hello categories</h1>
        <AddCategoriesForm />
      </main>
    </div>
  );
};

export default Categories;
