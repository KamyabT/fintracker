import { useTransactions } from "../context/TransactionsContext";

export function usePagination() {
  const { setCurrentPage, currentPage, totalPages } = useTransactions();

  function handleChangePage(page) {
    if (page < 1 || page > totalPages) {
      return;
    }
    setCurrentPage(page);
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return { pages, handleChangePage, currentPage };
}
