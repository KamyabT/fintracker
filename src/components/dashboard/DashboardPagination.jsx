import { useTransactions } from "../../context/TransactionsContext";

const DashboardPagination = () => {
  const { dashboardTotalPages, setDashboardPage, dashboardPage } =
    useTransactions();

  function handleChangePage(page) {
    if (page < 1 || page > dashboardTotalPages) {
      return;
    }
    setDashboardPage(page);
  }

  const pages = Array.from({ length: dashboardTotalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center mt-5">
      <ul className="flex flex-row">
        <li
          className="border border-gray-300 rounded-md mx-2 px-2 cursor-pointer hover:bg-primary hover:text-white"
          onClick={() => handleChangePage(dashboardPage - 1)}
        >
          {"<"}
        </li>
        {pages.map((page) => {
          return (
            <li
              className={`${dashboardPage === page ? "bg-indigo-500 text-white" : "text-gray-500"} mx-2 px-2 cursor-pointer rounded-md text-[15px] hover:bg-indigo-500 hover:text-white active:bg-indigo-500 active:text-white`}
              onClick={() => handleChangePage(page)}
              key={page}
            >
              {page}
            </li>
          );
        })}
        <li
          className="border border-gray-300 rounded-md mx-2 px-2 cursor-pointer hover:bg-primary hover:text-white"
          onClick={() => handleChangePage(dashboardPage + 1)}
        >
          {">"}
        </li>
      </ul>
    </div>
  );
};

export default DashboardPagination;
