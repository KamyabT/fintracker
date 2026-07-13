import { useTransactions } from "../../context/TransactionsContext";
// import { useEffect } from "react";

const SelectPerPage = () => {
  const { setPerPage } = useTransactions();



  function handlePerPage(e) {
    console.log("value", e.target.value);
    setPerPage(e.target.value);
  }

  return (
    <div className="space-x-2 me-2">
      <label className="font-medium text-[14px] text-black-500">Records per page</label>
      <select
        className="font-medium border px-3 py-2 border-gray-300 outline-none rounded-lg text-[14px] cursor-pointer"
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
