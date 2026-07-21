const CategoriesListTableHeader = () => {
  return (

      <div className="grid grid-cols-[1fr_1fr_0.5fr_1fr_0.5fr_1fr_1fr] border-b-1 border-gray-100 py-3 mb-0">
        <div className="font-semibold">Category Name</div>
        <div className="font-semibold">Type</div>
        <div className="font-semibold">Icon</div>
        <div className="font-semibold">Color In Pie Chart</div>
        <div className="font-semibold">Transactions</div>
        <div className="font-semibold">Total Amount</div>
        <div className="font-semibold">Actions</div>
      </div>
  );
};

export default CategoriesListTableHeader;
