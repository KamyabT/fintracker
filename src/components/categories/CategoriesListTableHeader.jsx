const CategoriesListTableHeader = () => {
  return (

      <div className="grid grid-cols-[1fr_1fr_1fr_0.5fr_0.5fr_1fr_1fr] border-b-1 border-gray-100 py-3 mb-0">
        <div>Category Name</div>
        <div>Type</div>
        <div>Icon</div>
        <div>Color</div>
        <div>Transactions</div>
        <div>Totla Amount</div>
        <div>Ations</div>
      </div>
  );
};

export default CategoriesListTableHeader;
