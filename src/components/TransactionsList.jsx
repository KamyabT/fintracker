import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import { format } from "date-fns";
import { useAuth } from "../context/AuthContext";
import Button from "./ui/Button";
import { useTransactions } from "../context/TransactionsContext";

const TransactionsList = ({ transaction, showActions, setModal }) => {
  const { transactionName, transactionDate, type, amount, expand } = transaction;
  const {handleDeleteTransaction} = useTransactions()
  const { user } = useAuth();

  function handleShowModal(transaction) {
    console.log(transaction.id, "delete clicked");
    // handleDeleteTransaction(transaction)
    setModal(true);
  }

  // function cancelDelete(transaction) {
  //   setModal(false);
  // }

  return (
    <div
      className={`grid ${showActions ? "grid-cols-[50px_1fr_1fr_1.5fr_1fr_1fr_150px]" : "grid-cols-[50px_1fr_1fr_1.5fr_1fr_1fr]"}  border-b-1 border-gray-100 py-3 mb-0`}
    >
      <div className="flex items-center">
        {type === "Income" ? (
          <CircleArrowUp color="#2bc417" size={32} />
        ) : (
          <CircleArrowDown color="#c41717" size={32} />
        )}
      </div>
      <div className="flex flex-col justify-start col-start-2 col-end-4">
        <p className="font-semibold">{transactionName}</p>
        <span className="font-semibold text-[12px] text-gray-500">
          {expand.category.name}
        </span>
      </div>
      <div className="flex flex-row justify-center space-x-3">
        <span className="font-medium text-[14px] flex items-center text-gray-500">
          {format(new Date(transactionDate), "hh:mm a")}
        </span>
        <span className="font-medium text-[14px] flex items-center text-gray-500">
          {format(new Date(transactionDate), "MMM d, y")}
        </span>
      </div>
      <div className="flex justify-center items-center">
        <span
          className={`${type === "Income" ? "bg-back-success text-state--success" : "bg-back-danger text-state--danger"} font-bold flex text-[12px] items-center px-2 py-1 rounded-lg`}
        >
          {type}
        </span>
      </div>
      <div className="flex justify-center ">
        <span
          className={`${type === "Income" ? "text-state--success" : "text-state--danger"} font-bold text-[18px] flex items-center rounded-md`}
        >
          {type === "Income" ? "+" : "-"}
          {user?.currency || "$"}
          {amount.toFixed(2)}
        </span>
      </div>
      {showActions && (
        <div className="flex items-center ms-5">
          <Button
            classesList={`me-3 px-3 py-2 border border-gray-300 rounded-lg text-primary font-semibold text-[14px] cursor-pointer`}
          >
            Edit
          </Button>
          <Button
            classesList={`bg-back-danger-dark text-white px-3 py-2 border border-gray-300 rounded-lg  font-semibold text-[14px] cursor-pointer`}
            onClick={() => handleShowModal(transaction)}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default TransactionsList;
