import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TransactionsList from "../components/TransactionsList";
import AddTransactionForm from "../components/ui/AddTransactionForm";
import { useTransactions } from "../context/TransactionsContext";
import { usePagination } from "../hooks/usePagination";
import TransactionsHeader from "../components/transactions/TransactionsHeader";

const Transactions = () => {
  const { transactions, isLoading, add, setAdd, setPerPage } = useTransactions();

  const { pages, currentPage, handleChangePage } = usePagination();

  return (
    <div className="flex flex-row bg-back-secondary ">
      {add && <AddTransactionForm />}
      <Sidebar />
      <main className="flex-1 px-5 py-5">
        <Header setAdd={setAdd} />
        <section className="bg-back-white px-4 py-4 rounded-md shadow-sm">
          <TransactionsHeader />
          <div className="">
            <div className="space-y-3">
              {!isLoading &&
                transactions?.length > 0 &&
                transactions?.map((transaction) => {
                  return (
                    <TransactionsList transaction={transaction} key={transaction.id}/>
                  );
                })}
              {isLoading && (
                <div className="flex justify-center font-semibold text-[16px] text-gray-500">
                  Loading recent transactions please wait...
                </div>
              )}
            </div>
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
        </section>
      </main>
    </div>
  );
};

export default Transactions;
