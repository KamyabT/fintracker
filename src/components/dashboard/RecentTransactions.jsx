import RecentTransactionsItem from "./RecentTransactionsItem";
import { useTransactions } from "../../context/TransactionsContext";
import { Link } from "react-router-dom";

const RecentTransactions = () => {
  const { transactions, isLoading, setCurrentPage, currentPage, totalPages } =
    useTransactions();

  function handleChangePage(page) {
    if (page < 1 || page > totalPages) {
      return;
    }
    setCurrentPage(page);
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  console.log(pages , "pages count")

  return (
    <div className="bg-back-white px-4 py-4 rounded-md shadow-sm">
      <div className="flex flex-row justify-between items-center mb-3">
        <p className="text-[18px] font-semibold">Recent Transactions</p>
        <Link
          to="/transactions"
          className="bg-back-white px-3 py-2 border border-gray-300 rounded-lg text-primary font-semibold text-[14px] hover:bg-primary hover:text-white cursor-pointer"
        >
          View All
        </Link>
      </div>
      {isLoading && (
        <div className="flex justify-center font-semibold text-[16px] text-gray-500">
          Loading recent transactions please wait...
        </div>
      )}
      {!isLoading && transactions?.length > 0 && (
        <div className="space-y-3">
          {transactions?.map((transaction) => {
            return (
              <RecentTransactionsItem transaction={transaction} key={transaction.id} />
            );
          })}
        </div>
      )}
      <div className="flex justify-center mt-5">
        <ul className="flex flex-row">
          <li
            className="border border-gray-300 rounded-md mx-2 px-2 cursor-pointer hover:bg-primary hover:text-white"
            onClick={() => handleChangePage(currentPage - 1)}
          >
            {"<"}
          </li>
          {pages.map((page) => {
            return (
              <li
                className={`${currentPage === page ? "bg-indigo-500 text-white" : "text-gray-500"} mx-2 px-2 cursor-pointer rounded-md text-[15px] hover:bg-indigo-500 hover:text-white active:bg-indigo-500 active:text-white`}
                onClick={() => handleChangePage(page)}
                key={page}
              >
                {page}
              </li>
            );
          })}
          <li
            className="border border-gray-300 rounded-md mx-2 px-2 cursor-pointer hover:bg-primary hover:text-white"
            onClick={() => handleChangePage(currentPage + 1)}
          >
            {">"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecentTransactions;
