import CategoriesListHeader from "./CategoriesListHeader";

const CategoriesList = () => {
  return (
    <div>
      <CategoriesListHeader />
      <div className="grid grid-cols-[50px_1fr_1fr_1.5fr_1fr_1fr] border-b-1 border-gray-100 py-3 mb-0">
        Table
      </div>
    </div>
  );
};

export default CategoriesList;
