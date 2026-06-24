import Button from "../ui/Button";

const RecentTransactions = () => {
  return (
    <div className="bg-back-white px-4 py-4 rounded-md shadow-sm">
      <div className="flex flex-row justify-between items-center">
        <p className="font-semibold">Recent Transactions</p>
        <Button>View All</Button>
      </div>
      <div
        className="grid
          grid-cols-[2fr_1fr_120px_140px]
          items-center
          py-4
          border-b
          border-gray-100"
      >
        
        <div>

        </div>
      </div>
      <div>Pagination</div>
    </div>
  );
};

export default RecentTransactions;
