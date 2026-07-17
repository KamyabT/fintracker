import { useTransactions } from "../../context/TransactionsContext";

const SelectPerPage = () => {
  const { setPerPage } = useTransactions();

  function handlePerPage(e) {
    setPerPage(Number(e.target.value));
  }

  return (
    <div className="space-x-2 me-2">
      <label className="font-medium text-[14px] text-black-500">Records per page</label>
      <select
        className="font-medium border px-3 py-2 border-gray-300 outline-none rounded-lg text-[14px] cursor-pointer focus:border-primary"
        onChange={(e) => handlePerPage(e)}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="25">25</option>
      </select>
    </div>
  );
};

export default SelectPerPage;
